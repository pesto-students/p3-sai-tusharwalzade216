import PropTypes from "prop-types";

import { NO_TODOS_TEXT } from "../../common/constants";
import { Title } from "../../common/Wrappers";

const Error = ({ errorTitle }) => {
    return (
        <Title>{errorTitle}</Title>
    );
};

Error.defaultProps = {
    errorTitle: NO_TODOS_TEXT
};

Error.propTypes = {
    errorTitle: PropTypes.string
};

export default Error;
