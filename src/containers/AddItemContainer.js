import {connect} from 'react-redux';
import {AddTodo} from '../components/AddTodo';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        createToDoTitle: (e)=> dispatch(actions.createToDoTitle(e.target.value)),
        createToDoDescription: (e)=> dispatch(actions.createToDoDescription(e.target.value)),
        addTodo: (title, description) => dispatch(actions.addTodoDb(title, description))
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.todoitem.title,
        description: state.todoitem.description
    }
}

const AddItemContainer = connect(mapStateToProps,mapDispatchToProps)(AddTodo);
export default AddItemContainer;