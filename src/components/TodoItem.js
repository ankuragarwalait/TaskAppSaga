import React from 'react';
const status = ['Not Started', 'In Progress', 'Completed']
export const TodoItem = ({
    title,
    description,
    id,
    currentStatus,
    duration,
    taskStatusChange
}) => (
    <div className="card mb-2">
        <div className="card-header d-flex justify-content-between">
            <div>{title}</div>
            <select defaultValue={currentStatus} onChange={(e) => taskStatusChange(id, e.target.value)}>
                {status.map(statusItem => {
                    return(
                        <option key={statusItem} value={statusItem}>{statusItem}</option>
                    )
                })}
            </select>
            </div>
        <div className="card-body">{description}</div>
        <div className="card-footer text-right">Working Time: {duration} sec</div>
    </div>
)