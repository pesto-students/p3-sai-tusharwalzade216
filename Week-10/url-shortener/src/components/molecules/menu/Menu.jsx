import PropTypes from 'prop-types';
import MuiMenu from "@mui/material/Menu";

import { MenuItem } from '../menuItem';

const Menu = ({
    anchorEl,
    anchorOrigin,
    items,
    keepMounted,
    onClose,
    transformOrigin,
    sx,
}) => (
    <MuiMenu
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        id="menu-appbar"
        keepMounted={keepMounted}
        onClose={onClose}
        open={Boolean(anchorEl)}
        transformOrigin={transformOrigin}
        sx={sx}
    >
        {items?.map((item) => (
            <MenuItem
                key={item?.link}
                onClick={() => onClose(item?.link)}>
                {item?.text}
            </MenuItem>
        ))}
    </MuiMenu>
);

const originShape = {
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
};

Menu.propTypes = {
    anchorEl: PropTypes.any,
    anchorOrigin: PropTypes.shape(originShape),
    items: PropTypes.array,
    keepMounted: PropTypes.bool,
    onClose: PropTypes.func,
    transformOrigin: PropTypes.shape(originShape),
    sx: PropTypes.object,
};

Menu.defaultProps = {
    anchorOrigin: {},
    keepMounted: true,
    sx: {},
    transformOrigin: {},
};

export default Menu;
