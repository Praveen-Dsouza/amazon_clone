import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Components/Common/InputField.scss';

function InputField(props) {
    // const [value, setValue] = useState(props.value)

    // const handleChange = (id, value) => {
    //     setValue(value)
    //     props.onInputValueChange(id, value)
    // }

    // useEffect(() => {
    //     setValue(props.value)
    // }, [props.value])

    return (
        <>
            <input 
                type={props.type}
                id={props.id}
                className={`form-control ${props.class}`}
                placeholder={props.placeholder || ''}
                value={props.value || ''}
                disabled={props.disabled ? props.disabled: false}
                onChange={props.handleChange}
                required={props.required ? props.required : false}
                maxLength={props.maxLength? props.maxLength: 250}
            />
        </>
    )
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    class: PropTypes.string,
    data: PropTypes.any,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    handleChange: PropTypes.any,
    required: PropTypes.bool,
    maxLength: PropTypes.number
}

export default InputField
