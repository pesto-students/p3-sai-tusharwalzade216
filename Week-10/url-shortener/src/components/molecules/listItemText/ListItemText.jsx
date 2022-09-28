import PropTypes from 'prop-types';
import MuiListItemText from '@mui/material/ListItemText';

const ListItemText = ({ children }) => (
    <MuiListItemText>{children}</MuiListItemText>
);

ListItemText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListItemText;
