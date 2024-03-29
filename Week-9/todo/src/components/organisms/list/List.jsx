import PropTypes from 'prop-types';

import { ListItem } from "../../molecules";
import { ListContainer } from "./list.styled";

const List = ({ items }) => (
    <ListContainer>
        {items?.map((item, index) => (
            <ListItem key={item?.id ?? index} {...item} />
        ))}
    </ListContainer>
);

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(ListItem.propTypes)
    ),
};

List.defaultProps = {
    items: []
};

export default List;
