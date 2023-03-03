import React, {useState} from 'react';
import { Todo } from './todo.model';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App(){
  const [todos,setTodos] = useState<Todo[]>([]);
  
  const todoAddHandler = (text:string) => {
    setTodos(prevTodos => [...prevTodos,{id: Math.random().toString() ,text: text}]);
  }
  
  const TodoDeleteHandler = (todoId:string) => {  
    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={TodoDeleteHandler}/>
    </div>
  );
}

export default App;
