import PropTypes from 'prop-types';
import MuiBox from "@mui/material/Box";

const Box = ({
    autoComplete,
    children,
    component,
    m,
    noValidate,
    onSubmit,
    sx
}) => (
    <MuiBox
        autoComplete={autoComplete}
        component={component}
        m={m}
        noValidate={noValidate}
        onSubmit={onSubmit}
        sx={sx}>
        {children}
    </MuiBox>
);

Box.propTypes = {
    autoComplete: PropTypes.string,
    children: PropTypes.node.isRequired,
    component: PropTypes.string,
    m: PropTypes.number,
    noValidate: PropTypes.bool,
    onSubmit: PropTypes.func,
    sx: PropTypes.object,
};

Box.defaultProps = {
    autoComplete: 'off',
    component: undefined,
    m: 0,
    noValidate: false,
    onSubmit: () => { },
    sx: {
        display: {
            md: 'none',
            xs: 'flex'
        },
        flexGrow: 1
    },
};

export default Box;
