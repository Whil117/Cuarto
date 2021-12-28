import AtomIcon from '@Components/Atoms/Svg';
import { DashboardStyled } from '@Styles/pages/dashboard';
import {
  AddSaleCancelButton,
  AddSaleForm,
  AddSaleImagePreview,
  AddSaleImages,
  AddSaleInput,
  AddSaleLabel,
  AddSalesImagesContainer,
  AddSaleTextArea
} from '@Styles/pages/dashboard/addsale';
import { FC, useState } from 'react';

interface IProps {}

type DataImages = {
  image: string | ArrayBuffer | null;
};

const Addsale: FC<IProps> = (props) => {
  const [data, setData] = useState<DataImages[]>([]);

  const handleImage = (event: any) => {
    const image = event.target.files[0];
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    if (image && types.includes(image.type)) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        if (event.target) {
          if (data.length <= 4) {
            setData([...data, { image: event.target.result }]);
          }
        }
      };
      reader.readAsDataURL(image);
    }
  };
  const handleDeleteImage = (url: string) => {
    const newData = data.filter((image) => image.image !== url);
    setData(newData);
  };
  return (
    <DashboardStyled>
      <h1>Add new sale</h1>
      <p>Complete the form to posting</p>
      <AddSaleForm>
        <AddSaleLabel htmlFor='title'>
          Title*
          <AddSaleInput type='text' id='title' />
        </AddSaleLabel>
        <AddSaleLabel htmlFor='description'>
          Description*
          <AddSaleTextArea
            name=''
            id='description'
            cols={30}
            rows={10}
            width='490px'
          ></AddSaleTextArea>
        </AddSaleLabel>
        <AddSaleLabel htmlFor='address'>
          Address*
          <AddSaleInput type='text' id='address' />
        </AddSaleLabel>
        <AddSalesImagesContainer>
          <AddSaleLabel>
            Images*
            <AddSaleLabel
              htmlFor='images'
              BoxImages
              url={data && data[4]?.image}
            >
              <AtomIcon
                name='icons/addsale/addsale'
                width='59px'
                height='59px'
              />
              <AddSaleInput
                display='none'
                type='file'
                id='images'
                onChange={handleImage}
              />
            </AddSaleLabel>
          </AddSaleLabel>
          <AddSaleImages>
            {data
              .filter((_, index) => index <= 3)
              .map(({ image }: any) => (
                <AddSaleImagePreview key={image} url={image}>
                  <AddSaleCancelButton onClick={() => handleDeleteImage(image)}>
                    <AtomIcon
                      name='icons/addsale/cancel'
                      width='32px'
                      height='32px'
                    />
                    <AddSaleInput
                      display='none'
                      type='file'
                      id='images'
                      onChange={handleImage}
                    />
                  </AddSaleCancelButton>
                </AddSaleImagePreview>
              ))}
          </AddSaleImages>
        </AddSalesImagesContainer>
      </AddSaleForm>
    </DashboardStyled>
  );
};

export default Addsale;
