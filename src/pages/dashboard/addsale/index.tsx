import addCuartoForm, { addCuartoOffers } from '@Assets/addCuarto';
import baseUrl from '@Assets/cuartobackend';
import withAuth from '@Auth/withAuth';
import AtomIcon from '@Components/Atoms/Svg';
import {
  ActionAddImages,
  ActionChangeState,
  ActionCleanForm,
  ActionDeleteImages,
  ActionDeleteOffer,
  ActionError,
  ActionSuccess
} from '@Redux/actions/actions';
import { DashboardStyled } from '@Styles/global';
import * as S from '@Styles/pages/dashboard/addsale';
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
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypesReducers } from 'redux/reducers/pages/addsale/reducer';

const Addsale: NextPage = () => {
  const data = useSelector((state: SelectorProps) => state.addsale);
  const userData = useSelector((state: SelectorProps) => state.user);
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const extractFile = (event: Image) => {
    const file = event.target.files && event.target.files[0];
    return file;
  };
  const handleUploadImage = async (img: File) => {
    const storage = getStorage();
    const storageRef = ref(storage, `photos/${img?.name}_${Date.now()}`);
    await uploadBytes(storageRef, img);
    const url = await getDownloadURL(storageRef);
    if (url) {
      dispatch(ActionAddImages(url));
    }
  };
  const handleImage = (event: Image) => {
    const image = extractFile(event);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    if (image && types.includes(image.type)) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        if (event.target) {
          if (data.images.length <= 4) {
            handleUploadImage(image);
          }
        }
      };
      reader.readAsDataURL(image);
    }
  };
  const handleChangeState = (event: ChangeState) =>
    dispatch(ActionChangeState(event));
  const handleCDetailState = (
    event: ChangeState,
    type: keyof typeof TypesReducers
  ) => {
    dispatch({
      type,
      payload: { event }
    });
  };

  const handleDeleteImage = (url: string) => dispatch(ActionDeleteImages(url));

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (data.title && data.description && data.address) {
      await axios
        .post(
          `${baseUrl}/dashboard/addnewsale`,
          {
            ...data,
            author: userData._id
          },
          {
            headers: {
              contentType: 'application/json',
              token: Cookies.get('accessToken') || ''
            }
          }
        )
        .then((res) => {
          if (res.data) {
            dispatch(
              ActionSuccess({
                title: res.data.message.title,
                text: res.data.message.text
              })
            );
            dispatch(ActionCleanForm());
          }
        })
        .catch((err) => {
          dispatch(
            ActionError({
              title: err.response.data.message.title,
              text: err.response.data.message.text
            })
          );
        });
    }
  };

  return (
    <DashboardStyled>
      <h1>{t('add-sale-title-1')}</h1>
      <p>{t('add-sale-text-1')}</p>
      <S.AddSaleForm onSubmit={handleSubmit}>
        <S.AddSaleLabel htmlFor="title">
          {t('add-sale-sub-title-1')}*
          <S.AddSaleInput
            name="title"
            type="text"
            id="title"
            value={data.title}
            onChange={(event) => handleChangeState(event)}
          />
        </S.AddSaleLabel>
        <S.AddSaleLabel htmlFor="description">
          {t('add-sale-sub-title-2')}*
          <S.AddSaleTextArea
            name="description"
            id="description"
            cols={30}
            rows={10}
            width="490px"
            value={data.description}
            onChange={(event) => handleChangeState(event)}
          ></S.AddSaleTextArea>
        </S.AddSaleLabel>
        <S.AddSaleLabel htmlFor="address">
          {t('add-sale-sub-title-3')}*
          <S.AddSaleInput
            type="text"
            id="address"
            name="address"
            value={data.address}
            onChange={(event) => handleChangeState(event)}
          />
        </S.AddSaleLabel>
        <S.AddSalesImagesContainer>
          <S.AddSaleLabel htmlFor="images">
            {t('add-sale-sub-title-5')}*
            <S.AddSaleLabel
              htmlFor="images"
              BoxImages
              url={data && data.images[4]}
            >
              <S.AddSaleCancelButton
                zIndex={-1}
                type="button"
                width="53px"
                height="53px"
              >
                <AtomIcon
                  name="icons/addsale/addsale"
                  width="59px"
                  height="59px"
                />
              </S.AddSaleCancelButton>
              <S.AddSaleInput
                display="none"
                type="file"
                id="images"
                onChange={handleImage}
              />
            </S.AddSaleLabel>
          </S.AddSaleLabel>
          <S.AddSaleImages>
            {data.images
              .filter((_, index) => index <= 3)
              .map((image: string) => (
                <S.AddSaleImagePreview key={image} url={image}>
                  <S.AddSaleCancelButton
                    type="button"
                    onClick={() => handleDeleteImage(image)}
                    zIndex={1}
                  >
                    <AtomIcon
                      name="icons/addsale/cancel"
                      width="32px"
                      height="32px"
                    />
                  </S.AddSaleCancelButton>
                  <S.AddSaleInput
                    display="none"
                    type="file"
                    id="images"
                    onChange={handleImage}
                  />
                </S.AddSaleImagePreview>
              ))}
          </S.AddSaleImages>
        </S.AddSalesImagesContainer>
        <S.AddSaleContainer>
          {t('add-sale-sub-title-6')}*
          {addCuartoForm.map((item) => (
            <S.AddSaleLabel key={item.id} htmlFor={item.id}>
              {t(item.name)}
              <S.AddSaleInput
                width="200px"
                type="text"
                min="1"
                max="10"
                maxLength={2}
                id={item.id}
                name={item.nameInput}
                value={data.details[item.nameInput]}
                onChange={(event) => handleCDetailState(event, 'ADD_DETAILS')}
              />
            </S.AddSaleLabel>
          ))}
        </S.AddSaleContainer>
        <S.AddSaleContainer>
          {t('add-sale-sub-title-7')}*
          <S.AddSaleOfferContainer height="auto">
            {addCuartoOffers.map((item) => (
              <S.AddSaleOfferLabel key={item.id} htmlFor={item.id}>
                {t(item.name)}
                <input
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  checked={(() => {
                    const isData = data.offer.find(
                      (offer) => offer === item.value
                    );
                    return isData ? true : false;
                  })()}
                  onChange={(event) => {
                    const isData = data.offer.find(
                      (offer) => offer === item.value
                    );
                    isData
                      ? dispatch(ActionDeleteOffer(item.value))
                      : handleCDetailState(event, 'ADD_OFFER');
                  }}
                />
              </S.AddSaleOfferLabel>
            ))}
          </S.AddSaleOfferContainer>
        </S.AddSaleContainer>
        <S.AddSaleContainer>
          {t('add-sale-sub-title-8')}*
          <S.AddSaleLabel>
            <p>{t('add-sale-sub-title-text-8-1')}</p>
            <S.AddSaleInput
              type="text"
              id="images"
              min="10"
              max="100"
              maxLength={3}
              value={data.price}
              onChange={(event) => handleCDetailState(event, 'ADD_PRICE')}
            />
          </S.AddSaleLabel>
        </S.AddSaleContainer>
        <S.AddSaleSubmitButton type="submit">
          {t('add-form-button-1')}
        </S.AddSaleSubmitButton>
      </S.AddSaleForm>
    </DashboardStyled>
  );
};

export default withAuth(Addsale);
