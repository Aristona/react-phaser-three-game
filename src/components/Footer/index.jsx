import * as upgrade from "../../assets/gui/btn/upgrade.png"
import * as shop from "../../assets/gui/btn/shop.png"
import * as settings from "../../assets/gui/btn/settings.png"
import * as about from "../../assets/gui/btn/about.png"
import * as faq from "../../assets/gui/btn/faq.png"

import "./index.scss"

export class Footer extends React.Component {

  static propTypes = {
    onUpgradeClick: PropTypes.func,
    onShopClick: PropTypes.func,
    onSettingsClick: PropTypes.func,
    onAboutClick: PropTypes.func,
    onFaqClick: PropTypes.func,
  };

  static defaultProps = {
    onUpgradeClick: null,
    onShopClick: null,
    onSettingsClick: null,
    onAboutClick: null,
    onFaqClick: null,
  };

  render () {
    const {
      onUpgradeClick,
      onShopClick,
      onSettingsClick,
      onAboutClick,
      onFaqClick,
    } = this.props

    return (
      <div className={"com-Footer"}>
        <div className={"footer-inner"}>
          <div className="button" onClick={onUpgradeClick}>
            <img src={upgrade} />
            <span>Runes</span>
          </div>
          <div className="button" onClick={onAboutClick}>
            <img src={about} />
            <span>Stats</span>
          </div>
          {/*<div className="button disabled" onClick={onFaqClick}>
            <img src={faq} />
            <span>Help</span>
          </div>*/}
          <div className="button" onClick={onShopClick}>
            <img src={shop} />
            <span>Shop</span>
          </div>
          <div className="button" onClick={onSettingsClick}>
            <img src={settings} />
            <span>Settings</span>
          </div>
        </div>
      </div>
    )
  }
}