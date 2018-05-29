import React, {PropTypes} from 'react'

const SelectInput = ({name, label, onChange, defaultOption, options, value, error}) => {
    let wrapperClass = "form-group"
    if (error && error.length > 0) wrapperClass += " has-error"

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <select name={name} className="form-control" value={value} onChange={onChange}>
                <option value="">{defaultOption}</option>
                {options.map( option => {
                        return <option key={option.value} value={option.value}>{option.text}</option>
                    })
                }
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
}

export default SelectInput