import PropTypes from 'prop-types';

const Container = ({
    children,
    styles,
}) => (
    <main
        style={styles}
    >
        {children}
    </main>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object
};

Container.defaultProps = {
    styles: {}
};

export default Container;
