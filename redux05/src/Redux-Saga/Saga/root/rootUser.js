import { takeLatest } from "redux-saga/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from "../../user/Action/action";
import { handle_Delete_Data, handle_Get_Data, handle_Post_Data, handle_Put_Data } from "../user/userSaga";

// get data
export function* handle_Get_Data_Saga(){
    console.log('handle get data saga root user');
    console.log(GET_PRODUCT_PROGRESS);
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_Data)
}

// post data
export function* handle_Post_Data_Saga(){
    yield takeLatest( POST_PRODUCT_PROGRESS ,  handle_Post_Data )
}

// update data
export function* handle_Put_Data_Saga(){
    yield takeLatest(PUT_PRODUCT_PROGRESS , handle_Put_Data)
}

// delete data
export function* handle_Delete_Data_Saga(){
    yield takeLatest( DELETE_PRODUCT_PROGRESS , handle_Delete_Data)
}