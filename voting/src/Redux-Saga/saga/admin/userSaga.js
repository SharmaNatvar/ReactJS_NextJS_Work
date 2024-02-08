import { call, put } from "redux-saga/effects";
import { deleteUserApiData, getUserApiData, postUserApiData, putUserApiData } from "../../admin/Api/userApi";
import { DELETE_USER_FULFILLED, DELETE_USER_REJECTED, GET_USER_FULFILLED, GET_USER_REJECTED, POST_USER_FULFILLED, POST_USER_REJECTED, PUT_USER_FULFILLED, PUT_USER_REJECTED } from "../../admin/Action/userAction";



// getUserData
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




// postUserData

export function* handlePostUserApiData(action){
  console.log(action ,'handlePostUserApiData');
  
  try{
    const res = yield call(postUserApiData, action)
    const data = res.data;
      const status = res.status;
      console.log(data , status,'handlePostUserApiData');
      
      if(status === 200 || status === 201){
        yield put({type : POST_USER_FULFILLED , data})
      }else{
        yield put({type: POST_USER_REJECTED, data})
      }
    }catch(err){
      console.log(err, "handlePostUserApiData");
      
      yield put({type:POST_USER_REJECTED , err})
    }
  }
  
  
  
  // updateUserdata
  
  export function* handlePutUserApiData(action){
    console.log(action ,'handlePutUserApiData');
    try{
      const res = yield call( putUserApiData, action)
      const data = res.data
      const status = res.status
      console.log(data , status,'handlePutUserApiData');
      
      if(status === 200 || status === 201){
        yield put({type : PUT_USER_FULFILLED , data})
      }else{
        yield put({type : PUT_USER_REJECTED , data})
      }
    }catch(err){
      console.log(err, "handlePutUserApiData");
      yield put({type : PUT_USER_REJECTED , err})
    }
  }
  
  
  
  // deleteElectiondata
  
  export function* handleDeleteUserApiData(action){
    console.log(action ,'handleDeleteUserApiData');
    try{
      const res = yield call( deleteUserApiData , action)
      const data = res.data
      const status = data.status
      console.log(data , status,'handleDeleteUserApiData');
      
    if(status === 200 || status === 201){
      yield put({type:DELETE_USER_FULFILLED , data})
    }else{
      yield put({type:DELETE_USER_REJECTED })
    }
  }catch(err){
    console.log(err, "handleDeleteUserApiData");
    yield put({type:DELETE_USER_REJECTED , err})
}
}

