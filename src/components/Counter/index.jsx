import "./index.scss"

export class Counter extends React.Component {

  static propTypes = {
    coins: PropTypes.number,
    dps: PropTypes.number,
    level: PropTypes.number,
  };

  static defaultProps = {
    coins: 0,
    dps: 0,
    level: 0,
  };

  render () {
    const { coins, dps, level } = this.props

    return (
      <div
        className={"com-Counter"}
      >
        <div className="coins-box">
          <h2>{coins}</h2>
        </div>
        <div className="moves-box">
          <h1>Stage</h1>
          <h2>{level}</h2>
        </div>
        <div className="dps-box">
          <h2>{dps}</h2>
        </div>
      </div>
    )
  }
}