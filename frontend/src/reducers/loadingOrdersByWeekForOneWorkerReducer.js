import {
  LOADING_ORDERSBYWEEK_REQUEST,
  LOADING_ORDERSBYWEEK_SUCCESS,
  LOADING_ORDERSBYWEEK_FAIL,
} from "../actions/loadingOrdersByWeekForOneWorkerActions";

const initialState = {
  ordersByWeek: [],
  loading: true,
};

const loadingOrdersByWeekeducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ORDERSBYWEEK_REQUEST:
      return { loading: true, ordersByWeek: [...state.ordersByWeek] };
    case LOADING_ORDERSBYWEEK_SUCCESS:
      return {
        loading: false,
        ordersByWeek: [...state.ordersByWeek, action.payload],
      };
    case LOADING_ORDERSBYWEEK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loadingOrdersByWeekeducer;
