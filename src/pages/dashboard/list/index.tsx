import withAuth from '@Auth/withAuth';
import { DashboardStyled } from '@Styles/global';
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
interface IProps {}

const List: FC<IProps> = (props) => {
  const data = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch({
      type: 'ADD_IMAGES',
      payload: {
        images: 'https://picsum.photos/200/300'
      }
    });
  };
  console.log(data);

  return (
    <DashboardStyled>
      <h1>List</h1>

      <pre>{JSON.stringify(data, null, 4)}</pre>
      <button onClick={handleDispatch}>Click</button>
    </DashboardStyled>
  );
};

export default withAuth(List);
