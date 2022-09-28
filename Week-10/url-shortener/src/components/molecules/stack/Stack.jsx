import PropTypes from 'prop-types';
import MuiStack from '@mui/material/Stack';

const Stack = ({
    ariaLabel,
    children,
    direction,
    flexGrow,
    flexWrap,
    justifyContent,
}) => (
    <MuiStack
        aria-label={ariaLabel}
        direction={direction}
        flexGrow={flexGrow}
        flexWrap={flexWrap}
        justifyContent={justifyContent}>
        {children}
    </MuiStack>
);

Stack.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
    flexGrow: PropTypes.oneOf([1, 0]),
    flexWrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
    justifyContent: PropTypes.oneOf([
        'center', 'end', 'flex-end', 'flex-start', 'left', 'normal', 'right',
        'space-around', 'space-between', 'space-evenly', 'start', 'stretch',
    ]),
};

Stack.defaultProps = {
    ariaLabel: 'URL list item',
    direction: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
};

export default Stack;
