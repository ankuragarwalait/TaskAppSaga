import React from 'react';

export const NewTaskButton = ({
    toggleAddTodo,
    btnTitle
}) => (
    <div className="col-md-12">
        <button className="mt-3 btn btn-primary" onClick={toggleAddTodo}>{btnTitle}</button>
    </div>
)