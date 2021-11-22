import { call, put, all, takeLatest } from "redux-saga/effects"
import { errorHandler } from "helpers/saga"
import { toast } from "react-toastify"
import store from "store2"

import { APP_START, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL } from "constants"

function* appStart(action) {
  try {
    //const auth = store.get("auth"); @todo discuss with backend how they plan to do it
    const auth = false
    if (auth) {
      yield put({ type: AUTH_LOGIN_SUCCESS, payload: auth })
      toast.success("Welcome back!")
    } else {
      yield put({ type: AUTH_LOGIN_FAIL })
    }

  } catch (err) {
    yield call(errorHandler, err)
  }
}

function* appStartSaga() {
  yield takeLatest(APP_START, appStart)
}

export function* app() {
  yield all([call(appStartSaga)])
}
