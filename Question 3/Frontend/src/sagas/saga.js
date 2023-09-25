import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import { setBackendData } from "../actions/actions";

function* fetchData() {
    try {
        const response = yield call(axios.get, "http://localhost:8080");
        // console.log(typeof response.data.data, response.data.data);
        yield put(setBackendData(response.data.data));
    } catch (error) {
        console.error(error.message);
    }
}

export function* rootSaga() {
    yield takeEvery("FETCH_BACKEND_DATA", fetchData);
}
