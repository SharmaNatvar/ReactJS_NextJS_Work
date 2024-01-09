
import {all } from 'redux-saga/effects'
import { getUserSaga } from './root/rootUser'

export function* rootSaga(){
    yield all([getUserSaga()])
}