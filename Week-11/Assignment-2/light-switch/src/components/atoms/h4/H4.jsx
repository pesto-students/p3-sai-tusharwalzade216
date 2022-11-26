import PropTypes from 'prop-types';

const H4 = ({
    children,
    styles,
}) => (
    <h4 style={styles}>{children}</h4>
);

H4.propTypes = {
    children: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

H4.defaultProps = {
    styles: {},
}

export default H4;
