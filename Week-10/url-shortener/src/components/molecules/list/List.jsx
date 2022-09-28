import PropTypes from 'prop-types';
import MuiList from '@mui/material/List';

const List = ({
    children
}) => (
    <MuiList>{children}</MuiList>
);

List.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
};

List.defaultProps = {
    children: [],
}

export default List;
