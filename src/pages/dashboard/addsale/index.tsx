import addCuartoForm, {
  addCuartoOffers,
  initialState
} from '@Assets/addCuarto';
import AtomIcon from '@Components/Atoms/Svg';
import reducer from '@Helpers/pages/addsale/reducer';
import { DashboardStyled } from '@Styles/pages/dashboard';
import * as S from '@Styles/pages/dashboard/addsale';
import useTranslation from 'next-translate/useTranslation';
import { FC, useReducer } from 'react';
import { DeleteOffer } from 'redux/actions/actions';

type Image = {
  target: {
    files: FileList | null;
  };
};

const Addsale: FC = (props) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation('common');

  const valid = (event: Image) => {
    if (event.target.files) {
      return event?.target?.files[0];
    }
  };

  const handleImage = (event: Image) => {
    const image = valid(event);
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
  const handleChangeState = (event: {
    target: { value: string; name: string };
  }) => {
    dispatch({
      type: 'CHANGE',
      payload: { event }
    });
  };
  const handleChangeDetailsState = (
    event: {
      target: { value: string; name: string };
    },
    type: string
  ) => {
    dispatch({
      type,
      payload: { event }
    });
  };

  const handleDeleteImage = (url: string) => {
    dispatch({
      type: 'DELETE_IMAGE',
      payload: { url }
    });
  };
  console.log(data);

  console.log(data.offer);

  return (
    <DashboardStyled>
      <h1>{t('add-sale-title-1')}</h1>
      <p>{t('add-sale-text-1')}</p>
      <S.AddSaleForm>
        <S.AddSaleLabel htmlFor='title'>
          {t('add-sale-sub-title-1')}*
          <S.AddSaleInput
            name='title'
            type='text'
            id='title'
            value={data.title}
            onChange={(event) => handleChangeState(event)}
          />
        </S.AddSaleLabel>
        <S.AddSaleLabel htmlFor='description'>
          {t('add-sale-sub-title-2')}*
          <S.AddSaleTextArea
            name='description'
            id='description'
            cols={30}
            rows={10}
            width='490px'
            value={data.description}
            onChange={(event) => handleChangeState(event)}
          ></S.AddSaleTextArea>
        </S.AddSaleLabel>
        <S.AddSaleLabel htmlFor='address'>
          {t('add-sale-sub-title-3')}*
          <S.AddSaleInput
            type='text'
            id='address'
            name='address'
            value={data.address}
            onChange={(event) => handleChangeState(event)}
          />
        </S.AddSaleLabel>
        <S.AddSalesImagesContainer>
          <S.AddSaleLabel>
            {t('add-sale-sub-title-5')}*
            <S.AddSaleLabel
              htmlFor='images'
              BoxImages
              url={data && data.images[4]}
            >
              <S.AddSaleCancelButton
                zIndex={-1}
                type='button'
                width='53px'
                height='53px'
              >
                <AtomIcon
                  name='icons/addsale/addsale'
                  width='59px'
                  height='59px'
                />
              </S.AddSaleCancelButton>
              <S.AddSaleInput
                display='none'
                type='file'
                id='images'
                onChange={handleImage}
              />
            </S.AddSaleLabel>
          </S.AddSaleLabel>
          <S.AddSaleImages>
            {data.images
              .filter((_, index) => index <= 3)
              .map((image: any) => (
                <S.AddSaleImagePreview key={image} url={image}>
                  <S.AddSaleCancelButton
                    type='button'
                    onClick={() => handleDeleteImage(image)}
                    zIndex={1}
                  >
                    <AtomIcon
                      name='icons/addsale/cancel'
                      width='32px'
                      height='32px'
                    />
                  </S.AddSaleCancelButton>
                  <S.AddSaleInput
                    display='none'
                    type='file'
                    id='images'
                    onChange={handleImage}
                  />
                </S.AddSaleImagePreview>
              ))}
          </S.AddSaleImages>
        </S.AddSalesImagesContainer>
        <div>
          {t('add-sale-sub-title-6')}*
          {addCuartoForm.map((item, index) => (
            <S.AddSaleLabel key={item.id} htmlFor={item.id}>
              {t(item.name)}
              <S.AddSaleInput
                width='200px'
                type={item.type}
                id={item.id}
                name={item.nameInput}
                min='1'
                max='5'
                value={data.details[item.nameInput]}
                onChange={(event) =>
                  handleChangeDetailsState(event, 'ADD_DETAILS')
                }
              />
            </S.AddSaleLabel>
          ))}
        </div>
        <div>
          {t('add-sale-sub-title-7')}*
          <S.AddSaleOfferContainer height='auto'>
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
                      console.log('dispatch');

                      dispatch(DeleteOffer(item.value));
                    } else {
                      handleChangeDetailsState(event, 'ADD_OFFER');
                    }
                  }}
                />
              </S.AddSaleOfferLabel>
            ))}
          </S.AddSaleOfferContainer>
        </div>
        <S.AddSaleSubmitButton type='submit'>Send</S.AddSaleSubmitButton>
      </S.AddSaleForm>
    </DashboardStyled>
  );
};

export default Addsale;
