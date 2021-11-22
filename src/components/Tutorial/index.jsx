import "./index.scss"

export class Tutorial extends React.Component {

  static propTypes = {
    content: PropTypes.node,
    onNext: PropTypes.func,
  };

  static defaultProps = {
    content: null,
    onNext: null,
  };

  getContent() {
    const { step } = this.props

    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <p>Welcome!</p>
            <br />
            <p>Good to see you here!</p>
            <br />
            <p>I will teach you the basics of the game now.</p>
          </React.Fragment>
        )

      case 1:
        return (
          <React.Fragment>
            <h1>←</h1>

            <p>Here, you see your Coins, Stage and Damage.</p>
            <br />
            <p>You need to kill the Monster to go to the next Stage.</p>
          </React.Fragment>
        )

      case 2:
        return (
          <React.Fragment>
            <h1>←</h1>

            <p>This is the Weapon Board.</p>
            <br />
            <p>Every weapon generates coin and deals damage to monsters automatically.</p>
            <br />
            <p>I gave you two Wooden Swords.</p>
          </React.Fragment>
        )

      case 3:
        return (
          <React.Fragment>
            <h1>←</h1>
            <p>The numbers on swords have meanings.</p>
            <br />
            <p><span className="red-number">Red number:</span> how much damage it provides</p>
            <br />
            <p><span className="yellow-number">Yellow number:</span> how much coin it generates</p>
          </React.Fragment>
        )

      case 4:
        return (
          <React.Fragment>
            <h1>←</h1>
            <p>You can click on Weapons and combine them to get more powerful versions.</p>
            <br />
            <p>Try to click on both Weapons to make a more powerful version.</p>
            <br />
            <p>I am waiting...</p>
          </React.Fragment>
        )

      case 5:
        return (
          <React.Fragment>
            <h1>←</h1>
            <p>Great, you made a Steel Sword! It is more powerful so Weapon's Coin income and Damage is increased to 2.</p>
            <br />
            <p>You can combine only same tier of Weapons.</p>
          </React.Fragment>
        )

      case 6:
        return (
          <React.Fragment>
            <h1>←</h1>
            <p>Every few seconds you will get new weapons automatically.</p>
            <br />
            <p>Combine them and get stronger. Spend your coins on Runes to get even stronger!</p>
          </React.Fragment>
        )

      case 7:
        return (
          <React.Fragment>
            <h1>←</h1>
            <p>Now you are ready to challenge the monsters!</p>
            <br />
            <p>Click the Start button to attack first monster.</p>
            <br />
            <p>Have fun!</p>
          </React.Fragment>
        )

      default:
        return (
          <React.Fragment>
            <p>Not implemented</p>
          </React.Fragment>
        )
    }
  }

  render () {
    const { step, onNext } = this.props

    return (
      <div className={classnames("com-Tutorial", `step-${step}`)}>
        <div className="tutorial-content">
          {this.getContent()}
        </div>
        <button className="next" onClick={onNext}>Next</button>
      </div>
    )
  }
}