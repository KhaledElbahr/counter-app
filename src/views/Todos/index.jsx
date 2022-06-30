// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, deleteTodoAction } from './../../redux';
import TodoForm from './../../components/Todo/TodoForm';
import TodoList from './../../components/Todo/TodoList';


const Todos = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     title: 'React',
  //     content: 'props - useState - useEffect - Routes'
  //   },
  //   {
  //     title: 'Redux (State Management)',
  //     content: 'reducer - action - store - useSelector - dispatch'
  //   }
  // ]);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const addTodo = (todo) => {
    // setTodos([...todos, todo]);
    dispatch(addTodoAction(todo));
  }

  const deleteTodo = (todoIndex) => {
    dispatch(deleteTodoAction(todoIndex))
  }    

  return (
    <div className='container py-2'>
      <h2>TODO</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todos;
