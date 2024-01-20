import {call, put} from "redux-saga/effects"
import { Delete_Data, Get_Data, Post_Data, Put_Data } from "../../user/Api/api"
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_SUCCESS } from "../../user/Action/action";


// get data
export function* handle_Get_Data(action){
    console.log(action , 'userSaga action');
    try{
        const res = yield call(Get_Data , action);
        const data = res.data;
        const status = res.status;
        console.log(data ,' api data userSaga');
        if(status === 200 || status ===201){
            yield put({type:GET_PRODUCT_SUCCESS , data});
        }else{
            yield put({type:GET_PRODUCT_ERROR , data});
        }
    }catch(err){
        yield put({type : GET_PRODUCT_ERROR , err})
    }
}


// post data

export function* handle_Post_Data(action){
try{
    const res = yield call(Post_Data, action)
    const data = res.data;
    const status = res.status;

    if(status === 200 || status === 201){
        yield put({type : POST_PRODUCT_SUCCESS , data})
    }else{
        yield put({type: POST_PRODUCT_ERROR, data})
    }
}catch(err){
    yield put({type:POST_PRODUCT_ERROR , err})
}
}

// update data

export function* handle_Put_Data(action){
    try{
        const res = yield call(Put_Data , action)
        const data = res.data
        const status = res.status

        if(status === 200 || status === 201){
            yield put({type : PUT_PRODUCT_SUCCESS , data})
        }else{
            yield put({type : PUT_PRODUCT_ERROR , data})
        }
    }catch(err){
        yield put({type:PUT_PRODUCT_ERROR , err})
    }
}

// delete data

export function* handle_Delete_Data(action){
try{
    const res = yield call( Delete_Data , action)
    const data = res.data
    const status = data.status
   
    if(status === 200 || status === 201){
       yield put({type:DELETE_PRODUCT_SUCCESS , data})
    }else{
       yield put({type:DELETE_PRODUCT_ERROR })
    }
}catch(err){
    yield put({type:DELETE_PRODUCT_ERROR , err})
}
}