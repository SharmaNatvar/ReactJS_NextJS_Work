import { all } from "redux-saga/effects";
import { handlePostApiDataSaga } from "./root/rootlogin";



export function* rootSaga(){
    console.log('root Saga');
    yield all([handlePostApiDataSaga()])
}