import PropTypes from 'prop-types';

const Button = ({
    children,
    onClick,
    type,
}) => (
    <button
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => { },
    type: 'button',
}

export default Button;
