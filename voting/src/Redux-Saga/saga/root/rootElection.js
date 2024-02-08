import { takeLatest } from "redux-saga/effects";
import { DELETE_ELECTION_PENDING, GET_ELECTION_PENDING, POST_ELECTION_PENDING, PUT_ELECTION_PENDING } from "../../admin/Action/electionAction";
import { handleDeleteElectionApiData, handleGetElectionApiData, handlePostElectionApiData, handlePutElectionApiData } from "../admin/electionSaga";


// getElectiondata
export function* handleGetElectionApiDataSaga(){
    console.log('handleGetElectionApiDataSaga');
    yield takeLatest(GET_ELECTION_PENDING, handleGetElectionApiData)
}


// postElectionData
export function* handlePostElectionApiDataSaga(){
    console.log('handlePostElectionApiDataSaga');
    yield takeLatest( POST_ELECTION_PENDING ,  handlePostElectionApiData )
}

// update data
export function* handlePutElectionApiDataSaga(){
    console.log('handlePutElectionApiDataSaga');
    yield takeLatest(PUT_ELECTION_PENDING , handlePutElectionApiData)
}

// delete data
export function* handleDeleteElectionApiDataSaga(){
    console.log('handleDeleteElectionApiDataSaga');
    yield takeLatest( DELETE_ELECTION_PENDING , handleDeleteElectionApiData)
}