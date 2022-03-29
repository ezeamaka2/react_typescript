import React, {useState} from 'react'
import Todo from '../models/todo'

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])
  
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text)
    setTodos((prev) => {
      return prev.concat(newTodo)
    })
  };

  const removeTodoHandler = (todoId: string) =>{
    setTodos(prev => {
      return prev.filter(todo => todo.id !== todoId)
    })
  }

  const contextValue:TodoContextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
  }
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider