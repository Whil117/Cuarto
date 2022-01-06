import baseUrl from '@Assets/cuartobackend';
import withAuth from '@Auth/withAuth';
import AtomImg from '@Components/Atoms/Image';
import AtomIcon from '@Components/Atoms/Svg/index';
import { css } from '@emotion/react';
import { ActionAvatar, ActionLogout } from '@Redux/actions/actions';
import reducer from '@Redux/reducers/pages/settings/reducer';
import { DashboardStyled } from '@Styles/global';
import { AddSaleSubmitButton } from '@Styles/pages/dashboard/addsale';
import * as S from '@Styles/pages/dashboard/settings';
import {
  ChangeState,
  Image,
  SelectorProps
} from '@Types/pages/dashboard/addsale/types';
import axios from 'axios';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Router from 'next/router';
import { SyntheticEvent, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Settings: NextPage = () => {
  const data = useSelector((state: SelectorProps) => state.user);
  const [form, formDispatch] = useReducer(reducer, data);
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const handleLogOut = () => {
    dispatch(ActionLogout());
    Router.replace('/');
  };

  const extractFile = (event: Image) => {
    const file = event.target.files && event.target.files[0];
    return file;
  };
  const handleUploadImage = async (img: File) => {
    const storage = getStorage();
    const storageRef = ref(storage, `profile/${img?.name}_${Date.now()}`);
    await uploadBytes(storageRef, img);
    const url = await getDownloadURL(storageRef);
    url && formDispatch(ActionAvatar(url));
  };
  const handleImage = (event: Image) => {
    const image = extractFile(event);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    if (image && types.includes(image.type)) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        if (event.target) {
          handleUploadImage(image);
        }
      };
      reader.readAsDataURL(image);
    }
  };
  const handleChange = (event: ChangeState) => {
    formDispatch({
      type: 'ADD_FIELD',
      payload: { event }
    });
  };

  const handleSUbmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (!form.username || !form.email) {
      formDispatch({ type: 'ERROR_FORM' });
      console.log('adfas');
    } else {
      dispatch({
        type: 'SAVED_USER',
        payload: form
      });
      await axios
        .put(
          `${baseUrl}/dashboard/profile`,
          {
            username: form.username,
            email: form.email,
            avatar: form.avatar
          },
          {
            headers: {
              'Content-Type': 'application/json',
              token: Cookies.get('accessToken') || ''
            }
          }
        )
        .then((res) => {
          dispatch({
            type: 'SUCCESS',
            payload: {
              message: res.data.message
            }
          });
        })
        .catch((err) => {
          dispatch({
            type: 'ERROR',
            payload: {
              message: err.response.data.message
            }
          });
        });
    }
  };
  const styles = css`
    width: 150px;
    height: 40px;
    background: #ec2929;
    &:hover {
      background: #d82727;
    }
  `;

  return (
    <DashboardStyled>
      <h1>{t('settings-title-1')}</h1>
      <article>
        <h2>{t('settings-title-2')}</h2>
        <p>{t('settings-subtitle-1')}</p>
        <S.EditProfileStyle>
          <S.SettingsAside image={form.avatar}>
            <div>
              {!form.avatar && <AtomImg styles={{ width: 50, height: 50 }} />}
            </div>
            <S.SettingsInputLabel htmlFor="profile">
              <AtomIcon name="icons/navbar/addsmall" />
              <S.SettingsInput
                type="file"
                name="image"
                id="profile"
                display="true"
                onChange={handleImage}
              />
            </S.SettingsInputLabel>
          </S.SettingsAside>
          <S.SettingsForm onSubmit={handleSUbmit}>
            <S.SettingsFormLabel htmlFor="email">
              {t('settings-form-title-1')}
              <S.SettingsInput
                type="text"
                id="text"
                name="username"
                autoComplete="off"
                value={form.username}
                onChange={handleChange}
              />
            </S.SettingsFormLabel>

            <S.SettingsFormLabel htmlFor="password">
              {t('settings-form-title-2')}

              <S.SettingsInput
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={form.email}
                onChange={handleChange}
              />
            </S.SettingsFormLabel>

            {JSON.stringify(form) !== JSON.stringify(data) && (
              <AddSaleSubmitButton type="submit">
                {t('add-form-button-1')}
              </AddSaleSubmitButton>
            )}
          </S.SettingsForm>
        </S.EditProfileStyle>
      </article>
      <article>
        <h2>{t('settings-title-3')}</h2>
        <AddSaleSubmitButton onClick={handleLogOut} {...styles}>
          Log out
        </AddSaleSubmitButton>
      </article>
    </DashboardStyled>
  );
};

export default withAuth(Settings);
