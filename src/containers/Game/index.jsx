import { withRouter } from "react-router-dom"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

import * as the_path_of_the_goblin_king from "../../assets/music/the_path_of_the_goblin_king.mp3"

import Phaser from "phaser"
import { IonPhaser } from "@ion-phaser/react"

import * as bg1 from "../../assets/backgrounds/game_background_1/game_background_1-resized.png"
import * as bg2 from "../../assets/backgrounds/game_background_2/game_background_2-resized.png"
import * as bg3 from "../../assets/backgrounds/game_background_3/game_background_3-resized.png"
import * as bg4 from "../../assets/backgrounds/game_background_4/game_background_4-resized.png"

/*
|  Containers
*/

import { Header } from "../Header"
import { Footer } from "../Footer"
import { ItemBoardScreen } from "../ItemBoardScreen"
import { MonstersScreen } from "../MonstersScreen"
import { RuneScreen } from "../RuneScreen"

/*
|  Components
*/

import { Popup } from "../../components/Popup"
import { Tutorial } from "../../components/Tutorial"

import {
  STARTING_LEVEL,
  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_SCREEN_UPGRADE,
  POPUP_SCREEN_FAQ,
  POPUP_SCREEN_ABOUT,
  POPUP_SCREEN_SHOP,
  POPUP_SCREEN_SETTINGS,
  COIN_RECEIVED,
  ITEM_PRODUCE,
  ITEM_MERGE,
  COIN_SPENT,
  MONSTER_UPDATE,
  MONSTER_DIE,
} from "constants"

import { ITEM_LEVEL_MAP } from "constants/items"
import { RUNE_BUY } from "constants/runes"

import "./index.scss"

// const data = localStorage.getItem("game-data")
// const json = JSON.parse(data)

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += props.turningSpeed))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Line(props) {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.8
    mesh.current.rotation.x += 0.8

    if (mesh.current.position.x < 10) {
      mesh.current.position.x += 0.1
    } else {
      mesh.current.position.x = -10
    }
  })

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color="#dd7777" />
    </mesh>
  )
}


@withRouter
@connect((state) => ({
  app: state.app,
  auth: state.auth,
  popup: state.popup,
}))
class Game extends React.Component {

  state = {
    level: STARTING_LEVEL,
    bgm: true,
    phaserGame: {
      height: 576,
      width: 1024,
      type: Phaser.AUTO,
      scene: {
        init: function() {

        },
        preload: function() {
          this.load.image('bg1', bg1)
          this.load.image('bg2', bg2)
          this.load.image('bg3', bg3)
          this.load.image('bg4', bg4)
        },
        create: function() {
          this.bg = this.add.image(0, 0, "bg4")
          this.bg.setOrigin(0, 0)

          this.game.events.on('onMonsterDie', (level) => {
            // todo fix this bad code later
            if (level >= 6 && level < 11) {
              this.bg = this.add.image(0, 0, "bg1")
              this.bg.setOrigin(0, 0)
              return
            }

            if (level >= 11 && level < 16) {
              this.bg = this.add.image(0, 0, "bg2")
              this.bg.setOrigin(0, 0)
              return
            }

            if (level >= 16 && level < 21) {
              this.bg = this.add.image(0, 0, "bg3")
              this.bg.setOrigin(0, 0)
              return
            }

            this.bg = this.add.image(0, 0, "bg4")
            this.bg.setOrigin(0, 0)
          })
        },
        update: function() {

        }
      }
    },
    onboardingStep: 0
  }

  saveProgress() {
    setInterval(() => {
      localStorage.setItem("game-data", JSON.stringify(this.state))
    }, 5000)
  }

  getBoxes() {
    return (
      <Canvas className="canvas">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Box position={[-2, -1, 0]} turningSpeed={0.01} />
        <Box position={[0, 0, 0]} turningSpeed={0.03} />

        <Box position={[2, 1, 0]} turningSpeed={0.075} />

        {/*<Line />*/}

      </Canvas>
    )
  }

  getSettings() {
    const { bgm } = this.state

    return (
      <React.Fragment>
        <h1>Toggle BGM</h1>
        <button
          onClick={() => {
            this.setState({ bgm: !bgm })
          }}
          className="bgm"
        >
          {bgm ? "Pause" : "Play"}
        </button>
      </React.Fragment>
    )
  }

  getPopupContent() {
    const { popup, dispatch } = this.props

    switch (popup.open) {
      case POPUP_SCREEN_UPGRADE:
        return (
          <RuneScreen
            onRuneBuy={rune => {
              dispatch({ type: COIN_SPENT, payload: { coins: rune.price } })
              dispatch({ type: RUNE_BUY, payload: { rune } })
            }}
          />
        )

      case POPUP_SCREEN_FAQ:
        return (
          <React.Fragment>
            <h1>How to Play</h1>
            <br />
            <ul>
              <li>1. Click and match weapons to get one level higher.</li>
              <br />
              <li>2. Every weapon gives you coins and deals damage to monsters.</li>
              <br />
              <li>3. Upgrade your runes to gain even more coins and damage.</li>
              <br />
              <li>4. That's all. How many levels can you beat?</li>
            </ul>
          </React.Fragment>
        )

      case POPUP_SCREEN_ABOUT:
        return (
          <React.Fragment>
            <h1>Character Sheet (under construction)</h1>
          </React.Fragment>
        )

      case POPUP_SCREEN_SHOP:
        return (
          <React.Fragment>
            <h1>Shop (under construction)</h1>
            <br />
            <p>Sorry, there is nothing for sale right now.</p>
          </React.Fragment>
        )

      case POPUP_SCREEN_SETTINGS:
        return this.getSettings()

      default:
        return null
    }
  }

  renderContent() {
    const { dispatch } = this.props
    const { level, onboardingStep } = this.state
    const onboardingLastStep = 8
    const start = onboardingStep === onboardingLastStep
    const header = <Header key="Header" level={level} />

    const itemBoard = (
      <ItemBoardScreen
        key="ItemBoardScreen"
        start={start}
        onProduceItem={() => {
          dispatch({ type: ITEM_PRODUCE, payload: { items: [ITEM_LEVEL_MAP[1]] } })
        }}
        onMergeItem={(fromIndex, toIndex) => {
          // Do not let merge before step 4
          if (onboardingStep < 4) {
            return
          }

          if (onboardingStep === 4) {
            this.setState({ onboardingStep: onboardingStep + 1 })
          }

          dispatch({ type: ITEM_MERGE, payload: { fromIndex, toIndex } })
        }}
        onReceiveCoin={coins => dispatch({ type: COIN_RECEIVED, payload: { coins }})}
      />
    )

    const monsters = (
      <MonstersScreen
        key="MonstersScreen"
        start={start}
        level={level}
        onMonsterDie={(level, monster) => {
          this.setState({
            level: level
          })

          this.state.phaserGame.instance.events.emit("onMonsterDie", level)

          dispatch({ type: MONSTER_DIE, payload: { level } })

          if (monster.loot === true) {
            dispatch({ type: ITEM_PRODUCE, payload: { items: [ITEM_LEVEL_MAP[1]] } })
          }
        }}
        onMonsterHit={monster => {
          dispatch({ type: MONSTER_UPDATE, payload: { monster } })
        }}
      />
    )

    const footer = <Footer key="Footer" />

    const tutorial = (
      <Tutorial
        key="Tutorial"
        step={onboardingStep}
        onNext={() => {
          this.setState({ onboardingStep: onboardingStep + 1 })
        }}
      />
    )

    if (onboardingStep !== onboardingLastStep) {
      if (onboardingStep <= 1) {
        return [header, tutorial]
      }

      return [header, itemBoard, tutorial]
    }

    return [header, itemBoard, monsters, footer]
  }

  render() {
    const { dispatch, popup } = this.props
    const { phaserGame, bgm } = this.state

    return (
      <div className="game-container">
        <audio
          preload="auto"
          autoPlay={true}
          loop={true}
          muted={!bgm}
          src={the_path_of_the_goblin_king}
        />

        <div className={classnames("screen", {
          popupActive: popup.open
        })}>
          <IonPhaser game={phaserGame} state={this.state} />

          {this.renderContent()}
        </div>

        {popup.open && (
          <Popup
            type={popup.open}
            content={this.getPopupContent()}
            onClose={e => {
              this.props.dispatch({ type: POPUP_CLOSE })
            }}
          />
        )}

      </div>
    )
  }
}

export { Game }
