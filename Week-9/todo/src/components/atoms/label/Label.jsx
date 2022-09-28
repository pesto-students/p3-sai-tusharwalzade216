import { memo } from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from "./label.styled";

const Label = ({
    children,
    labelFor,
    required,
}) => (
    <StyledLabel
        htmlFor={labelFor}
    >
        {children}
        {required && <span>*</span>}
    </StyledLabel>
);

Label.propTypes = {
    children: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    required: PropTypes.bool,
};

Label.defaultProps = {
    required: false,
};

export default memo(Label);
