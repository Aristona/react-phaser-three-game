import {
  RUNES_LIST,
  RUNE_BUY
} from "constants/runes"

const initialState = {
  runes: RUNES_LIST,
}

export default function rune(state = initialState, action) {
  switch (action.type) {
    case RUNE_BUY:
      const { rune } = action.payload
      const index = state.runes.findIndex(r => r.type === rune.type)
      const clone = [...state.runes]
      clone[index] = {
        ...rune,
        owned: rune.owned + 1,
        price: rune.price * rune.priceMultiplier
      }

      return {
        runes: clone
      }

    default:
      return state
  }
}
