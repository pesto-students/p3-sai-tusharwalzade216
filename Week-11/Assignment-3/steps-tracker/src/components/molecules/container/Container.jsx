import PropTypes from 'prop-types';

const Container = ({
    children,
    className,
    styles,
}) => (
    <main
        className={className}
        style={styles}
    >
        {children}
    </main>
);

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    styles: PropTypes.object
};

Container.defaultProps = {
    className: '',
    styles: {}
};

export default Container;
