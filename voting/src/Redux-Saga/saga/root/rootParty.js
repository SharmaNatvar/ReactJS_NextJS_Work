import { takeLatest } from "redux-saga/effects";
import { GET_PARTY_PENDING } from "../../admin/Action/partyAction";
import { handleGetPartyApiData } from "../admin/partySaga";


// Get party data
export function* handleGetPartyApiDataSaga(){
    console.log('handleGetPartyApiDataSaga');
    yield takeLatest(GET_PARTY_PENDING, handleGetPartyApiData)
}