import { AddTodoContainer, ErrorWrapper } from "../../../../common";

const AddTodo = ({ newTodo, setTodo, handleAddTodo, errorMsg = '' }) => {
    return (
        <AddTodoContainer onSubmit={handleAddTodo} hasError={!!errorMsg}>
            <div>
                <input autoFocus type="text" value={newTodo}
                    onChange={(e) => setTodo(e?.target?.value)}
                    placeholder="Type in to add a todo..."
                    required
                    minLength={10}
                    maxLength={100} />
                {!!errorMsg && <ErrorWrapper>{errorMsg}</ErrorWrapper>}
            </div>
            <button type="submit">Add</button>
        </AddTodoContainer>
    );
};

export default AddTodo;
