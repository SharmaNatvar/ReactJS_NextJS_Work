import { call, put } from "redux-saga/effects";
import { deletePartyApiData, getPartyApiData, postPartyApiData, putPartyApiData } from "../../admin/Api/partyApi";
import { GET_PARTY_FULFILLED, GET_PARTY_REJECTED, POST_PARTY_FULFILLED, POST_PARTY_REJECTED, PUT_PARTY_FULFILLED, PUT_PARTY_REJECTED } from "../../admin/Action/partyAction";
import { DELETE_ELECTION_FULFILLED, DELETE_ELECTION_REJECTED } from "../../admin/Action/electionAction";



// getPartyData
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



// postPartyData

export function* handlePostPartyApiData(action){
  console.log(action ,'handlePostPartyApiData');
  
  try{
    const res = yield call(postPartyApiData, action)
    const data = res.data;
    const status = res.status;
    console.log(data , status,'handlePostPartyApiData');
    
    if(status === 200 || status === 201){
      yield put({type : POST_PARTY_FULFILLED , data})
    }else{
      yield put({type: POST_PARTY_REJECTED, data})
    }
  }catch(err){
    console.log(err, "handlePostPartyApiData");
    
    yield put({type:POST_PARTY_REJECTED , err})
  }
}



// updatePartydata

export function* handlePutPartyApiData(action){
  console.log(action ,'handlePutPartyApiData');
  try{
    const res = yield call( putPartyApiData, action)
    const data = res.data
    const status = res.status
    console.log(data , status,'handlePutPartyApiData');
    
    if(status === 200 || status === 201){
      yield put({type : PUT_PARTY_FULFILLED , data})
    }else{
      yield put({type : PUT_PARTY_REJECTED , data})
    }
  }catch(err){
    console.log(err, "handlePutPartyApiData");
    yield put({type : PUT_PARTY_REJECTED , err})
  }
}



// delete data

export function* handleDeletePartyApiData(action){
  console.log(action ,'handleDeletePartyApiData');
  try{
    const res = yield call( deletePartyApiData , action)
    const data = res.data
    const status = data.status
    console.log(data , status,'handleDeletePartyApiData');
    
  if(status === 200 || status === 201){
     yield put({type:DELETE_ELECTION_FULFILLED , data})
  }else{
     yield put({type:DELETE_ELECTION_REJECTED })
  }
}catch(err){
  yield put({type:DELETE_ELECTION_REJECTED , err})
}
}