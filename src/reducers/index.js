import { combineReducers } from "redux"

import app from "./app"
import auth from "./auth"
import popup from "./popup"
import coin from "./coin"
import item from "./item"
import rune from "./rune"
import monster from "./monster"
import sheet from "./sheet"

const reducers = combineReducers({
  app,
  auth,
  popup,
  coin,
  item,
  rune,
  monster,
  sheet,
})

export { reducers }
