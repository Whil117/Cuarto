import * as S from '@Styles/components/Notification';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/reducers/components/Notification/reducer';

interface IProps {}

type Selector = {
  notification: State;
};

const Notification: FC<IProps> = () => {
  const data = useSelector((select: Selector) => select.notification);
  const dispatch = useDispatch();
  const [count, setcout] = useState(0);
  useEffect(() => {
    const handleDispatch = () => {
      dispatch({
        type: 'HIDE'
      });
      setTimeout(() => {
        setcout(0);
      }, 500);
    };
    if (data.notification && count === 50) {
      handleDispatch();
    }
  }, [count]);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (data.notification && count < 50) {
        setcout(count + 1);
      }
    }, 100);
    return () => clearTimeout(handler);
  }, [count, data.notification]);
  return (
    <S.NotificationStyle
      {...(data.notification && { animate: { y: 40 } })}
      transition={{ duration: 0.4 }}
      initial={{ y: -100 }}
      {...(count > 40 && { animate: { y: -100 } })}
    >
      <S.NotificationHeader>
        <S.Nav color={data.message.type}></S.Nav>
        <S.NotificationContent>
          <h4>{data.message.title}</h4>
          <hr />
          <p>{data.message.text}</p>
        </S.NotificationContent>
      </S.NotificationHeader>
    </S.NotificationStyle>
  );
};

export default Notification;
