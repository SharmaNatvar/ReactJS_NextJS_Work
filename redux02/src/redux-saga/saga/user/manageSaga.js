import { call, put } from "redux-saga/effects";
import { getApiData } from "../../user/api/api";
import { GET_API_DATA_FULFILLED, GET_API_DATA_PENDING, GET_API_DATA_REJECTED } from "../../user/action/action";

export function* handleGetApiData(action){
console.log(action,'manage saga');
   try{
    const res = yield call(getApiData,action);
    // console.log(res,'from manageSaga');
    const {data, status} = res;
    console.log(data,status);

    if(status === 200 || status === 201){
        yield put({type:GET_API_DATA_FULFILLED,data})
    }else{
        yield put({type:GET_API_DATA_PENDING,data})
    }
    
   }catch(e){
    yield put({type:GET_API_DATA_REJECTED,e})
   }

}