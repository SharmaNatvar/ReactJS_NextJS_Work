import { combineReducers } from "redux";
import adminReducer from "./Admin/Reducer/reducer";



const rootReducer = combineReducers({adminReducer})

export default rootReducer