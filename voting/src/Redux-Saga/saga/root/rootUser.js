import { takeLatest } from "redux-saga/effects";
import { DELETE_USER_PENDING, GET_USER_PENDING, POST_USER_PENDING, PUT_USER_PENDING } from "../../admin/Action/userAction";
import { handleDeleteUserApiData, handleGetUserApiData, handlePostUserApiData, handlePutUserApiData } from "../admin/userSaga";


// Get User data
export function* handleGetUserApiDataSaga(){
    console.log('handleGetUserApiDataSaga');
    yield takeLatest(GET_USER_PENDING, handleGetUserApiData)
}


// postUserData
export function* handlePostUserApiDataSaga(){
    console.log('handlePostUserApiDataSaga');
    yield takeLatest( POST_USER_PENDING ,  handlePostUserApiData )
}

// updateUserdata
export function* handlePutUserApiDataSaga(){
    console.log('handlePutUserApiDataSaga');
    yield takeLatest(PUT_USER_PENDING , handlePutUserApiData)
}

// deleteUserdata
export function* handleDeleteUserApiDataSaga(){
    console.log('handleDeleteUserApiDataSaga');
    yield takeLatest( DELETE_USER_PENDING , handleDeleteUserApiData)
}