import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';

const Button = ({
    children,
    onClick,
    sx,
    variant,
}) => (
    <MuiButton
        onClick={onClick}
        sx={sx}
        variant={variant}>
        {children}
    </MuiButton>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    sx: PropTypes.object,
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

Button.defaultProps = {
    onClick: () => { },
    sx: {},
    variant: 'text',
};

export default Button;
