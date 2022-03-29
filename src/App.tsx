import React from 'react';
import NewTodo from './components/NewTodo'
import TodosContextProvider from './store/todo-context'

import Todos from './components/Todos';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
