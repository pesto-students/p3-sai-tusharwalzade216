import React from "react";
import { Title, TodoContainer } from "../../../../common/Wrappers";

class Todo extends React.Component {
    render() {
        const { todo, completeTodo, deleteTodo } = this.props;

        return (
            <TodoContainer
                completed={todo.completed}
                onDoubleClick={() => completeTodo(!todo.completed, todo.id)}>

                <label htmlFor="todo-state">
                    <input
                        id="todo-state"
                        type="checkbox"
                        value={todo.completed}
                        checked={todo.completed}
                        onChange={e => completeTodo(e?.target?.checked, todo.id)}
                    />
                </label>

                <Title>{todo.title}</Title>

                <button
                    id="todo-action-delete"
                    type="button"
                    onClick={() => deleteTodo(todo.id)}>
                    x
                </button>
            </TodoContainer>
        );
    }
}

export default Todo;
