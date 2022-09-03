import PropTypes from 'prop-types';

import { StyledHeader } from './header.styled';

const Header = ({ children }) => (
    <StyledHeader>{children}</StyledHeader>
);

Header.propTypes = {
    children: PropTypes.element,
};

Header.defaultProps = {
    children: <></>,
};

export default Header;
