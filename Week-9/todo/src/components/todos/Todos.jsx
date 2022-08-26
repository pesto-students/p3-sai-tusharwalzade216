import React from "react";
import { TodosContainer } from "../../common/Wrappers";
import Error from "../error/Error";
import Todo from "./components/todo";
import StorageService from "../../common/storageService";
import AddTodo from "./components/addTodo";

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: '',
            newTodo: '',
            todos: [],
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.setTodo = this.setTodo.bind(this);
    }

    componentDidMount() {
        this.setState({ todos: StorageService.fetchTodos() ?? [] });
    }

    componentDidUpdate() {
        StorageService.storeTodos(this.state.todos);
    }

    handleAddTodo(e) {
        e.preventDefault();
        const todoIndex = this.state.todos?.findIndex(todo => todo?.title === this.state.newTodo);
        if (todoIndex !== -1) {
            this.setState({ errorMsg: "Duplicate todo can't be added" });
        } else {
            let newTodoList = this.state.todos, newTodoListLen = this.state.todos.length;
            newTodoList.push({
                id: newTodoListLen,
                completed: false,
                title: this.state.newTodo,
            });
            this.setState({
                errorMsg: '',
                newTodo: '',
                todos: newTodoList
            });
        }
    }

    handleCompleteTodo(value, id) {
        let updatedTodoList = this.state.todos;
        updatedTodoList[id]['completed'] = value;
        this.setState({
            todos: updatedTodoList
        });
    }

    handleDeleteTodo(id) {
        let updatedTodoList = this.state.todos
            .filter(todo => todo?.id !== id)
            .map((todo, index) => {
                todo.id = index;
                return todo;
            });
        this.setState({
            todos: updatedTodoList
        });
    }

    setTodo(e) {
        this.setState({ newTodo: e });
        if (!e) this.setState({ errorMsg: '' });
    }

    render() {
        const { errorMsg, newTodo, todos } = this.state;

        return (
            <>
                <AddTodo
                    errorMsg={errorMsg}
                    newTodo={newTodo}
                    setTodo={this.setTodo}
                    handleAddTodo={this.handleAddTodo} />

                <TodosContainer>
                    {todos.length ? todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            completeTodo={this.handleCompleteTodo}
                            deleteTodo={this.handleDeleteTodo} />
                    )) : <Error />}
                </TodosContainer>
            </>
        );
    }
}

export default Todos;
