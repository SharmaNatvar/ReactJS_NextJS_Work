import { takeLatest } from "redux-saga/effects";
import { DELETE_PARTY_PENDING, GET_PARTY_PENDING, POST_PARTY_PENDING, PUT_PARTY_PENDING } from "../../admin/Action/partyAction";
import { handleGetPartyApiData } from "../admin/partySaga";
import { handleDeleteElectionApiData, handlePostElectionApiData, handlePutElectionApiData } from "../admin/electionSaga";


// Get party data
export function* handleGetPartyApiDataSaga(){
    console.log('handleGetPartyApiDataSaga');
    yield takeLatest(GET_PARTY_PENDING, handleGetPartyApiData)
}

// postPartyData
export function* handlePostPartyApiDataSaga(){
    console.log('handlePostPartyApiDataSaga');
    yield takeLatest( POST_PARTY_PENDING ,  handlePostElectionApiData )
}

// updatePartydata
export function* handlePutPartyApiDataSaga(){
    console.log('handlePutPartyApiDataSaga');
    yield takeLatest(PUT_PARTY_PENDING , handlePutElectionApiData)
}

// delete data
export function* handleDeletePartyApiDataSaga(){
    console.log('handleDeletePartyApiDataSaga');
    yield takeLatest( DELETE_PARTY_PENDING , handleDeleteElectionApiData)
}