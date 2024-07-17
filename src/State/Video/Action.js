import { api, API_BASE_URL } from "../../config/api"
import { CREATE_VIDEO_FAILURE, CREATE_VIDEO_REQUEST, CREATE_VIDEO_SUCCESS, DELETE_VIDEO_FAILURE, DELETE_VIDEO_REQUEST, DELETE_VIDEO_SUCCESS, EDIT_VIDEO_FAILURE, EDIT_VIDEO_REQUEST, EDIT_VIDEO_SUCCESS, FIND_VIDEO_BY_ID_FAILURE, FIND_VIDEO_BY_ID_REQUEST, FIND_VIDEO_BY_ID_SUCESS, FIND_VIDEO_FAILURE, FIND_VIDEO_REQUEST, FIND_VIDEO_SUCESS } from "./ActionType"

export const getAllVideo = (query)=>async(dispatch)=>{
  dispatch({type: FIND_VIDEO_REQUEST})
  try {
    const {data} = await api.get(`${API_BASE_URL}/video`)
    dispatch({type:FIND_VIDEO_SUCESS, payload: data})
  } catch (error) {
    dispatch({type:FIND_VIDEO_FAILURE, payload: error})
  }
}
export const getVideoById = (id)=>async(dispatch)=>{
  dispatch({type:FIND_VIDEO_BY_ID_REQUEST})
  try {
    const {data} = await api.get(`${API_BASE_URL}/${id}`)
    dispatch({type:FIND_VIDEO_BY_ID_SUCESS, payload: data})
  } catch (error) {
    dispatch({type: FIND_VIDEO_BY_ID_FAILURE, payload: error})
  }
}
export const createVideo = (reqData)=>async(dispatch)=>{
  dispatch({type: CREATE_VIDEO_REQUEST})
  try {
    const {data} = await api.post(`${API_BASE_URL}/video`, reqData)
    dispatch({type: CREATE_VIDEO_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type:CREATE_VIDEO_FAILURE, payload: error})
  }
}
export const updateVideo = (id, reqData)=>async(dispatch)=>{
  dispatch({type: EDIT_VIDEO_REQUEST})
  try {
    const {data} = await api.patch(`${API_BASE_URL}/video/update/${id}`, reqData)
    dispatch({type: EDIT_VIDEO_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type:EDIT_VIDEO_FAILURE, payload: error})
  }
}
export const deleteVideo = (id)=>async(dispatch)=>{
  dispatch({type: DELETE_VIDEO_REQUEST})
  try {
    const {data} = await api.delete(`${API_BASE_URL}/video/delete/${id}`)
    dispatch({type: DELETE_VIDEO_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type:DELETE_VIDEO_FAILURE, payload: error})
  }
}
