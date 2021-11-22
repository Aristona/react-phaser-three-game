import {
  BOARD_SIZE,
  ITEM_PRODUCE,
  ITEM_MERGE,
} from "constants"

import { ITEM_LEVEL_MAP } from "constants/items"
import { RUNE_BUY, RUNE_TYPE_ITEM_PRODUCE_LEVEL } from "constants/runes"

const initialItems = [...new Array(BOARD_SIZE)].map((k, i) => {
  if (i < 2) {
    return ITEM_LEVEL_MAP[1]
  }

  return null
})

const calculateDPS = items => {
  return items.reduce((acc, item) => {
    if (item) {
      acc += item.damage
    }

    return acc
  }, 0)
}

const initialState = {
  items: initialItems,
  dps: calculateDPS(initialItems),
  produceLevel: 1
}

export default function item(state = initialState, action) {
  switch (action.type) {
    case ITEM_PRODUCE:
      const firstEmptyIndex = state.items.indexOf(null)

      if (firstEmptyIndex < 0) {
        console.log("board full")
        return {
          ...state
        }
      }

      const clone = [...state.items]
      clone[firstEmptyIndex] = ITEM_LEVEL_MAP[state.produceLevel]

      return {
        ...state,
        items: clone,
        dps: calculateDPS(clone),
      }

    case ITEM_MERGE:
      const future = [...state.items]
      const item = future[action.payload.fromIndex]
      const itemIndexes = Object.keys(ITEM_LEVEL_MAP).map(Number)

      const indexOfPreviousItem = itemIndexes.indexOf(item.damage)

      future[action.payload.toIndex] = ITEM_LEVEL_MAP[itemIndexes[indexOfPreviousItem + 1]]
      future[action.payload.fromIndex] = null

      return {
        ...state,
        items: future,
        dps: calculateDPS(future),
      }

    /*
    |  Runes
    */

    case RUNE_BUY:
      const { rune } = action.payload

      if (action.payload.rune.type === RUNE_TYPE_ITEM_PRODUCE_LEVEL) {
        const itemIndexes = Object.keys(ITEM_LEVEL_MAP).map(Number)

        return {
          ...state,
          produceLevel: itemIndexes[rune.owned + 1]
        }
      }

      return {
        ...state,
      }


    default:
      return state
  }
}
