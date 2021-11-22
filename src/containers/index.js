import { withRouter } from "react-router-dom"

import { Game } from "containers/Game"

// Preload
import { Monster } from "components/Monster"
import { Counter } from "components/Counter"
import { Footer } from "components/Footer"

import "./index.scss"

@withRouter
@connect((state) => ({

}))
class App extends React.Component {

  state = {
    load: false
  }

  async componentDidMount() {
    const preload = await this.preload()

    this.setState({
      load: true
    })
  }

  preload() {
    return new Promise(accept => {
      setTimeout(() => {
        return accept()
      }, 3000)
    })
  }

  preloadAll() {
    return (
      <div className="preload">
        <Monster name="Fallen_Angels_1" />
        <Monster name="Fallen_Angels_2" />
        <Monster name="Fallen_Angels_3" />
        <Monster name="Golem_1" />
        <Monster name="Golem_2" />
        <Monster name="Golem_3" />
        <Monster name="Minotaur_1" />
        <Monster name="Minotaur_2" />
        <Monster name="Minotaur_3" />
        <Monster name="Reaper_Man_1" />
        <Monster name="Reaper_Man_2" />
        <Monster name="Reaper_Man_3" />
        <Monster name="Satyr_1" />
        <Monster name="Satyr_2" />
        <Monster name="Satyr_3" />
        <Monster name="Troll_1" />
        <Monster name="Troll_2" />
        <Monster name="Troll_3" />
        <Monster name="Wraith_1" />
        <Monster name="Wraith_2" />
        <Monster name="Wraith_3" />
      </div>
    )
  }

  preloadInitial() {
    return (
      <div className="preload">
        <Monster name="Troll_3" />
        <Counter />
        <Footer />
      </div>
    )
  }

  render() {
    const { load } = this.state

    if (!load) {
      return (
        <div className="app-container">
          <h1 className="loading">Loading game...</h1>

          {this.preloadInitial()}
        </div>
      )
    }

    return (
      <div className="app-container">
        <Game />

        {this.preloadAll()}
      </div>
    )
  }
}

export { App }
