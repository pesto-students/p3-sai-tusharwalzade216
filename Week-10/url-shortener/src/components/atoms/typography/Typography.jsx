import PropTypes from 'prop-types';
import MuiTypography from "@mui/material/Typography";

const Typography = ({
    align,
    children,
    component,
    gutterBottom,
    href,
    noWrap,
    sx,
    target,
    variant,
}) => (
    <MuiTypography
        align={align}
        component={component}
        gutterBottom={gutterBottom}
        href={href}
        noWrap={noWrap}
        sx={sx}
        target={target}
        variant={variant}
    >
        {children}
    </MuiTypography>
);

Typography.propTypes = {
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    children: PropTypes.string.isRequired,
    component: PropTypes.string,
    gutterBottom: PropTypes.bool,
    href: PropTypes.string,
    noWrap: PropTypes.bool,
    sx: PropTypes.object,
    target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
    variant: PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']),
};

Typography.defaultProps = {
    align: 'center',
    component: 'a',
    gutterBottom: false,
    href: '/',
    noWrap: true,
    sx: {
        color: 'inherit',
        display: { md: 'flex', xs: 'none' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        mr: 2,
        textDecoration: 'none',
    },
    target: undefined,
    variant: 'h6',
};

export default Typography;
