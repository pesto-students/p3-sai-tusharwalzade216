import React from "react";
import PropTypes from "prop-types";

import { Title, TodoContainer } from "../../../../common/Wrappers";

class Todo extends React.Component {
    render() {
        const { completeTodo, deleteTodo, todo } = this.props;

        return (
            <TodoContainer
                completed={todo.completed}
                onDoubleClick={() => completeTodo(!todo.completed, todo.id)}>

                <label htmlFor="todo-state">
                    <input
                        checked={todo.completed}
                        id="todo-state"
                        onChange={e => completeTodo(e?.target?.checked, todo.id)}
                        type="checkbox"
                        value={todo.completed}
                    />
                </label>

                <Title>{todo.title}</Title>

                <button
                    id="todo-action-delete"
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
