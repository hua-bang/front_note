import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = data => ({ type: INCREMENT, data });

export const createDecrementAction = data => ({ type: DECREMENT, data });

export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  }
}

export const createDecrementAsyncAction = data => (dispacth) => {
  getData().then(() => {
    dispacth(createDecrementAction(data));
  })
};


function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}