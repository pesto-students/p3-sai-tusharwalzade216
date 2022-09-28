import PropTypes from 'prop-types';
import MuiContentCopyIcon from '@mui/icons-material/ContentCopy';

const ContentCopyIcon = ({ sx }) => (
    <MuiContentCopyIcon
        aria-label='content-copy-icon'
        sx={sx} />
);

ContentCopyIcon.propTypes = {
    sx: PropTypes.object,
};

ContentCopyIcon.defaultProps = {
    sx: {},
};

export default ContentCopyIcon;
