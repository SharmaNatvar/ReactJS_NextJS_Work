import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware  from "redux-saga"


const sagaMidleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMidleware)
)

sagaMidleware.run(productSaga)

export default store