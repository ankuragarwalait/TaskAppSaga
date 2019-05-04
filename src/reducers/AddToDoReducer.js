export const showAddTodo = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_ADD_TODO': 
        case 'ADD_TODO':
           return !state
        default: 
            return state;
    }
}