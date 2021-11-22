import { ItemBoard } from "../../components/ItemBoard"

@connect((state) => ({
  item: state.item,
}))
class ItemBoardScreen extends React.Component {

  static propTypes = {
    start: PropTypes.bool,
    onProduceItem: PropTypes.func,
    onMergeItem: PropTypes.func,
    onReceiveCoin: PropTypes.func,
  };

  static defaultProps = {
    start: false,
    onProduceItem: null,
    onMergeItem: null,
    onReceiveCoin: null,
  };

  state = {
    clickedIndex: null
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
    this.started = true
    this.produceItem()

    this.productionInterval = setInterval(() => {
      this.produceItem()
    }, 4500)
  }

  produceItem() {
    const { onProduceItem } = this.props
    onProduceItem.apply(this, [])
  }

  onItemClick = (item, index) => {
    const { onMergeItem, item: { items } } = this.props
    const { clickedIndex } = this.state

    if (!item) {
      this.setState({
        clickedIndex: null
      })
      return
    }

    // If we click ourself
    if (clickedIndex === index) {
      this.setState({
        clickedIndex: null
      })
      return
    }

    // If we already have clicked index, it means we clicked an item before, so we need to compare.
    if (clickedIndex !== null) {
      const previousItem = items[clickedIndex]

      if (previousItem.damage === item.damage) {
        onMergeItem.apply(this, [clickedIndex, index])
      }

      this.setState({
        clickedIndex: null,
      })

      return
    }

    this.setState({
      clickedIndex: index
    })
    return
  }

  render() {
    const { onReceiveCoin,  item: { items }, start } = this.props
    const { clickedIndex } = this.state

    return (
      <ItemBoard
        start={start}
        items={items}
        clickedIndex={clickedIndex}
        onClick={this.onItemClick}
        onReceiveCoin={onReceiveCoin}
      />
    )
  }
}

export { ItemBoardScreen }
