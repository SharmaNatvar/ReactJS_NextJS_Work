// post login Data

import { takeLatest } from "redux-saga/effects";
import { POST_LOGIN_PENDING } from "../../admin/Action/loginAction";
import { handlePostApiData } from "../admin/loginSaga";


// post data
export function* handlePostApiDataSaga(){
    console.log('handlePostApiDataSaga');
    yield takeLatest(POST_LOGIN_PENDING, handlePostApiData)
}