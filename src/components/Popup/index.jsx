import { POPUP_SCREEN_UPGRADE } from "constants"

import "./index.scss"

export class Popup extends React.Component {

  static propTypes = {
    type: PropTypes.string,
    content: PropTypes.node,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    type: POPUP_SCREEN_UPGRADE,
    content: null,
    onClose: null,
  };

  render () {
    const {
      type,
      content,
      onClose,
    } = this.props

    return (
      <div className={"com-Popup"}>
        <div className={classnames("popup-header", type)}></div>
        <div className="popup-close" onClick={onClose}></div>
        <div className="popup-table">
          <div className="popup-table-inner">
            {content}
          </div>
        </div>
      </div>
    )
  }
}