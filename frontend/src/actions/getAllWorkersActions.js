import axios from "axios";

export const LOADING_WORKERS_REQUEST = "LOADING_WORKERS_REQUEST";
export const LOADING_WORKERS_SUCCESS = "LOADING_WORKERS_SUCCESS";
export const LOADING_WORKERS_FAIL = "LOADING_WORKERS_FAIL";

export const loadingWorkersAction = (serviceId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_WORKERS_REQUEST });

    const { data } = await axios.get(`/workers/${serviceId}`);
    dispatch({ type: LOADING_WORKERS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: LOADING_WORKERS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
