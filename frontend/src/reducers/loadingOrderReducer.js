import {
    LOADING_ORDERS_REQUEST,
    LOADING_ORDERS_SUCCESS, LOADING_ORDERS_FAIL,
  } from '../actions/loadingOrderActions'
  
  const initialState = {
    orders: [],
    loading: true
  }
  
  const loadingOrdersReducer = (state = initialState, action) => {
    switch (action.type){
      // case LOADING_LIST_SERVICES_REQUEST:
      //   return {loading: true, services: []};
      // case LOADING_LIST_SERVICES_SUCCESS:
      //   return {loading: false, services: action.payload};
      // case LOADING_LIST_SERVICES_FAIL:
      //   return {loading: false, error: action.payload};
      case LOADING_ORDERS_REQUEST:
        return {loading: true, orders: []};
      case LOADING_ORDERS_SUCCESS:
        return {loading: false, orders: action.payload};
      case LOADING_ORDERS_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }
  }
  
  export default loadingOrdersReducer;