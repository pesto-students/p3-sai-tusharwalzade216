import PropTypes from 'prop-types';

import { idUtil } from '../../../utils';
import { INPUT_TYPES } from '../../../constants';
import { Input, InputHint, Label } from "../../atoms";
import { StyledInputWithLabelAndHintContainer } from "./inputWithLabelAndHint.styled";

const InputWithLabelAndHint = (props) => {
    const { errorMsg, id, label, required, ...inputProps } = props;
    return (
        <StyledInputWithLabelAndHintContainer>
            {!!label && <Label
                labelFor={`${id}`}
                required={required}>
                {label}
            </Label>}
            <Input
                {...inputProps}
                id={`${id}`}
                required={required}
            />
            {!!errorMsg && <InputHint aria-label={errorMsg}>{errorMsg}</InputHint>}
        </StyledInputWithLabelAndHintContainer>
    );
}

InputWithLabelAndHint.propTypes = {
    // for Label component
    label: PropTypes.string,

    // for Input component
    ariaLabel: PropTypes.string,
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
    value: PropTypes.string,

    // common for Label and Input components
    required: PropTypes.bool,

    // for InputHint component
    errorMsg: PropTypes.string,
};

InputWithLabelAndHint.defaultProps = {
    // for Label component
    label: "",

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
    type: "text",
    value: "",

    // common for Label and Input components
    required: false,

    // for InputHint component
    errorMsg: ""
};

export default InputWithLabelAndHint;
