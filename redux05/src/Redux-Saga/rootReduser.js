import { combineReducers } from "redux"
// import { rootSaga } from "./Saga"
import userReducer from "./user/Reducer/reducer"

const rootReduser = combineReducers({
    // rootSaga,
    userReducer
})

export default rootReduser