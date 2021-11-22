import { Monster } from "../../components/Monster"

import { GAME_SPEED_MULTIPLIER } from "constants"

import { getRandomIntInclusive } from "helpers"

@connect((state) => ({
  item: state.item,
  monster: state.monster,
  rune: state.rune,
  sheet: state.sheet,
}))
class MonstersScreen extends React.Component {

  static propTypes = {
    start: PropTypes.bool,
    onMonsterHit: PropTypes.func,
    onMonsterDie: PropTypes.func,
  };

  static defaultProps = {
    start: false,
    onMonsterHit: null,
    onMonsterDie: null,
  };

  componentDidUpdate() {
    if (this.started) {
      return
    }

    if (!this.props.start) {
      return
    }

    this.listen()
  }

  listen() {
    this.started = true
    this.damageInterval = setInterval(() => {
      const { monster: { monster }, level, item: { dps }, rune, sheet } = this.props
      const clone = { ...monster }

      const critRoll = getRandomIntInclusive(0, 100)

      if (critRoll <= sheet.critRate) {
        this.isCriticalHit = true
        this.receivedDamage = Math.round((dps / GAME_SPEED_MULTIPLIER) * sheet.critDamage)
      } else {
        this.isCriticalHit = false
        this.receivedDamage = Math.round(dps / GAME_SPEED_MULTIPLIER)
      }

      clone.currentHealth -= this.receivedDamage

      if (clone.currentHealth <= 0) {
        this.props.onMonsterDie.apply(this, [level + 1, clone])
        return
      }

      this.props.onMonsterHit.apply(this, [clone])
    }, 1000)
  }

  render() {
    const { monster: { monster } } = this.props

    return (
      <Monster
        isCriticalHit={this.isCriticalHit}
        receivedDamage={this.receivedDamage}
        {...monster}
      />
    )
  }
}

export { MonstersScreen }
