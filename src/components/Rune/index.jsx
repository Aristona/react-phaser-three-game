import "./index.scss"

export class Rune extends React.Component {

  static propTypes = {
    rune: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      icon: PropTypes.string,
      owned: PropTypes.number,
      price: PropTypes.number,
      description: PropTypes.string,
      multiplier: PropTypes.number,
      informer: PropTypes.string,
    }),
    canBuy: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    rune: {},
    canBuy: false,
    onClick: null,
  };

  render () {
    const { rune, canBuy, onClick } = this.props
    let per = ""
    let current = ""

    if (rune.informer === "percent") {
      per = `${((100 * rune.multiplier) - 100).toFixed(2)}%`
      current = `${((100 * (rune.multiplier * rune.owned)) - (rune.owned * 100) + rune.base).toFixed(2)}%`
    }

    if (rune.informer === "plus") {
      per = `+${rune.multiplier}`
      current = `+${((rune.multiplier * rune.owned).toFixed())}`
    }

    return (
      <div className={classnames("com-Rune", {
        canBuy: canBuy
      })}>
        <img src={rune.icon} />
        <div className="rune-upgrade-box">
          <h1>{rune.name}</h1>
          <h3>{rune.description}</h3>
          <h3>Per level: {per}</h3>
          <h3>Current: {current}</h3>
          <h3>Price: {rune.price}</h3>
          <p>Owned: {rune.owned}</p>
          <div className="buy-button" onClick={onClick}>
            <h2>Buy</h2>
          </div>
        </div>
      </div>
    )
  }
}