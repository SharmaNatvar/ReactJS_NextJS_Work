import { POST_LOGIN_FULFILLED, POST_LOGIN_REJECTED } from "../../admin/Action/loginAction";
import { call, put } from "redux-saga/effects";
import { postApiData } from "../../admin/Api/loginApi";



// postLoginData
export function* handlePostApiData(action) {
  console.log(action, "handlePostApiData");
  try {
    const res = yield call(postApiData, action);
    const data = res.data
    const status = res.status
    console.log(data , status, "handlePostApiData");
    if(status === 200 || status === 201){
      yield put({type:POST_LOGIN_FULFILLED, data})
    }else{
      yield put({type:POST_LOGIN_REJECTED, data})
    }
  } catch (err) {
    console.log(err, "handlePostApiData");
    yield put({ type: POST_LOGIN_REJECTED, err });
  }
}
