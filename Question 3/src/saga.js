// saga.js
import { put, takeLatest, call } from "redux-saga/effects";
import { setCategories } from "./actions";
import axios from "axios";

function* fetchCategoriesSaga() {
    try {
        const response = yield call(axios.get, "/api/categories"); // 替换成实际的API端点

        // 将获取的数据存储到Redux
        yield put(setCategories(response.data));
    } catch (error) {
        // 处理错误
    }
}

export function* watchFetchCategories() {
    yield takeLatest("FETCH_CATEGORIES", fetchCategoriesSaga);
}
