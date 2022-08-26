import { NO_TODOS_TEXT } from "../../common/constants";
import { Title } from "../../common/Wrappers";

const Error = ({ errorTitle }) => {
    return (
        <Title>{errorTitle ?? NO_TODOS_TEXT}</Title>
    );
};

export default Error;
