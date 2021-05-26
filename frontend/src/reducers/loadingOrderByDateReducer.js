import {
  LOADING_ORDERSBYDATE_REQUEST,
  LOADING_ORDERSBYDATE_SUCCESS,
  LOADING_ORDERSBYDATE_FAIL,
} from "../actions/loadingOrdersByDateActions";

const initialState = {
  ordersByDate: [],
  loading: true,
};

const loadingOrdersByDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ORDERSBYDATE_REQUEST:
      return { loading: true, ordersByDate: [] };
    case LOADING_ORDERSBYDATE_SUCCESS:
      return { loading: false, ordersByDate: action.payload };
    case LOADING_ORDERSBYDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loadingOrdersByDateReducer;
