import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from '@redux-saga/core';

import rootReducers from "./rootReducer";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga);

export default store;
