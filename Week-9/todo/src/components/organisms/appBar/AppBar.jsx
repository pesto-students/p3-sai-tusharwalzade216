import PropTypes from 'prop-types';

import { AppHeader, BrandLabel } from "../../atoms";

const AppBar = () => (
    <AppHeader>
        <BrandLabel>Easy Todos</BrandLabel>
    </AppHeader>
);

AppBar.propTypes = {
    className: PropTypes.string,
};

AppBar.defaultProps = {
    className: "",
};

export default AppBar;
