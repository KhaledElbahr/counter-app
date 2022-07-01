import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../redux/features/todoSlice';
import TodoForm from './../../components/Todo/TodoForm';
import TodoList from './../../components/Todo/TodoList';

const Todos = () => {
  const todos = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();

  const onAddTodo = (todo) => {
    dispatch(addTodo(todo));
  }

  const onDeleteTodo = (todoIndex) => {
    dispatch(deleteTodo(todoIndex))
  }

  return (
    <div className='container py-2'>
      <h2>TODO</h2>
      <TodoForm addTodo={onAddTodo} />
      <TodoList todos={todos} deleteTodo={onDeleteTodo} />
    </div>
  )
}

export default Todos;
