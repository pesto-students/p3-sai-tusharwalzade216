import PropTypes from 'prop-types';
import MuiContainer from '@mui/material/Container';

const Container = ({
    children,
    disableGutters,
    fixed,
    sx,
    maxWidth,
}) => (
    <MuiContainer
        disableGutters={disableGutters}
        fixed={fixed}
        sx={sx}
        maxWidth={maxWidth}>
        {children}
    </MuiContainer>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    disableGutters: PropTypes.bool,
    fixed: PropTypes.bool,
    sx: PropTypes.object,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Container.defaultProps = {
    disableGutters: false,
    fixed: false,
    sx: {},
    maxWidth: 'xl',
};

export default Container;
