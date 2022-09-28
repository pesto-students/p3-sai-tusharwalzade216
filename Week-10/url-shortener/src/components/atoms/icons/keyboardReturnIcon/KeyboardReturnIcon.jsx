import PropTypes from 'prop-types';
import MuiKeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const KeyboardReturnIcon = ({ sx }) => (
    <MuiKeyboardReturnIcon
        aria-label='keyboard-return-icon'
        sx={sx} />
);

KeyboardReturnIcon.propTypes = {
    sx: PropTypes.object,
};

KeyboardReturnIcon.defaultProps = {
    sx: {},
};

export default KeyboardReturnIcon;
