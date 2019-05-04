import React from 'react';
import TodoItemsContainer from '../TodoItemsContainer';

export const SwimLanes = () => (
    <div className="row pt-3">
        <div className="col-md-4">
            <h5>Not Started</h5>
            <TodoItemsContainer status="Not Started"/>
        </div>
        <div className="col-md-4">
            <h5>In Progress</h5>
            <TodoItemsContainer status="In Progress"/>
        </div>
        <div className="col-md-4">
            <h5>Completed</h5>
            <TodoItemsContainer status="Completed"/>
        </div>
    </div>
)