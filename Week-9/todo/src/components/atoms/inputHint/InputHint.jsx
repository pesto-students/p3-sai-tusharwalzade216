import PropTypes from 'prop-types';

import { StyledInputHint } from "./inputHint.styled";

const InputHint = ({ children }) => (
    <StyledInputHint>{children}</StyledInputHint>
);

InputHint.propTypes = {
    children: PropTypes.string.isRequired,
};

InputHint.defaultProps = {
    children: "",
};

export default InputHint;
