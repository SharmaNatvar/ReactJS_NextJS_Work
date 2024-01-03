import { combineReducers } from "redux";
import { userInputData } from "./reducer";
import { userProductList } from "./productreducer";

export default combineReducers({
    userInputData,
    userProductList
})