import PropTypes from "prop-types";

import { NO_TODOS_TEXT } from "../../common/constants";
import { ErrorContainer, Title } from "../../common/Wrappers";

const Error = ({ errorTitle }) => {
    return (
        <ErrorContainer>
            <Title aria-label="Error Title">{errorTitle}</Title>
        </ErrorContainer>
    );
};

Error.defaultProps = {
    errorTitle: NO_TODOS_TEXT
};

Error.propTypes = {
    errorTitle: PropTypes.string
};

export default Error;
