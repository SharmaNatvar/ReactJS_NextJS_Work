import { all } from "redux-saga/effects";
import { handlePostApiDataSaga } from "./root/rootlogin";
import { handleDeletePartyApiDataSaga, handleGetPartyApiDataSaga, handlePostPartyApiDataSaga, handlePutPartyApiDataSaga } from "./root/rootParty";
import { handleDeleteElectionApiDataSaga, handleGetElectionApiDataSaga, handlePostElectionApiDataSaga, handlePutElectionApiDataSaga } from "./root/rootElection";
import { handleDeleteUserApiDataSaga, handleGetUserApiDataSaga, handlePostUserApiDataSaga, handlePutUserApiDataSaga } from "./root/rootUser";

export function* rootSaga() {
  console.log("root Saga");
  yield all([
    // login saga call
    handlePostApiDataSaga(),

    // partySaga call 
    handleGetPartyApiDataSaga(),
    handlePostPartyApiDataSaga(),
    handlePutPartyApiDataSaga(),
    handleDeletePartyApiDataSaga(),
    
    // election Saga call 
    handleGetElectionApiDataSaga(),
    handlePostElectionApiDataSaga(),
    handlePutElectionApiDataSaga(),
    handleDeleteElectionApiDataSaga(),

    // user saga call
    handleGetUserApiDataSaga(),
    handlePostUserApiDataSaga(),
    handlePutUserApiDataSaga(),
    handleDeleteUserApiDataSaga()

  ]);
}
