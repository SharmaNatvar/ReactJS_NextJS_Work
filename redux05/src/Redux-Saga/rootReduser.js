import { combineReducers } from "redux"
import { rootSaga } from "./Saga"

const rootReduser = combineReducers({
    rootSaga,
})

export default rootReduser