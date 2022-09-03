const handleAddTodo = (state, action) => {
    const todoIndex = state.todoList?.findIndex(todo =>
        todo?.title === action.payload?.title);
    if (todoIndex !== -1) {
        return { ...state, errorMsg: "Duplicate todo can't be added" };
    } else {
        const lastId = state.todoList.length;
        const value = action.payload?.title?.trim();
        if (value) {
            const todo = {
                id: lastId,
                checked: false,
                onButtonClick: action.payload?.onButtonClick,
                onChange: action.payload?.onChange,
                title: value,
                type: "checkbox"
            };
            return {
                errorMsg: '',
                newTodo: '',
                todoList: [...state?.todoList, todo],
                todoListKey: state.todoListKey + 1,
            };
        }
    }
    return state;
};

const handleDeleteTodo = (state, action) => {
    const todoIndex = state.todoList?.findIndex(todo =>
        String(todo?.id) === String(action.payload?.id));
    const todos = state.todoList;
    if (todoIndex !== -1)
        todos.splice(todoIndex, 1);
    return {
        ...state,
        todoList: todos,
        todoListKey: state.todoListKey + 1
    };
};

const handleToggleTodo = (state, action) => {
    const todoIndex = state.todoList?.findIndex(todo =>
        String(todo?.id) === String(action.payload?.id));
    state.todoList[todoIndex].checked = action.payload?.checked;
    return { ...state, todoListKey: state.todoListKey + 1 };
};

export {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
};
