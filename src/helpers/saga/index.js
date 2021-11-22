import { call, put } from "redux-saga/effects"

import {
  AUTH_LOGOUT_SUCCESS,
} from "constants"

export function* errorHandler(err) {
  yield call(console.log, err.message)

  // if (err.message.includes("401")) {
  //   yield put({ type: AUTH_LOGOUT_SUCCESS });
  // }
}