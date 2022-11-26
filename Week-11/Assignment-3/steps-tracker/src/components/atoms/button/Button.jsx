import PropTypes from 'prop-types';

import './button.css';

const Button = ({
    children,
    className,
    onClick,
    styles,
    type,
    variant
}) => (
    <button
        className={[
            'button',
            ...className,
            (variant === 'reset' ? 'reset' : 'submit')
        ].join(' ')}
        onClick={onClick}
        style={styles}
        type={type}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    styles: PropTypes.object,
    type: PropTypes.string,
    variant: PropTypes.oneOf(['reset', 'submit']),
};

Button.defaultProps = {
    className: '',
    onClick: () => { },
    styles: {},
    type: 'button',
    variant: 'submit',
};

export default Button;
