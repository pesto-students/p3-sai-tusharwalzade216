import PropTypes from 'prop-types';

import { idUtil } from "../../../utils";
import { Button, Text } from "../../atoms";
import { InputWithLabelAndHint } from "../../molecules";
import { INPUT_TYPES } from '../../../constants';
import { ListItemContainer } from "./listItem.styled";

const ListItem = (props) => {
    const { id, onButtonClick, title, ...inputProps } = props;
    return (
        <ListItemContainer checked={props?.checked}>
            <InputWithLabelAndHint
                {...inputProps}
                id={id}
            />

            <Text ariaLabel={title}>
                {title}
            </Text>

            <Button
                id={`btn-${id}`}
                onClick={() => onButtonClick(id)}
                type="button"
            >
                x
            </Button>
        </ListItemContainer>
    );
}

ListItem.propTypes = {
    // for InputWithLabelAndHint component
    ariaLabel: PropTypes.string,
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
    value: PropTypes.string,

    // for Text component
    title: PropTypes.string.isRequired,

    // for Button component
    onButtonClick: PropTypes.func,
};

ListItem.defaultProps = {
    // for Input component
    ariaLabel: "Input",
    autoFocus: false,
    checked: false,
    disabled: false,
    id: `input-${idUtil.getUniqueIdString()}`,
    maxLength: 524288,
    minLength: 0,
    onChange: () => { },
    placeholder: "Enter your input",
    required: false,
    type: INPUT_TYPES.CHECKBOX,
    value: "",

    // for Text component
    title: "",

    // for Button component
    onButtonClick: () => { },
};

export default ListItem;
