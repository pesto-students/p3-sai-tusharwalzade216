import PropTypes from 'prop-types';
import MuiAvatar from '@mui/material/Avatar';

const Avatar = ({
    children
}) => (
    <MuiAvatar>{children}</MuiAvatar>
);

Avatar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Avatar;
