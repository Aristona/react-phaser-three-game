/*
|  App
*/

export const APP_START = "APP_START"
export const APP_LOAD_SUCCESS = "APP_LOAD_SUCCESS"

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

export const LANGUAGE_EN = "en-GB"

export const LANGUAGE_DEFAULT = LANGUAGE_EN
export const MISSING_TRANSLATION_MESSAGE = "Missing Translation"

/*
|  Auth
*/

export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST"
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS"
export const AUTH_LOGIN_FAIL = "AUTH_LOGIN_FAIL"

export const AUTH_LOGOUT_REQUEST = "AUTH_LOGOUT_REQUEST"
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS"
export const AUTH_LOGOUT_FAIL = "AUTH_LOGOUT_FAIL"

/*
|  Game
*/

export const BOARD_SIZE = 15

export const GAME_SPEED_MULTIPLIER = 1

const monstersList = [
  "Fallen_Angels_1",
  "Fallen_Angels_2",
  "Fallen_Angels_3",
  "Golem_1",
  "Golem_2",
  "Golem_3",
  "Minotaur_1",
  "Minotaur_2",
  "Minotaur_3",
  "Reaper_Man_1",
  "Reaper_Man_2",
  "Reaper_Man_3",
  "Satyr_1",
  "Satyr_2",
  "Satyr_3",
  "Troll_1",
  "Troll_2",
  "Troll_3",
  "Wraith_1",
  "Wraith_2",
  "Wraith_3",
]

const generateMonstersMap = () => {
  const obj = {};

  [...new Array(100)].forEach((k, i) => {
    const level = i + 1
    let health = Math.round((10 * level) * (1 + level / 2))
    let monster = monstersList[Math.floor(Math.random()*monstersList.length)]

    // We preload Troll_3 for fast loading
    if (level === 1) {
      monster = "Troll_3"
    }

    if (i >= 9 && i < 19) {
      health = health * 2
    }

    if (i >= 19 && i < 29) {
      health = health * 4
    }

    if (i >= 29 && i < 39) {
      health = health * 6
    }

    if (i >= 39 && i < 49) {
      health = health * 8
    }

    if (i >= 49) {
      health = health * 16
    }

    obj[level] = {
      name: monster,
      health: health,
      currentHealth: health,
      top: 225,
      right: 20,
      loot: i % 3 === 1
    }
  })

  return obj
}

export const MONSTERS_MAP = generateMonstersMap()

export const STARTING_LEVEL = 1

/*
|  Popup
*/

export const POPUP_OPEN = "POPUP_OPEN"
export const POPUP_CLOSE = "POPUP_CLOSE"

export const POPUP_SCREEN_UPGRADE = "POPUP_SCREEN_UPGRADE"
export const POPUP_SCREEN_FAQ = "POPUP_SCREEN_FAQ"
export const POPUP_SCREEN_ABOUT = "POPUP_SCREEN_ABOUT"
export const POPUP_SCREEN_SHOP = "POPUP_SCREEN_SHOP"
export const POPUP_SCREEN_SETTINGS = "POPUP_SCREEN_SETTINGS"

/*
|  Coin
*/

export const COIN_RECEIVED = "COIN_RECEIVED"
export const COIN_SPENT = "COIN_SPENT"

/*
|  Items
*/

export const ITEM_PRODUCE = "ITEM_PRODUCE"
export const ITEM_MERGE = "ITEM_MERGE"

/*
|  Monsters
*/

export const MONSTER_UPDATE = "MONSTER_UPDATE"
export const MONSTER_DIE = "MONSTER_DIE"
