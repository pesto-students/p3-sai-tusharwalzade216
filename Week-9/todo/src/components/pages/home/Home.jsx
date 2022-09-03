import { useCallback, useEffect, useReducer } from "react";

import { storageUtil } from "../../../utils";
import { AddTodoForm } from "../../templates";
import { List as TodoList } from "../../organisms";
import { INITIAL_STATE, reducer } from "./reducer";
import { EmptyListPlaceholder } from "../../molecules";

const Home = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleOnChange = (e) => dispatch({
        payload: { value: e?.target?.value },
        type: "SET_INPUT",
    });

    const handleOnDeleteItem = (id) => dispatch({
        payload: { id: id },
        type: "DELETE_TODO"
    });

    const handleOnToggleItem = (e, id) => dispatch({
        payload: {
            id: id,
            checked: e?.target?.checked,
        },
        type: "TOGGLE_TODO"
    });

    const attachHandlersToListItems = useCallback((todoList) => todoList?.map(
        todo => Object.assign({}, todo, {
            onButtonClick: handleOnDeleteItem,
            onChange: handleOnToggleItem
        })), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            payload: {
                onButtonClick: handleOnDeleteItem,
                onChange: handleOnToggleItem,
                title: state?.newTodo,
            },
            type: "ADD_TODO",
        });
    };

    const init = useCallback(() => {
        let todoList = storageUtil.fetchFromStorage("todoList");
        if (todoList?.length) {
            todoList = attachHandlersToListItems(todoList);

            dispatch({
                payload: {
                    todoList
                },
                type: "SET_TODO_LIST"
            });
        }
    }, [attachHandlersToListItems]);

    useEffect(() => {
        init();
    }, [init]);

    useEffect(() => {
        if (state?.todoListKey) storageUtil.storeIntoStorage("todoList", state?.todoList);
    }, [state?.todoList, state?.todoListKey]);

    return (
        <>
            <AddTodoForm
                ariaLabel="Add new todo"
                autoFocus={true}
                errorMsg={state?.errorMsg}
                id="todo-input"
                label="Add new todo"
                maxLength={100}
                minLength={10}
                onChange={handleOnChange}
                onSubmit={handleSubmit}
                placeholder="Type in to add a new todo..."
                required={true}
                type="text"
                value={state?.newTodo}
            />

            {!!state?.todoList?.length ?
                <TodoList items={state?.todoList} key={state?.todoListKey} /> :
                <EmptyListPlaceholder>
                    Sorry, there are no todos available, please try to add some.
                </EmptyListPlaceholder>
            }
        </>
    );
};

export default Home;
