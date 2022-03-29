import React, {useRef, useContext} from 'react'
import { TodosContext} from '../store/todo-context'

import classes from './NewTodo.module.css'

const NewTodo: React.FC = (props) => {
  const todoCtx = useContext(TodosContext)
    const todo = useRef<HTMLInputElement>(null)

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todo.current!.value;
        
        if(enteredText.trim().length === 0){
          // throw an error
          return;
        }

        todoCtx.addTodo(enteredText);
    }
  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
        <label htmlFor="text">Todo Text: </label>
        <input type='text' id="text" ref={todo}/>
        <button>Add todo</button>
    </form>
  )
}

export default NewTodo