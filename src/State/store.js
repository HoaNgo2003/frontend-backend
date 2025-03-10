import{applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { thunk} from "redux-thunk"
import { authReducer } from "./Auth/Reducer"
import { videoReducer } from "./Video/Reducer"
const rootReducers = combineReducers({
  auth: authReducer,
  video: videoReducer
})
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))