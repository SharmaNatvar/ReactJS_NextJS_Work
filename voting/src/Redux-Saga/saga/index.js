import { all } from "redux-saga/effects";
import { handlePostApiDataSaga } from "./root/rootlogin";
import { handleGetPartyApiDataSaga } from "./root/rootParty";
import { handleGetElectionApiDataSaga } from "./root/rootElection";
import { handleGetUserApiDataSaga } from "./root/rootUser";



export function* rootSaga(){
    console.log('root Saga');
    yield all([handlePostApiDataSaga() , handleGetPartyApiDataSaga(),handleGetElectionApiDataSaga(), handleGetUserApiDataSaga()])
}