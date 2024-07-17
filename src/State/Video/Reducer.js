import { CREATE_VIDEO_REQUEST, CREATE_VIDEO_SUCCESS, DELETE_VIDEO_FAILURE, DELETE_VIDEO_REQUEST, DELETE_VIDEO_SUCCESS, EDIT_VIDEO_FAILURE, EDIT_VIDEO_REQUEST, FIND_VIDEO_BY_ID_FAILURE, FIND_VIDEO_BY_ID_REQUEST, FIND_VIDEO_BY_ID_SUCESS, FIND_VIDEO_FAILURE, FIND_VIDEO_REQUEST, FIND_VIDEO_SUCESS } from "./ActionType";

const initState = {
  videos:[],
  video:null,
  isLoading: false,
  error: null
}
export const videoReducer = (state=initState, action)=>{
  switch (action.type) {
    case FIND_VIDEO_BY_ID_REQUEST:
    case FIND_VIDEO_REQUEST:
    case EDIT_VIDEO_REQUEST:
    case DELETE_VIDEO_REQUEST:
    case CREATE_VIDEO_REQUEST:
      return {...state, isLoading: true, error: null}
    case FIND_VIDEO_BY_ID_FAILURE:
    case FIND_VIDEO_FAILURE:
    case EDIT_VIDEO_FAILURE:
    case DELETE_VIDEO_FAILURE:
      return{...state, isLoading: false, error: action.payload}
    case FIND_VIDEO_BY_ID_SUCESS:
      return {...state, isLoading: false, video: action.payload, error: null}
    case FIND_VIDEO_SUCESS:
      return{...state, isLoading: false, videos: action.payload, error: null}
    case DELETE_VIDEO_SUCCESS:
      return{...state, isLoading: false, error: null}
    case CREATE_VIDEO_SUCCESS:
      return{...state, isLoading: false, error: null, video: action.payload}
      
  
    default:
      return state
  }
}