import { CREATE_VIDEO_REQUEST, DELETE_VIDEO_FAILURE, DELETE_VIDEO_REQUEST, EDIT_VIDEO_FAILURE, EDIT_VIDEO_REQUEST, FIND_VIDEO_BY_ID_FAILURE, FIND_VIDEO_BY_ID_REQUEST, FIND_VIDEO_FAILURE, FIND_VIDEO_REQUEST } from "./ActionType";

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
    
      break;
  
    default:
      break;
  }
}