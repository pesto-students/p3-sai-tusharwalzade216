import PropTypes from 'prop-types';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';

const ListItemAvatar = ({
    children,
    sx
}) => (
    <MuiListItemAvatar sx={sx}>{children}</MuiListItemAvatar>
);

ListItemAvatar.propTypes = {
    children: PropTypes.node.isRequired,
    sx: PropTypes.object,
};

ListItemAvatar.defaultProps = {
    sx: {},
};

export default ListItemAvatar;
