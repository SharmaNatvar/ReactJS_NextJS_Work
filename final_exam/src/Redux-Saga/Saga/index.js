import {all} from 'redux-saga/effects'
import { handle_getData_Saga } from './Root/adminRoot'


export function* rootSaga(){
    yield all([handle_getData_Saga()])
}