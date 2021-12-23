import {
  CHANGE_LANGUAGE,
  LANGUAGE_DEFAULT,
  LANGUAGE_EN,
  APP_LOAD_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
} from "constants"

const initialState = {
  language: LANGUAGE_DEFAULT
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: LANGUAGE_EN
      }

    case APP_LOAD_SUCCESS:
      return {
        ...state,
        ...action.payload
      }

    case AUTH_LOGOUT_SUCCESS:
      return {
        ...initialState
      }

    default:
      return state
  }
}
