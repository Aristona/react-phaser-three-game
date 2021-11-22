import * as Armor_1 from "../assets/runes/Armor_1.png"
import * as Armor_10 from "../assets/runes/Armor_10.png"
import * as Armor_2 from "../assets/runes/Armor_2.png"
import * as Armor_3 from "../assets/runes/Armor_3.png"
import * as Armor_4 from "../assets/runes/Armor_4.png"
import * as Armor_5 from "../assets/runes/Armor_5.png"
import * as Armor_7 from "../assets/runes/Armor_7.png"
import * as Armor_8 from "../assets/runes/Armor_8.png"
import * as active_1 from "../assets/runes/active_1.png"
import * as active_2 from "../assets/runes/active_2.png"
import * as active_4 from "../assets/runes/active_4.png"
import * as active_5 from "../assets/runes/active_5.png"
import * as active_6 from "../assets/runes/active_6.png"
import * as active_7 from "../assets/runes/active_7.png"
import * as active_8 from "../assets/runes/active_8.png"
import * as passive_1 from "../assets/runes/passive_1.png"
import * as passive_3 from "../assets/runes/passive_3.png"
import * as passive_4 from "../assets/runes/passive_4.png"
import * as passive_5 from "../assets/runes/passive_5.png"
import * as sword_1 from "../assets/runes/sword_1.png"
import * as sword_2 from "../assets/runes/sword_2.png"
import * as sword_3 from "../assets/runes/sword_3.png"

export const RUNE_TYPE_GOLD_INCOME = "RUNE_TYPE_GOLD_INCOME"
export const RUNE_TYPE_ITEM_PRODUCE_LEVEL = "RUNE_TYPE_ITEM_PRODUCE_LEVEL"
export const RUNE_TYPE_DAMAGE_CRIT_RATE = "RUNE_TYPE_DAMAGE_CRIT_RATE"
export const RUNE_TYPE_DAMAGE_CRIT_MULTI = "RUNE_TYPE_DAMAGE_CRIT_MULTI"

export const RUNES_LIST = [
  {
    name: "Coin Income",
    type: RUNE_TYPE_GOLD_INCOME,
    icon: active_4,
    owned: 0,
    price: 15,
    description: "Increases coin income",
    base: 0,
    multiplier: 1.25,
    priceMultiplier: 3,
    informer: "percent"
  },
  {
    name: "Item Level",
    type: RUNE_TYPE_ITEM_PRODUCE_LEVEL,
    icon: passive_5,
    owned: 0,
    price: 500,
    description: "Increases level of weapons",
    base: 0,
    multiplier: 1,
    priceMultiplier: 5,
    informer: "plus"
  },
  {
    name: "Crit Rate",
    type: RUNE_TYPE_DAMAGE_CRIT_RATE,
    icon: sword_1,
    owned: 0,
    price: 1000,
    description: "Increases crit rate",
    base: 5,
    multiplier: 1.01,
    priceMultiplier: 5,
    informer: "percent"
  },
  {
    name: "Crit Multiplier",
    type: RUNE_TYPE_DAMAGE_CRIT_MULTI,
    icon: sword_2,
    owned: 0,
    price: 150,
    description: "Increases crit damage",
    base: 100,
    multiplier: 1.10,
    priceMultiplier: 3,
    informer: "percent"
  },
]

export const RUNE_BUY = "RUNE_BUY"