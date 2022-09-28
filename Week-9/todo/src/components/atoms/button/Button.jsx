import { memo } from 'react';
import PropTypes from 'prop-types';

import { idUtil } from '../../../utils';
import { BUTTON_TYPES } from './constants';
import { StyledButton } from "./button.styled";

const Button = ({
    children,
    disabled,
    id,
    onClick,
    type
}) => (
    <StyledButton
        disabled={disabled}
        id={id}
        onClick={onClick}
        type={type}
    >
        {children}
    </StyledButton>
);

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

Button.defaultProps = {
    children: "",
    disabled: false,
    id: `btn-${idUtil.getUniqueIdString()}`,
    onClick: () => { },
    type: BUTTON_TYPES.BUTTON,
};

export default memo(Button);
