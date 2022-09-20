import PropTypes from "prop-types";

const H3 = ({ children, className, styles }) => (
    <h3
        className={className}
        style={styles}
    >
        {children}
    </h3>
);

H3.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    styles: PropTypes.object
};

H3.defaultProps = {
    className: '',
    styles: {}
};

export default H3;
