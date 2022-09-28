import PropTypes from 'prop-types';

const BrandLabel = ({ children }) => (
    <h3>{children}</h3>
);

BrandLabel.propTypes = {
    children: PropTypes.string
};

BrandLabel.defaultProps = {
    children: "Easy Todos"
};

export default BrandLabel;
