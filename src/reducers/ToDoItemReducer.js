export const todoitem = (state = {
    title: '',
    description: ''
}, action) => {
    switch (action.type) {
        case 'CREATE_TODO_TITLE':
            return {
                ...state,
                title: action.value
            }
        case 'CREATE_TODO_DESCRIPTION':
            return {
                ...state,
                description: action.value
            }
        case 'ADD_TODO':
            return {
                title: '',
                description: ''
            }
        default:
            return state;
    }
}