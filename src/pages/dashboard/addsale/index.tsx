import addCuartoForm, {
  addCuartoOffers,
  initialState
} from '@Assets/addCuarto';
import AtomIcon from '@Components/Atoms/Svg';
import reducer, { TypesReducers } from '@Helpers/pages/addsale/reducer';
import { DashboardStyled } from '@Styles/global';
import * as S from '@Styles/pages/dashboard/addsale';
import { ChangeState, Image } from '@Types/pages/dashboard/addsale/types';
import withAuth from 'auth/withAuth';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useReducer } from 'react';

const Addsale: NextPage = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation('common');

  const extractFile = (event: Image) => {
    const file = event.target.files && event.target.files[0];
    return file;
  };

  const handleImage = (event: Image) => {
    const image = extractFile(event);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    if (image && types.includes(image.type)) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        if (event.target) {
          if (data.images.length <= 4) {
            dispatch({
              type: 'ADD_IMAGES',
              payload: { images: event.target.result }
            });
          }
        }
      };
      reader.readAsDataURL(image);
    }
  };
  const handleChangeState = (event: ChangeState) => {
    dispatch({
      type: 'CHANGE',
      payload: { event }
    });
  };
  const handleCDetailState = (
    event: ChangeState,
    type: keyof typeof TypesReducers
  ) => {
    dispatch({
      type,
      payload: { event }
    });
  };

  const handleDeleteImage = (url: string) => {
    dispatch({
      type: 'DELETE_IMAGES',
      payload: { url }
    });
  };

  return (
    <DashboardStyled>
      <h1>{t('add-sale-title-1')}</h1>
      <p>{t('add-sale-text-1')}</p>
      <S.AddSaleForm>
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
          <S.AddSaleLabel>
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
                type={item.type}
                id={item.id}
                name={item.nameInput}
                defaultValue={data.details[item.defaultValue]}
                min="1"
                max="5"
                value={data.details[item.defaultValue]}
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
                  onChange={(event) => {
                    const isData = data.offer.find(
                      (offer) => offer === item.value
                    );
                    if (isData) {
                      dispatch({
                        type: 'DELETE_OFFER',
                        payload: item.value
                      });
                    } else {
                      handleCDetailState(event, 'ADD_OFFER');
                    }
                  }}
                />
              </S.AddSaleOfferLabel>
            ))}
          </S.AddSaleOfferContainer>
        </S.AddSaleContainer>
        <S.AddSaleContainer>
          {t('add-sale-sub-title-8')}*
          <div>
            <p>{t('add-sale-sub-title-text-8-1')}</p>
            <S.AddSaleInput
              type="text"
              id="images"
              onChange={(event) => handleCDetailState(event, 'ADD_PRICE')}
            />
          </div>
        </S.AddSaleContainer>
        <S.AddSaleSubmitButton type="submit">Send</S.AddSaleSubmitButton>
      </S.AddSaleForm>
    </DashboardStyled>
  );
};

export default withAuth(Addsale);
