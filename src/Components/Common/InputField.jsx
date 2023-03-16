import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Components/Common/InputField.scss';

function InputField(props) {
    const [value, setValue] = useState(props.value)

    const handleChange = (value) => {
        setValue(value)
        props.onInputValueChange(value)
    }

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <>
            <input 
                type={props.type}
                className={`form-control ${props.class}`}
                placeholder={props.placeholder || ''}
                value={value || ''}
                disabled={props.disabled ? props.disabled: false}
                onChange={(e) => handleChange(e.target.value)}
                required={props.required ? props.required : false}
                maxLength={props.maxLength? props.maxLength: 250}
            />
        </>
    )
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    class: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    onInputValueChange: PropTypes.func,
    required: PropTypes.bool,
    maxLength: PropTypes.number
}

export default InputField
