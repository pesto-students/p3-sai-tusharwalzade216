import PropTypes from 'prop-types';
import MuiInputAdornment from '@mui/material/InputAdornment';

const InputAdornment = ({
    children,
    position
}) => (
    <MuiInputAdornment position={position}>{children}</MuiInputAdornment>
);

InputAdornment.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['start', 'end']).isRequired
};

export default InputAdornment;
