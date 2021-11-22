import "./index.scss"

export class Monster extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number,
    health: PropTypes.number,
    currentHealth: PropTypes.number,
    receivedDamage: PropTypes.number,
    isCriticalHit: PropTypes.bool,
  };

  static defaultProps = {
    name: "Golem",
    top: 0,
    right: 0,
    health: 100,
    currentHealth: 100,
    receivedDamage: 0,
    isCriticalHit: false,
  };

  render () {
    const { name, top, right, health, currentHealth, receivedDamage, isCriticalHit } = this.props

    return (
      <div
        className={classnames("com-Monster", name)}
        style={{ top: top, right: right }}
      >
        <div className={classnames("healthbar")}>
          {receivedDamage > 0 && (
            <div className={classnames("damage-received", { isCriticalHit: isCriticalHit })}>
              {receivedDamage}
            </div>
          )}
          <div className="healthbar-inner" style={{ width: `${(currentHealth * 100)/health}%` }}></div>
        </div>
      </div>
    )
  }
}