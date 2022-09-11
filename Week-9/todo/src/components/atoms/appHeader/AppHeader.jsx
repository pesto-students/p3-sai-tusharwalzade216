import PropTypes from 'prop-types';

import { StyledHeader } from './appHeader.styled';

const AppHeader = ({ children }) => (
    <StyledHeader>{children}</StyledHeader>
);

AppHeader.propTypes = {
    children: PropTypes.element,
};

AppHeader.defaultProps = {
    children: <></>,
};

export default AppHeader;
