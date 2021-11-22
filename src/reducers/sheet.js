import {
  RUNE_BUY,
  RUNE_TYPE_DAMAGE_CRIT_RATE,
  RUNE_TYPE_DAMAGE_CRIT_MULTI,
} from "constants/runes"

const initialState = {
  critRate: 5,
  critDamage: 2,
}

export default function sheet(state = initialState, action) {
  switch (action.type) {
    /*
    |  Runes
    */

    case RUNE_BUY:
      const { rune } = action.payload

      if (rune.type === RUNE_TYPE_DAMAGE_CRIT_RATE) {
        return {
          ...state,
          critRate: state.critRate + 1
        }
      }

      if (rune.type === RUNE_TYPE_DAMAGE_CRIT_MULTI) {
        return {
          ...state,
          critDamage: (state.critDamage * rune.multiplier).toFixed(2)
        }
      }

      return state

    default:
      return state
  }
}
