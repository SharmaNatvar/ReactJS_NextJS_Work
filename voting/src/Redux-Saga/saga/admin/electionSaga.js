import { call, put } from "redux-saga/effects";
import { getElectionApiData } from "../../admin/Api/electionApi";
import { GET_ELECTION_FULFILLED, GET_ELECTION_REJECTED } from "../../admin/Action/electionAction";



// postLoginData
export function* handleGetElectionApiData(action) {
  console.log(action ,'handleGetElectionApiData');
  try {
    const res = yield call(getElectionApiData, action);
    const data = res.data
    const status = res.status
    console.log(data , status,'handleGetElectionApiData');
    if(status === 200 || status === 201){
      yield put({type:GET_ELECTION_FULFILLED, data})
    }else{
      yield put({type: GET_ELECTION_REJECTED, data})
    }
  } catch (err) {
    console.log(err, "handleGetPartyApiData");
    yield put({ type: GET_ELECTION_REJECTED, err });
  }
}
