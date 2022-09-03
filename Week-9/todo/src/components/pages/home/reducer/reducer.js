import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from "./helpers";

const INITIAL_STATE = {
    errorMsg: '',
    newTodo: '',
    todoList: [],
    todoListKey: 0,
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return handleAddTodo(prevState, action);

        case "DELETE_TODO":
            return handleDeleteTodo(prevState, action);

        case "SET_INPUT":
            return { ...prevState, errorMsg: '', newTodo: action.payload?.value };

        case "SET_TODO_LIST":
            return { ...prevState, todoList: action.payload?.todoList }

        case "TOGGLE_TODO":
            return handleToggleTodo(prevState, action);

        default:
            return prevState;
    }
}

export { INITIAL_STATE, reducer };
