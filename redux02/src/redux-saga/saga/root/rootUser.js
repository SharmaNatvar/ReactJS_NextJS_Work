import { takeLatest } from "@redux-saga/core/effects";
import { GET_API_DATA_PENDING } from "../../user/action/action";
import { handleGetApiData } from "../user/manageSaga";


export function* getUserSaga (){
    yield takeLatest(GET_API_DATA_PENDING, handleGetApiData);
}