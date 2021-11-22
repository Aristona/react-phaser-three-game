import { call, put, fork, all, takeLatest } from "redux-saga/effects"
import { errorHandler } from "helpers/saga"
import { Api } from "api"
import store from "store2"

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAIL,
  APP_LOAD_SUCCESS,
} from "constants"

function* login(action) {
  try {
    const { payload } = action
    const auth = yield call(Api.auth.login, {
        "UserName": payload.username,
        "UserPassword": payload.password
      })

    if (!auth) {
      yield put({ type: AUTH_LOGIN_FAIL })
      return
    }

    yield put({
      type: AUTH_LOGIN_SUCCESS
    })

  } catch (err) {
    yield call(errorHandler, err)
    yield put({ type: AUTH_LOGIN_FAIL, payload: { loginFailed: true } })
  }
}

function* logout(action) {
  try {
    store.clearAll()
    yield put({ type: AUTH_LOGOUT_SUCCESS })
  } catch (err) {
    yield call(errorHandler, err)
  }
}

function* loginSaga() {
  yield takeLatest(AUTH_LOGIN_REQUEST, login)
}

function* logoutSaga() {
  yield takeLatest(AUTH_LOGOUT_REQUEST, logout)
}

export function* auth() {
  yield all([call(loginSaga), call(logoutSaga)])
}
