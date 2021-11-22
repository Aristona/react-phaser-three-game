import {
  STARTING_LEVEL,
  MONSTER_UPDATE,
  MONSTER_DIE,
  MONSTERS_MAP,
} from "constants"

const initialState = {
  monster: MONSTERS_MAP[STARTING_LEVEL]
}

export default function monster(state = initialState, action) {
  switch (action.type) {
    case MONSTER_UPDATE:
      return {
        ...state,
        monster: action.payload.monster
      }

    case MONSTER_DIE:
      return {
        ...state,
        monster: MONSTERS_MAP[action.payload.level]
      }

    default:
      return state
  }
}
