import "./index.scss"

const COIN_RECEIVE_SHOW_DURATION = 500

export function Item(props) {
  if (!props.item) {
    return (
      <div
        onClick={() => props.onClick && props.onClick.apply(this, [null, props.i])}
        className="item"
      ></div>
    )
  }

  return (
    <div
      onClick={() => props.onClick && props.onClick.apply(this, [props.item, props.i])}
      className={classnames("item", {
        clicked: props.clickedIndex === props.i,
        highlight: props.highlight,
      })}
    >
      <div className="item-stats">
        <div className="item-damage">
          {props.item.damage}
        </div>
        <div className="item-coin">
          {props.item.coins}
        </div>
      </div>
      <img src={props.item.icon} />
    </div>
  )
}

export class ItemBoard extends React.Component {

  static propTypes = {
    start: PropTypes.bool,
    items: PropTypes.any,
    clickedIndex: PropTypes.any,
    onClick: PropTypes.func,
    onReceiveCoin: PropTypes.func,
  };

  static defaultProps = {
    start: false,
    items: [],
    clickedIndex: null,
    onClick: null,
    onReceiveCoin: null,
  };

  state = {
    highlight: false
  }

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
    const { onReceiveCoin } = this.props
    this.started = true

    this.interval = setInterval(() => {
      if (!this.props.start) {
        return
      }

      this.setState({
        highlight: true
      })

      const coins = this.props.items.reduce((acc, item) => {
        if (item) {
          acc += item.coins
        }

        return acc
      }, 0)

      onReceiveCoin.call(this, coins)

      setTimeout(() => {
        this.setState({
          highlight: false
        })
      }, COIN_RECEIVE_SHOW_DURATION)
    }, 2500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render () {
    const { items, clickedIndex, onClick } = this.props
    const { highlight } = this.state

    return (
      <div className="com-ItemBoard">
        {items.map((item, i) => (
          <Item
            key={i}
            i={i}
            item={item}
            highlight={highlight}
            clickedIndex={clickedIndex}
            onClick={onClick}
          />
        ))}
      </div>
    )
  }
}