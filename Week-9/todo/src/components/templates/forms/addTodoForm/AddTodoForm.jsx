import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../organisms';
import { idUtil } from '../../../../utils';
import { INPUT_TYPES } from '../../../../constants';
import { InputWithLabelAndHint } from '../../../molecules';

const AddTodoForm = (props) => {
    const { onSubmit, ...inputProps } = props;
    const [newTodo, setNewTodo] = useState('');

    return (
        <Form
            ariaLabel="Add Todo form"
            hasError={!!props?.errorMsg}
            onSubmit={(e) => onSubmit(e, newTodo)}
            submitButtonProps={{
                disabled: false,
                show: true
            }}
        >
            <InputWithLabelAndHint
                {...inputProps}
                onChange={(e) => setNewTodo(e?.target?.value)}
                value={newTodo} />
        </Form>
    );
}

AddTodoForm.propTypes = {
    // for Form component
    onSubmit: PropTypes.func,

    // for InputWithLabelAndHint component
    ariaLabel: PropTypes.string,
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    errorMsg: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(INPUT_TYPES)).isRequired,
};

AddTodoForm.defaultProps = {
    // for Form component
    onSubmit: () => { },

    // for InputWithLabelAndHint component
    ariaLabel: "Input",
    autoFocus: false,
    checked: false,
    disabled: false,
    errorMsg: "",
    id: `input-${idUtil.getUniqueIdString()}`,
    label: "",
    maxLength: 524288,
    minLength: 0,
    placeholder: "Enter your input",
    required: false,
};

export default AddTodoForm;
