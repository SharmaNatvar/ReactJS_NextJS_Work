import { takeLatest } from "redux-saga/effects";
import { GET_ELECTION_PENDING } from "../../admin/Action/electionAction";
import { handleGetElectionApiData } from "../admin/electionSaga";


// Get party data
export function* handleGetElectionApiDataSaga(){
    console.log('handleGetElectionApiDataSaga');
    yield takeLatest(GET_ELECTION_PENDING, handleGetElectionApiData)
}