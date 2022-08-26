const storageService = sessionStorage;

const fetchTodos = () => JSON.parse(storageService.getItem("todos"));

const storeTodos = (todos) => storageService.setItem("todos", JSON.stringify(todos));

export default {
    fetchTodos,
    storeTodos
};
