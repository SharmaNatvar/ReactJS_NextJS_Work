import { takeEvery , put } from 'redux-saga/effects'
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from './constant'


function* getApiData(){
    let data = yield fetch('http://localhost:3333/posts');
    data = yield data.json()
    yield put({type: SET_PRODUCT_LIST, data : data})
}

function* serachUserData(e){
    let data = yield fetch(`http://localhost:3333/posts?q=${e.query}`);
    data = yield data.json()
    yield put({type: SET_PRODUCT_LIST, data : data})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST , getApiData)
    yield takeEvery(PRODUCT_SEARCH , serachUserData)
}

export default productSaga