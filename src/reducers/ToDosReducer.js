export const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO': 
            return [
                ...state, action.todoData
            ]
        case 'TOGGLE_TODO': 
            return state.map(todo => {
                todo.status = todo.id === action.id ? action.status : todo.status;
                return todo;
            })
        case 'POPULATE_TODOS': 
            return [
                ...action.todos
            ]
        default: 
            return state;
    }
}