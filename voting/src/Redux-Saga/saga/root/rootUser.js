import { takeLatest } from "redux-saga/effects";
import { GET_USER_PENDING } from "../../admin/Action/userAction";
import { handleGetUserApiData } from "../admin/userSaga";


// Get party data
export function* handleGetUserApiDataSaga(){
    console.log('handleGetUserApiDataSaga');
    yield takeLatest(GET_USER_PENDING, handleGetUserApiData)
}