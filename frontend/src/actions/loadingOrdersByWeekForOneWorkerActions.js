import axios from "axios";

export const LOADING_ORDERSBYWEEK_REQUEST = "LOADING_ORDERSBYWEEK_REQUEST";
export const LOADING_ORDERSBYWEEK_SUCCESS = "LOADING_ORDERSBYWEEK_SUCCESS";
export const LOADING_ORDERSBYWEEK_FAIL = "LOADING_ORDERSBYWEEK_FAIL";

export const loadingOrdersByWeekAction = (workerId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_ORDERSBYWEEK_REQUEST });
    const { data } = await axios.post(`/ordersByWeek`, { _id: workerId });
    dispatch({
      type: LOADING_ORDERSBYWEEK_SUCCESS,
      payload: { workerId, data },
    });
  } catch (e) {
    dispatch({
      type: LOADING_ORDERSBYWEEK_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
