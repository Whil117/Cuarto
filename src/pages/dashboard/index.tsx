import { DashboardStyled } from '@Styles/pages/dashboard';
import { NextPage } from 'next';
// import { createStore } from 'redux';

const Dashboard: NextPage = (props) => {
  // const useReducer = (reducer, initialState) => {
  //   let state = initialState
  //   const getState = () => Object.freeze(state)
  //   const dispatch = (action) => {
  //     state = reducer(getState(), action)
  //   }
  //   return [getState, dispatch]
  // // }

  // const initialState = {
  //   value: 0
  // };

  // function counterReducer(state = initialState, action) {
  //   switch (action.type) {
  //     case 'counter/incremented':
  //       return { ...state, value: state.value + 1 };
  //     case 'counter/decremented':
  //       return { ...state, value: state.value - 1 };
  //     default:
  //       return state;
  //   }
  // }

  // const [state, dispatch] = useReducer(counterReducer, initialState);

  // const store = createStore(counterReducer);
  // console.log(store.getState());

  return (
    <DashboardStyled>
      <h1>main page dashboard</h1>
    </DashboardStyled>
  );
};

export default Dashboard;
