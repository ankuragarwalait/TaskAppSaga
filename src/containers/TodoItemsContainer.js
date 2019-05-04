import {connect} from 'react-redux';
import {TodoList} from '../components/ToDoList';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        taskStatusChange : (id,value) => dispatch(actions.toggleTodo(id,value))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.todos.filter(item => item.status===ownProps.status),
        currentStatus: ownProps.status
    }
}

const TodoItemsContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default TodoItemsContainer;