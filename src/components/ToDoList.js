import React from 'react';
import { TodoItem } from './TodoItem';


export const TodoList = ({
    items,
    currentStatus,
    taskStatusChange
}) => {
    return(
        <div>
        {items.map(item => {
            return(
                <TodoItem key={item.id} {...item} currentStatus={currentStatus} taskStatusChange={taskStatusChange}/>
            )
        })}
        </div>
    )
}