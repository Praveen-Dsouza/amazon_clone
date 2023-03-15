import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Components/Common/InputField.scss';

function InputField(props) {
    const [value, setValue] = useState(props.value)

    const handleChange = (id, value) => {
        setValue(value)
        props.onInputValueChange(id, value)
    }

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <div>
            <input 
                type={props.type}
                id={props.id}
                className={`form-control ${props.class}`}
                placeholder={props.placeholder || ''}
                value={value || ''}
                disabled={props.disabled ? props.disabled: false}
                onChange={(e) => handleChange(props.id, e.target.value)}
                required={props.required ? props.required : false}
                maxLength={props.maxLength? props.maxLength: 250}
            />
        </div>
    )
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    class: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    onInputValueChange: PropTypes.func,
    required: PropTypes.bool,
    maxLength: PropTypes.number
}

export default InputField
