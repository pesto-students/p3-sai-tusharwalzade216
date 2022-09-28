import PropTypes from 'prop-types';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = ({
    children,
    disableGutters,
    sx,
    variant,
}) => (
    <MuiToolbar
        disableGutters={disableGutters}
        sx={sx}
        variant={variant}>
        {children}
    </MuiToolbar>
);

Toolbar.propTypes = {
    children: PropTypes.node.isRequired,
    disableGutters: PropTypes.bool,
    sx: PropTypes.object,
    variant: PropTypes.oneOf(['dense', 'regular']),
};

Toolbar.defaultProps = {
    disableGutters: false,
    sx: {},
    variant: 'regular',
};

export default Toolbar;
