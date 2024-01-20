import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReduser from './rootReduser'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './Saga'


const sagaMiddleware =  createSagaMiddleware()

const store = createStore(
    rootReduser,
    applyMiddleware(sagaMiddleware)
    )

sagaMiddleware.run(rootSaga)


export default store