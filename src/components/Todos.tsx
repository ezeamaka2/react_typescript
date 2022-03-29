import React, {useContext} from "react";
import TodoList from './TodoList'
import { TodosContext} from '../store/todo-context'

import classes from './Todos.module.css'

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  const todoValue = todosCtx.items.map(item => <TodoList key={item.id} onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)} todoText={item.text} />);
  
  return (
    <ul className={classes.todos}>
      {todoValue}
    </ul>
  )
}

export default Todos