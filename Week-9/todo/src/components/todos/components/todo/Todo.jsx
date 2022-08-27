import React from "react";
import PropTypes from "prop-types";

import { Title, TodoContainer } from "../../../../common/Wrappers";

class Todo extends React.Component {
    render() {
        const { completeTodo, deleteTodo, todo } = this.props;

        return (
            <TodoContainer
                aria-label="Todo Item"
                completed={todo.completed}
                onDoubleClick={() => completeTodo(!todo.completed, todo.id)}>

                <label htmlFor={`todo-state-${todo.id}`}>
                    <input
                        aria-label={`Complete Todo - ${todo.title}`}
                        checked={todo.completed}
                        id={`todo-state-${todo.id}`}
                        onChange={e => completeTodo(e?.target?.checked, todo.id)}
                        type="checkbox"
                        value={todo.completed}
                    />
                </label>

                <Title aria-label={todo.title}>{todo.title}</Title>

                <button
                    aria-label={`Delete Todo - ${todo.title}`}
                    id={`todo-action-delete-${todo.id}`}
                    onClick={() => deleteTodo(todo.id)}
                    type="button">
                    x
                </button>
            </TodoContainer>
        );
    }
}

Todo.propTypes = {
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};

export default Todo;
