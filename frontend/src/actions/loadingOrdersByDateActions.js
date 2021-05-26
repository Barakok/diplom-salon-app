import axios from "axios";

export const LOADING_ORDERSBYDATE_REQUEST = "LOADING_ORDERSBYDATE_REQUEST";
export const LOADING_ORDERSBYDATE_SUCCESS = "LOADING_ORDERSBYDATE_SUCCESS";
export const LOADING_ORDERSBYDATE_FAIL = "LOADING_ORDERSBYDATE_FAIL";

export const loadingOrdersByDateAction = (date, workerId) => async (
  dispatch
) => {
  try {
    dispatch({ type: LOADING_ORDERSBYDATE_REQUEST });

    const { data } = await axios.get(
      `/orderByDate?orderDate=${date}&workerId=${workerId}`
    );
    dispatch({ type: LOADING_ORDERSBYDATE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: LOADING_ORDERSBYDATE_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
