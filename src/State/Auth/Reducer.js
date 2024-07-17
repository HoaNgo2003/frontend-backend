import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initState = {
  jwt: null,
  error: null,
  isLoading: false
}
export const authReducer = (state=initState, action)=>{
  switch(action.type){
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return {...state, isLoading: true}
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return{
        ...state, error: action.payload, isLoading: false
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return{
        ...state, error: null, jwt: action.payload, isLoading: true
      }
    case LOGOUT:
      return {...state, isLoading: true, jwt:null}
    default:
      return state
  }
}