import React from 'react';

export const AddTodo = ({
    createToDoTitle,
    createToDoDescription,
    addTodo,
    title,
    description
}) => (
        <div className="col-md-12 form-group mt-4">
            <input className="form-control mt-2" type="text" placeholder="Title" onChange={createToDoTitle} value={title}/>
            <input className="form-control mt-2" type="text" placeholder="description" onChange={createToDoDescription} value={description}/>
            <button className="btn btn-success mt-2" type="button" onClick={() => addTodo(title,description)}>Save</button>
        </div>
    )





