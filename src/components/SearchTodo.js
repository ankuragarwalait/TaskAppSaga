import React from 'react';

export const SearchTodo = ({
    searchStringChange
}) => (
        <div className="col-md-12 form-group mt-4">
            <input className="form-control mt-2" type="text" placeholder="Search String" onChange={searchStringChange}/>
        </div>
    )





