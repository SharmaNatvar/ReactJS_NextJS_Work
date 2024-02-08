import { call, put } from "redux-saga/effects";
import { deleteElectionApiData, getElectionApiData, postElectionApiData, putElectionApiData } from "../../admin/Api/electionApi";
import { DELETE_ELECTION_FULFILLED, DELETE_ELECTION_REJECTED, GET_ELECTION_FULFILLED, GET_ELECTION_REJECTED, POST_ELECTION_FULFILLED, POST_ELECTION_REJECTED, PUT_ELECTION_FULFILLED, PUT_ELECTION_REJECTED } from "../../admin/Action/electionAction";



// getElectionData
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


// postElectionData

export function* handlePostElectionApiData(action){
  console.log(action ,'handlePostElectionApiData');
  
  try{
    const res = yield call(postElectionApiData, action)
    const data = res.data;
      const status = res.status;
      console.log(data , status,'handlePostElectionApiData');
      
      if(status === 200 || status === 201){
        yield put({type : POST_ELECTION_FULFILLED , data})
      }else{
        yield put({type: POST_ELECTION_REJECTED, data})
      }
    }catch(err){
      console.log(err, "handlePostElectionApiData");
      
      yield put({type:POST_ELECTION_REJECTED , err})
    }
  }
  
  
  
  // updateElectiondata
  
  export function* handlePutElectionApiData(action){
    console.log(action ,'handlePutElectionApiData');
    try{
      const res = yield call( putElectionApiData, action)
      const data = res.data
      const status = res.status
      console.log(data , status,'handlePutElectionApiData');
      
      if(status === 200 || status === 201){
        yield put({type : PUT_ELECTION_FULFILLED , data})
      }else{
        yield put({type : PUT_ELECTION_REJECTED , data})
      }
    }catch(err){
      console.log(err, "handlePutElectionApiData");
      yield put({type : PUT_ELECTION_REJECTED , err})
    }
  }
  
  
  
  // deleteElectiondata
  
  export function* handleDeleteElectionApiData(action){
    console.log(action ,'handleDeleteElectionApiData');
    try{
      const res = yield call( deleteElectionApiData , action)
      const data = res.data
      const status = data.status
      console.log(data , status,'handleDeleteElectionApiData');
      
    if(status === 200 || status === 201){
      yield put({type:DELETE_ELECTION_FULFILLED , data})
    }else{
      yield put({type:DELETE_ELECTION_REJECTED })
    }
  }catch(err){
    console.log(err, "handleDeleteElectionApiData");
    yield put({type:DELETE_ELECTION_REJECTED , err})
}
}



