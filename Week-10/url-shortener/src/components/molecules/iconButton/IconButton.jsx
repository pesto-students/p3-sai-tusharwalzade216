import PropTypes from 'prop-types';
import MuiIconButton from "@mui/material/IconButton";

const IconButton = ({
    ariaLabel,
    children,
    color,
    disabled,
    edge,
    onClick,
    size,
}) => (
    <MuiIconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        aria-label={ariaLabel}
        color={color}
        disabled={disabled}
        edge={edge}
        onClick={onClick}
        size={size}
    >
        {children}
    </MuiIconButton>
);

IconButton.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['default', 'error', 'info', 'inherit', 'primary', 'secondary', 'success', 'warning']),
    disabled: PropTypes.bool,
    edge: PropTypes.oneOf(['end', 'start', false]),
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
};

IconButton.defaultProps = {
    ariaLabel: 'test label',
    color: 'inherit',
    disabled: false,
    edge: false,
    size: 'large'
};

export default IconButton;
