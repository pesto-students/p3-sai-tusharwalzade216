import { useCallback, useEffect, useReducer } from "react";

import { storageUtil } from "../../utils";
import { INITIAL_STATE, reducer } from "./reducer";
import { AddTodoForm } from "../../components/templates";
import { List as TodoList } from "../../components/organisms";
import { EmptyListPlaceholder } from "../../components/molecules";

const Home = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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

    const handleSubmit = (e, todo) => {
        e.preventDefault();
        dispatch({
            payload: {
                onButtonClick: handleOnDeleteItem,
                onChange: handleOnToggleItem,
                title: todo,
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
                onSubmit={handleSubmit}
                placeholder="Type in to add a new todo..."
                required={true}
                type="text"
            />

            {!!state?.todoList?.length ?
                <TodoList items={state?.todoList} /> :
                <EmptyListPlaceholder>
                    Sorry, there are no todos available, please try to add some.
                </EmptyListPlaceholder>
            }
        </>
    );
};

export default Home;
