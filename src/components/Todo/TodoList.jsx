import { ListGroup, Button } from 'react-bootstrap'

const TodosList = (props) => {
  // console.log(props)

  const todosList =
  props.todos && props.todos.length > 0 ? (
    props.todos.map((todo, i) => {
        return (
          <ListGroup key={i} variant='flush'>
            <ListGroup.Item className='d-flex justify-content-between align-items-start border'>
              <div className='ms-2 me-auto'>
                <p className='fw-bold'>Title: {todo.title}</p>
                <p>Content: {todo.content}</p>
              </div>
              <Button
                type='input'
                className='btn-sm mt-3'
                variant='outline-danger'
                onClick={() => props.deleteTodo(i)}>
                X
              </Button>
            </ListGroup.Item>
          </ListGroup>
        )
      })
    ) : (
      <p className='h5 mx-5 text-muted'>no items on the list..</p>
    )

  return (
    <div className='text-left mt-3'>
      <h5 className='mx-5'>Todos List</h5>
      {todosList}
    </div>
  )
}

export default TodosList;
