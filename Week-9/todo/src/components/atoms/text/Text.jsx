import PropTypes from 'prop-types';

import { TextContainer } from "./text.styled";

const Text = ({ children }) => (
    <TextContainer>
        {children}
    </TextContainer>
);

Text.propTypes = {
    children: PropTypes.string.isRequired,
};

Text.defaultProps = {
    children: "",
};

export default Text;
