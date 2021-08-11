import CountUI from "../../components/Count/index";

import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
  createDecrementAsyncAction
} from "../../redux/count_action";

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch, { store }) {
  return {
    add: (data) => {
      dispatch(createIncrementAction(data));
    },
    sup: (data) => {
      dispatch(createDecrementAction(data));
    },
    asyncAdd: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time));
    },
    asyncSup: (data) => {
      dispatch(createDecrementAsyncAction(data));
    },
    addIfOdd: (data) => {
      const state = store.getState();
      if (state % 2 === 1) {
        dispatch(createIncrementAction(data));
      }
    }
  }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;