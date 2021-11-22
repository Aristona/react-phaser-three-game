import {
  COIN_RECEIVED,
  COIN_SPENT,
} from "constants"

import {
  RUNE_BUY,
  RUNE_TYPE_GOLD_INCOME
} from "constants/runes"

const initialState = {
  coins: 0,
  multiplier: 1,
}

export default function coin(state = initialState, action) {
  switch (action.type) {
    case COIN_RECEIVED:
      return {
        ...state,
        coins: Math.round(state.coins + (action.payload.coins * state.multiplier)),
      }

    case COIN_SPENT:
      return {
        ...state,
        coins: Math.floor(state.coins - action.payload.coins),
      }

    /*
    |  Runes
    */

    case RUNE_BUY:
      const { rune } = action.payload

      if (action.payload.rune.type === RUNE_TYPE_GOLD_INCOME) {
        return {
          ...state,
          multiplier: 1 + ((rune.multiplier - 1) * (rune.owned + 1))
        }
      }

      return {
        ...state,
      }

    default:
      return state
  }
}
