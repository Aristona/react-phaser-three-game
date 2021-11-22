import {
  POPUP_OPEN,
  POPUP_CLOSE,
} from "constants"

const initialState = {
  open: null,
}

export default function popup(state = initialState, action) {
  switch (action.type) {
    case POPUP_OPEN:
      return {
        ...state,
        open: action.payload.open,
      }

    case POPUP_CLOSE:
      return {
        ...state,
        open: false,
      }

    default:
      return state
  }
}
