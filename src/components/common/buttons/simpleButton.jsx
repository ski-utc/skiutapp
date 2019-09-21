import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./buttons.scss";
import fleche from "../../../images/fleche.svg";

const Button = ({ name, to, history }) => {

  const redirect = React.useCallback(() => history.push(to),[to, history]);1

  return (
      <div className="buttons simple-button" onClick={ redirect }>
        <div className="simpleButton-container">
          <div className="simple-button-name">{ name }</div>
          <div className="simple-button-right">
            <object className="fleche" type="image/svg+xml" data={fleche}/>
          </div>
        </div>
      </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  history: PropTypes.any.isRequired,
}

export default withRouter(Button);