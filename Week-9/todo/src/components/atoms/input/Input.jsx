import PropTypes from 'prop-types';

import { idUtil } from '../../../utils';
import { StyledInput } from "./input.styled";
import { INPUT_TYPES } from '../../../constants';

const Input = ({
    ariaLabel,
    autoFocus,
    checked,
    disabled,
    id,
    maxLength,
    minLength,
    onChange,
    placeholder,
    required,
    type,
    value
}) => (
    <StyledInput
        aria-label={ariaLabel}
        autoFocus={autoFocus}
        {...(type === INPUT_TYPES.CHECKBOX && { checked: checked })}
        disabled={disabled}
        id={id?.toString()}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(e) => onChange(e, id)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
    />
);

Input.propTypes = {
    ariaLabel: PropTypes.string,
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
    value: PropTypes.string
};

Input.defaultProps = {
    ariaLabel: "Input",
    autoFocus: false,
    checked: false,
    disabled: false,
    id: `input-${idUtil.getUniqueIdString()}`,
    maxLength: 524288,
    minLength: 0,
    placeholder: "Enter your input",
    required: false,
    value: ""
};

export default Input;
