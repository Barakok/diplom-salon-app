import {
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAIL
  } from '../actions/addOrderActions';


  export const addOrderReducer = (state = {}, action) => {
    switch (action.type){
      case ADD_ORDER_REQUEST:
        return {loading: true};
      case ADD_ORDER_SUCCESS:
        return {loading: false, userInfo: action.payload};
      case ADD_ORDER_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }
  }