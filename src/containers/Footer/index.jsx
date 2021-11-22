import { Footer as FooterComponent } from "../../components/Footer"

import {
  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_SCREEN_UPGRADE,
  POPUP_SCREEN_FAQ,
  POPUP_SCREEN_ABOUT,
  POPUP_SCREEN_SHOP,
  POPUP_SCREEN_SETTINGS,
} from "constants"

@connect((state) => ({
  popup: state.popup,
}))
class Footer extends React.Component {

  render() {
    const { dispatch } = this.props

    return (
      <FooterComponent
        onUpgradeClick={() => {
         dispatch({ type: POPUP_OPEN, payload: { open: POPUP_SCREEN_UPGRADE } })
        }}
        onFaqClick={() => {
         dispatch({ type: POPUP_OPEN, payload: { open: POPUP_SCREEN_FAQ } })
        }}
        onAboutClick={() => {
         dispatch({ type: POPUP_OPEN, payload: { open: POPUP_SCREEN_ABOUT } })
        }}
        onShopClick={() => {
         dispatch({ type: POPUP_OPEN, payload: { open: POPUP_SCREEN_SHOP } })
        }}
        onSettingsClick={() => {
         dispatch({ type: POPUP_OPEN, payload: { open: POPUP_SCREEN_SETTINGS } })
        }}
      />
    )
  }
}

export { Footer }
