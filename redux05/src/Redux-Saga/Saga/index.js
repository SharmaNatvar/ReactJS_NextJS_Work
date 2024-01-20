import { all } from "redux-saga/effects";
import { handle_Delete_Data_Saga, handle_Get_Data_Saga, handle_Post_Data_Saga, handle_Put_Data_Saga } from "./root/rootUser";


export function* rootSaga(){
    console.log('handle get data saga root Saga');

    yield all([handle_Get_Data_Saga() , handle_Post_Data_Saga() , handle_Put_Data_Saga() , handle_Delete_Data_Saga()])
}