import PropTypes from 'prop-types';

import { BrandLabel, Header } from "../../atoms";

const AppBar = () => (
    <Header>
        <BrandLabel>Easy Todos</BrandLabel>
    </Header>
);

AppBar.propTypes = {
    className: PropTypes.string,
};

AppBar.defaultProps = {
    className: "",
};

export default AppBar;
