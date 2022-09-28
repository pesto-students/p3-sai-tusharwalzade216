import PropTypes from "prop-types";

import { Text } from "../../atoms";
import { StyledPlaceholderContainer } from "./emptyListPlaceholder.styled";

const EmptyListPlaceholder = ({ children }) => (
    <StyledPlaceholderContainer>
        <Text aria-label="Error Text">{children}</Text>
    </StyledPlaceholderContainer>
);

EmptyListPlaceholder.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

EmptyListPlaceholder.defaultProps = {
    children: ""
};

export default EmptyListPlaceholder;
