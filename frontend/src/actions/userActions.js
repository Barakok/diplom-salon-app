import axios from "axios";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const register = (name, email, password) => async (dispatch) => {
  try{
    dispatch({type: USER_REGISTER_REQUEST});
    const config = {
      headers: {"Content-Type": "application/json"}
    };
    const {data} = await axios.post("/registration", {name,email,password}, config);
    dispatch({type: USER_REGISTER_SUCCESS, payload: data});
    localStorage.setItem("userInfo", JSON.stringify(data));
  }catch (e){
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    });
  }
}