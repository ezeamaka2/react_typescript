import React from 'react';

import classes from './TodoList.module.css'

const TodoList: React.FC<{todoText: string; onRemoveTodo: () => void}> = (props) => {
    
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.todoText}</li>
    )
}

export default TodoList