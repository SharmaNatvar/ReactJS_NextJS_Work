import { applyMiddleware, legacy_createStore as createStore } from "redux"
import rootReducer from "./rootReducer"
import createSagaMiddleware from "@redux-saga/core"
import { rootSaga } from "./Saga"


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(rootSaga)


export default store