import { call, put } from "redux-saga/effects";
import { getData } from "../../Admin/Api/api";
import {
  GET_API_DATA_FULFILLED,
  GET_API_DATA_REJECTED,
} from "../../Admin/Action/action";

// get data
export function* handle_getData(action) {
  try {
    const res = yield call(getData, action);
    const { data, status } = res;
    if (status === 200 || status === 201) {
      yield put({ type: GET_API_DATA_FULFILLED, data });
    } else {
      yield put({ type: GET_API_DATA_REJECTED, data });
    }
  } catch (err) {
    yield put({ type: GET_API_DATA_REJECTED, err });
  }
}
