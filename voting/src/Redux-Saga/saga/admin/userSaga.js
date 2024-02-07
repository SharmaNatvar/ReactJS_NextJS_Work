import { call, put } from "redux-saga/effects";
import { getUserApiData } from "../../admin/Api/userApi";
import { GET_USER_FULFILLED, GET_USER_REJECTED } from "../../admin/Action/userAction";



// postLoginData
export function* handleGetUserApiData(action) {
  console.log(action ,'handleGetUserApiData');
  try {
    const res = yield call(getUserApiData, action);
    const data = res.data
    const status = res.status
    console.log(data , status,'handleGetUserApiData');
    if(status === 200 || status === 201){
      yield put({type:GET_USER_FULFILLED, data})
    }else{
      yield put({type: GET_USER_REJECTED, data})
    }
  } catch (err) {
    console.log(err, "handleGetUserApiData");
    yield put({ type: GET_USER_REJECTED, err });
  }
}
