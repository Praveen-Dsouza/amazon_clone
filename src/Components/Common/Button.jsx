import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Components/Common/Button.scss';

function Button(props) {
  return (
    <>
        <button
            type={props.type}
            className={`c_pointer ${props.class}`}
            onClick={props.handleClick }
            disabled={props.disabled ? props.disabled: false}
        >
            {props.text}
        </button>
    </>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    class: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button
