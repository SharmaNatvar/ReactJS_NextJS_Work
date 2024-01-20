import { GET_API_DATA_PENDING } from "../../Admin/Action/action";
import { handle_getData } from "../Admin/adminSaga";
import {takeLatest} from 'redux-saga/effects'

export function* handle_getData_Saga(){
    yield takeLatest( GET_API_DATA_PENDING , handle_getData)
}