/* eslint new-cap:0 no-unused-vars:0 */
"use strict";
import React, {useContext} from "react";
import PropTypes from "prop-types";
import { SaveContext } from '../SaveContext'

const Button = (props) => {

  const [save, setSave] = useContext(SaveContext)

  return (
    <button
      type="button"
      onClick={e => {
        setSave([...save, props.code])
        console.log(props.code);
        console.log(save);
      }}
      style={{marginLeft: '2%'}}
    >
      {props.children}
    </button>
  )

}

Button.propTypes = {
  buttonStyle: PropTypes.object,
  onClick: PropTypes.func,
}

export default Button;
