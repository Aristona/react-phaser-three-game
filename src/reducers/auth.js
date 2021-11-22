import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_SUCCESS,
} from "constants"

const initialState = {
  user: {},
  username: "",
  notifications: {},
  loggedInId: "",
  token: "",
  loggingIn: false,
  loggedIn: false,
  loginFailed: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loginFailed: false,
      }

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loggingIn: false,
        loginFailed: false,
        loggedIn: true,
      }

    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        ...action.payload,
        loggingIn: false,
        loggedIn: false,
      }

    case AUTH_LOGOUT_SUCCESS:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
