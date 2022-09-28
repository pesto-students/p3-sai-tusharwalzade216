import PropTypes from 'prop-types';
import MuiLinkIcon from '@mui/icons-material/Link';

const LinkIcon = ({ sx }) => (
    <MuiLinkIcon
        aria-label='link-icon'
        sx={sx} />
);

LinkIcon.propTypes = {
    sx: PropTypes.object,
};

LinkIcon.defaultProps = {
    sx: {}
};

export default LinkIcon;
