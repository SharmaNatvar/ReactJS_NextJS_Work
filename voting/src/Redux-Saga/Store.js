import { rootSaga } from "./saga";
import createSagaMiddleware from '@redux-saga/core'
import rootReduser from "./rootReducer";
import { applyMiddleware, createStore } from "redux";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReduser,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store