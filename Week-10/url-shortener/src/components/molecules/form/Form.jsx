import PropTypes from 'prop-types';

import { Box } from '../box';

const Form = ({
    ariaLabel,
    autoComplete,
    children,
    component,
    onSubmit,
    margin,
    noValidate,
    sx,
}) => (
    <Box
        aria-label={ariaLabel}
        autoComplete={autoComplete}
        component={component}
        m={margin}
        noValidate={noValidate}
        onSubmit={onSubmit}
        sx={sx}
    >
        {children}
    </Box>
);

Form.propTypes = {
    ariaLabel: PropTypes.string,
    autoComplete: PropTypes.string,
    children: PropTypes.node.isRequired,
    component: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    margin: PropTypes.number,
    noValidate: PropTypes.bool,
    sx: PropTypes.object,
};

Form.defaultProps = {
    ariaLabel: 'form',
    autoComplete: 'off',
    component: 'form',
    margin: 0,
    noValidate: false,
    sx: {},
};

export default Form;
