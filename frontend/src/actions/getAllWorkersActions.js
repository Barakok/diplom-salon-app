import axios from "axios";

export const LOADING_ALLWORKERS_REQUEST = "LOADING_ALLWORKERS_REQUEST";
export const LOADING_ALLWORKERS_SUCCESS = "LOADING_ALLWORKERS_SUCCESS";
export const LOADING_ALLWORKERS_FAIL = "LOADING_ALLWORKERS_FAIL";

export const loadingAllWorkersAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_ALLWORKERS_REQUEST });

    const { data } = await axios.get(`/workers`);
    dispatch({ type: LOADING_ALLWORKERS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: LOADING_ALLWORKERS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
