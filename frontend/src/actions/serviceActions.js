import axios from "axios";

export const LOADING_LIST_SERVICES_REQUEST = "LOADING_LIST_SERVICES_REQUEST";
export const LOADING_LIST_SERVICES_SUCCESS = "LOADING_LIST_SERVICES_SUCCESS";
export const LOADING_LIST_SERVICES_FAIL = "LOADING_LIST_SERVICES_FAIL";
export const LOADING_LIST_SERVICE_DETAIL_REQUEST = "LOADING_LIST_SERVICE_DETAIL_REQUEST";
export const LOADING_LIST_SERVICE_DETAIL_SUCCESS = "LOADING_LIST_SERVICE_DETAIL_SUCCESS";
export const LOADING_LIST_SERVICE_DETAIL_FAIL = "LOADING_LIST_SERVICE_DETAIL_FAIL";

// export const loadingServices = () => async (dispatch) => {
//   try{
//     dispatch({type: LOADING_LIST_SERVICES_REQUEST});

//     const {data} = await axios.get("/servicedetail");
//     dispatch({type: LOADING_LIST_SERVICES_SUCCESS, payload: data});
//   }catch (e){
//     dispatch({
//       type: LOADING_LIST_SERVICES_FAIL,
//       payload: e.response && e.response.data.message ? e.response.data.message : e.message
//     });
//   }
// }

export const loadingServiceDetail = (id) => async (dispatch) => {
  try{
    dispatch({type: LOADING_LIST_SERVICE_DETAIL_REQUEST});

    const {data} = await axios.get(`/service/${id}`);
    dispatch({type: LOADING_LIST_SERVICE_DETAIL_SUCCESS, payload: data});
  }catch (e){
    dispatch({
      type: LOADING_LIST_SERVICE_DETAIL_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    });
  }
}