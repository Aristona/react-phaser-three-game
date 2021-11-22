import { Counter } from "../../components/Counter"

@connect((state) => ({
  item: state.item,
  coin: state.coin,
}))
class Header extends React.Component {

  render() {
    const { level, item: { dps }, coin } = this.props

    return (
      <Counter
        level={level}
        dps={dps}
        coins={coin.coins}
      />
    )
  }
}

export { Header }
