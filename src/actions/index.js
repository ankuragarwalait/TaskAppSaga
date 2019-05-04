export const addTodo = (todoData) => {
    return {
        type: 'ADD_TODO',
        todoData
    }
}

export const addTodoDb = (title,description) => {
    return {
        type: 'ADD_TODO_DB',
        title,
        description
    }
}

export const toggleTodo = (id, status) => {
    return {
        type: 'TOGGLE_TODO',
        id: id,
        status: status
    }
}

export const populateTodos = (todos) => {
    return {
        type: 'POPULATE_TODOS',
        todos: todos
    }
}

export const createToDoTitle = (text) => {
    return {
        type: 'CREATE_TODO_TITLE',
        value: text
    }
}

export const createToDoDescription = (text) => {
    return {
        type: 'CREATE_TODO_DESCRIPTION',
        value: text
    }
}

export const toggleAddTodo = () => {
    return {
        type: 'TOGGLE_ADD_TODO'
    }
}

export const searchTodos = (searchString) => {
    return {
        type: 'SEARCH_TODOS',
        searchString
    }
}