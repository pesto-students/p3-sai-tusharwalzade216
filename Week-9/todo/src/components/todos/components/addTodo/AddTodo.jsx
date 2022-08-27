import PropTypes from "prop-types";

import { AddTodoContainer, ErrorWrapper } from "../../../../common";

const AddTodo = ({ errorMsg, handleAddTodo, newTodo, setTodo }) => {
    return (
        <AddTodoContainer aria-label="Add a new todo" hasError={!!errorMsg} onSubmit={handleAddTodo}>
            <div>
                <input
                    aria-label="Todo Input"
                    autoFocus
                    minLength={10}
                    maxLength={100}
                    onChange={(e) => setTodo(e?.target?.value)}
                    placeholder="Type in to add a todo..."
                    required
                    type="text"
                    value={newTodo} />
                {!!errorMsg && <ErrorWrapper aria-label={errorMsg}>{errorMsg}</ErrorWrapper>}
            </div>
            <button type="submit">Add</button>
        </AddTodoContainer>
    );
};

AddTodo.defaultProps = {
    errorMsg: ""
};

AddTodo.propTypes = {
    errorMsg: PropTypes.string,
    handleAddTodo: PropTypes.func.isRequired,
    newTodo: PropTypes.string.isRequired,
    setTodo: PropTypes.func.isRequired,
};

export default AddTodo;
