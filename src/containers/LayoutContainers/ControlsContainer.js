import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import AddItemContainer from '../AddItemContainer';
import { NewTaskButton } from '../../components/NewTaskButton';
import { SearchTodo } from '../../components/SearchTodo';

let ControlsContainer = ({
    showAddTodo,
    toggleAddTodo,
    searchStringChange
}) => (
    <div className="row">
        {showAddTodo ? 
            <AddItemContainer />  
            : 
            <NewTaskButton toggleAddTodo={toggleAddTodo} btnTitle={'New Task'}/>
        }
        <SearchTodo searchStringChange={searchStringChange}/>
    </div>
)
const mapStateToProps = (state) => {
    return {
        showAddTodo: state.showAddTodo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAddTodo: () => dispatch(actions.toggleAddTodo()),
        searchStringChange: (e) => {
            dispatch(actions.searchTodos(e.target.value))
        }
    }
}

ControlsContainer = connect(mapStateToProps,mapDispatchToProps)(ControlsContainer);
export default ControlsContainer;