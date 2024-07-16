import { type } from "@testing-library/user-event/dist/type";
import { api, API_BASE_URL } from "../../config/api";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

 

export const register = (reqData)=> async(dispatch)=>{
  dispatch({type: REGISTER_REQUEST})
  try {
    const {data} = await api.post(`${API_BASE_URL}/auth/signup`, reqData);
    dispatch({type: REGISTER_SUCCESS, payload: data})

  } catch (error) {
    dispatch({type: REGISTER_FAILURE, payload: error})

  }
}
export const login = (reqData)=> async(dispatch)=>{
  dispatch({type: LOGIN_REQUEST})
  try {
    const {data} = await api.post(`${API_BASE_URL}/auth/login`, reqData)
    dispatch({type: LOGIN_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: LOGIN_FAILURE, payload: error})
  }
}
export const logout = ()=>(dispatch)=>{
  dispatch({type: LOGOUT, payload: null})
}