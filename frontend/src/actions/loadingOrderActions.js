import axios from "axios";

export const LOADING_ORDERS_REQUEST = "LOADING_ORDERS_REQUEST";
export const LOADING_ORDERS_SUCCESS = "LOADING_ORDERS_SUCCESS";
export const LOADING_ORDERS_FAIL = "LOADING_ORDERS_FAIL";

export const loadingOrdersAction = (userId) => async (dispatch) => {
    try{
      dispatch({type: LOADING_ORDERS_REQUEST});
  
      const {data} = await axios.get(`/loadingOrders/${userId}`);
      //const {serviceName} = await axios.get(`/miniService/${userId}`);
      dispatch({type: LOADING_ORDERS_SUCCESS, payload: data});
    }catch (e){
      dispatch({
        type: LOADING_ORDERS_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message
      });
    }
  }