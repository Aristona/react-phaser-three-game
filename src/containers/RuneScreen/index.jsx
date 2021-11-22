import { Rune } from "../../components/Rune"

@connect((state) => ({
  rune: state.rune,
  coin: state.coin,
}))
class RuneScreen extends React.Component {

  static propTypes = {
    onRuneBuy: PropTypes.func,
  };

  static defaultProps = {
    onRuneBuy: null,
  };

  render() {
    const { onRuneBuy, rune: { runes }, coin: { coins } } = this.props

    return runes.map(rune => {
      const canBuy = coins >= rune.price

      return (
        <Rune
          key={rune.name}
          rune={rune}
          canBuy={canBuy}
          onClick={() => {
            if (canBuy) {
              onRuneBuy.apply(this, [rune])
            }
          }}
        />
      )
    })
  }
}

export { RuneScreen }
