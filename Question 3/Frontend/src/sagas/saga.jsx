import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import { setBackendData } from "../actions/actions";

function* fetchData() {
    try {
        const response = yield call(axios.get, "http://localhost:8080"); // 替换成实际的API端点
        yield put(setBackendData(response.data));
    } catch (error) {
        // 处理错误
    }
}

// 监听一个action，当用户点击按钮时触发
export function* rootSaga() {
    yield takeEvery("FETCH_BACKEND_DATA", fetchData);
}
