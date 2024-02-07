import { call, put } from "redux-saga/effects";
import { getPartyApiData } from "../../admin/Api/partyApi";
import { GET_PARTY_FULFILLED, GET_PARTY_REJECTED } from "../../admin/Action/partyAction";



// postLoginData
export function* handleGetPartyApiData(action) {
  try {
    const res = yield call(getPartyApiData, action);
    const data = res.data
    const status = res.status
    if(status === 200 || status === 201){
      yield put({type:GET_PARTY_FULFILLED, data})
    }else{
      yield put({type: GET_PARTY_REJECTED, data})
    }
  } catch (err) {
    console.log(err, "handleGetPartyApiData");
    yield put({ type: GET_PARTY_REJECTED, err });
  }
}
