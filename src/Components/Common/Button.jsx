import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Components/Common/Button.scss';

function Button(props) {
  return (
    <div>
        <button
            className={props.class}
            onClick={() => { props.handleClick(props.data || null) }}
            disabled={props.disabled ? props.disabled: false}
        >
            {props.text}
        </button>
    </div>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    class: PropTypes.string,
    handleClick: PropTypes.func,
    data: PropTypes.any,
    disabled: PropTypes.bool
}

export default Button
