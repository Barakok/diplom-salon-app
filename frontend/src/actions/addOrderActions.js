import axios from "axios";

export const ADD_ORDER_REQUEST = "ADD_ORDER_REQUEST";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAIL = "ADD_ORDER_FAIL";

export const addOrder = (userId, miniServiceId, miniServiceName, orderDate, orderTime, status) => async (dispatch) => {
  try{
    dispatch({type: ADD_ORDER_REQUEST});
    const config = {
        headers: {"Content-Type": "application/json"}
    };
    const {data} = await axios.post("/addOrder", {userId, miniServiceId, miniServiceName, orderDate, orderTime, status}, config);
    dispatch({type: ADD_ORDER_SUCCESS, payload: data});
  }catch (e){
    dispatch({
      type: ADD_ORDER_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    });
  }
}