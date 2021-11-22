import { call, all } from "redux-saga/effects"

import { app } from "./app"
import { auth } from "./auth"

export function* sagas() {
  yield all([
    call(app),
    call(auth),
  ])
}
