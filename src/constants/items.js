import * as armor from "../assets/weapons/128/armor.png"
import * as axe from "../assets/weapons/128/axe.png"
import * as axeDouble from "../assets/weapons/128/axeDouble.png"
import * as bow from "../assets/weapons/128/bow.png"
import * as dagger from "../assets/weapons/128/dagger.png"
import * as hammer from "../assets/weapons/128/hammer.png"
import * as heart from "../assets/weapons/128/heart.png"
import * as helmet from "../assets/weapons/128/helmet.png"
import * as map from "../assets/weapons/128/map.png"
import * as potionBlue from "../assets/weapons/128/potionBlue.png"
import * as potionGreen from "../assets/weapons/128/potionGreen.png"
import * as potionRed from "../assets/weapons/128/potionRed.png"
import * as scroll from "../assets/weapons/128/scroll.png"
import * as shield from "../assets/weapons/128/shield.png"
import * as shieldSmall from "../assets/weapons/128/shieldSmall.png"
import * as sword from "../assets/weapons/128/sword.png"
import * as swordWood from "../assets/weapons/128/swordWood.png"
import * as tome from "../assets/weapons/128/tome.png"
import * as tools from "../assets/weapons/128/tools.png"
import * as upg_armor from "../assets/weapons/128/upg_armor.png"
import * as upg_axe from "../assets/weapons/128/upg_axe.png"
import * as upg_axeDouble from "../assets/weapons/128/upg_axeDouble.png"
import * as upg_bow from "../assets/weapons/128/upg_bow.png"
import * as upg_dagger from "../assets/weapons/128/upg_dagger.png"
import * as upg_hammer from "../assets/weapons/128/upg_hammer.png"
import * as upg_helmet from "../assets/weapons/128/upg_helmet.png"
import * as upg_shield from "../assets/weapons/128/upg_shield.png"
import * as upg_spear from "../assets/weapons/128/upg_spear.png"
import * as upg_sword from "../assets/weapons/128/upg_sword.png"
import * as upg_wand from "../assets/weapons/128/upg_wand.png"
import * as upgShieldSmall from "../assets/weapons/128/upgShieldSmall.png"
import * as wand from "../assets/weapons/128/wand.png"
import * as coin from "../assets/weapons/128/coin.png"
import * as gemBlue from "../assets/weapons/128/gemBlue.png"
import * as gemGreen from "../assets/weapons/128/gemGreen.png"
import * as gemRed from "../assets/weapons/128/gemRed.png"

export const ITEM_LEVEL_MAP = {
  1: { damage: 1, icon: swordWood, coins: 1 },
  2: { damage: 2, icon: sword, coins: 2 },
  5: { damage: 5, icon: upg_bow, coins: 5 },
  12: { damage: 12, icon: upg_spear, coins: 10 },
  26: { damage: 26, icon: upg_axeDouble, coins: 20 },
  60: { damage: 60, icon: upg_axe, coins: 30 },
  150: { damage: 150, icon: helmet, coins: 40 },
  350: { damage: 350, icon: armor, coins: 50 },
  750: { damage: 750, icon: wand, coins: 60 },
  2000: { damage: 2000, icon: upgShieldSmall, coins: 70 },
  5000: { damage: 5000, icon: upg_helmet, coins: 80 },
}
