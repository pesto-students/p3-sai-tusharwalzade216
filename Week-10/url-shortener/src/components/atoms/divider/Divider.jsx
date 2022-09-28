import PropTypes from 'prop-types';
import MuiDivider from '@mui/material/Divider';

const Divider = ({
    sx,
    variant,
}) => (
    <MuiDivider
        sx={sx}
        variant={variant} />
);

Divider.propTypes = {
    sx: PropTypes.object,
    variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
};

Divider.defaultProps = {
    sx: {},
    variant: 'middle',
};

export default Divider;
