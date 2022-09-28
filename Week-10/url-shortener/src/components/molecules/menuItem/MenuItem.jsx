import PropTypes from 'prop-types';
import MuiMenuItem from '@mui/material/MenuItem';

const MenuItem = ({
    autoFocus,
    children,
    component,
    dense,
    disableGutters,
    divider,
    onClick,
    sx,
}) => (
    <MuiMenuItem
        autoFocus={autoFocus}
        component={component}
        dense={dense}
        disableGutters={disableGutters}
        divider={divider}
        onClick={onClick}
        sx={sx}
    >
        {children}
    </MuiMenuItem>
);

MenuItem.propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.node.isRequired,
    component: PropTypes.elementType,
    dense: PropTypes.bool,
    disableGutters: PropTypes.bool,
    divider: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    sx: PropTypes.object,
};

MenuItem.defaultProps = {
    autoFocus: false,
    component: "li",
    dense: false,
    disableGutters: false,
    divider: false,
    sx: {},
};

export default MenuItem;
