import PropTypes from 'prop-types';
import MuiTextField from '@mui/material/TextField';

const TextField = ({
    autoFocus,
    color,
    focused,
    fullWidth,
    hasError,
    helperText,
    InputProps,
    label,
    onChange,
    placeholder,
    value,
}) => (
    <MuiTextField
        autoFocus={autoFocus}
        color={color}
        error={hasError}
        focused={focused}
        fullWidth={fullWidth}
        helperText={helperText}
        InputProps={InputProps}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
    />
);

TextField.propTypes = {
    autoFocus: PropTypes.bool,
    color: PropTypes.oneOf([
        'error', 'info', 'primary', 'secondary', 'success', 'warning'
    ]),
    focused: PropTypes.bool,
    fullWidth: PropTypes.bool,
    hasError: PropTypes.bool,
    helperText: PropTypes.string,
    InputProps: PropTypes.shape({
        inputMode: PropTypes.string,
        endAdornment: PropTypes.node,
        startAdornment: PropTypes.node,
    }),
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

TextField.defaultProps = {
    autoFocus: true,
    color: 'secondary',
    focused: true,
    fullWidth: true,
    hasError: false,
    helperText: undefined,
    InputProps: {},
    label: undefined,
    placeholder: undefined,
    value: undefined,
};

export default TextField;
