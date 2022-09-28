import PropTypes from 'prop-types';
import MuiAppBar from '@mui/material/AppBar';

const AppBar = ({
    children,
    color,
    enableColorOnDark,
    position,
    sx,
}) => (
    <MuiAppBar
        color={color}
        enableColorOnDark={enableColorOnDark}
        position={position}
        sx={sx}>
        {children}
    </MuiAppBar>
);

AppBar.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']),
    enableColorOnDark: PropTypes.bool,
    position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
    sx: PropTypes.object,
};

AppBar.defaultProps = {
    color: 'primary',
    enableColorOnDark: true,
    position: 'static',
    sx: {}
};

export default AppBar;
