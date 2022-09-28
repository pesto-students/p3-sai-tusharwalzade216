import PropTypes from 'prop-types';
import MuiMenuIcon from '@mui/icons-material/Menu';

const MenuIcon = ({ sx }) => (
    <MuiMenuIcon
        aria-label='link-icon'
        sx={sx} />
);

MenuIcon.propTypes = {
    sx: PropTypes.object,
};

MenuIcon.defaultProps = {
    sx: {}
};

export default MenuIcon;
