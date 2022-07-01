import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = (props) => {
    // console.log(props);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmission = (e) => {
        e.preventDefault();
        props.addTodo({title, content});
        setTitle('');
        setContent('');
    }

    return (
        <form className="w-25 mx-auto" onSubmit={handleSubmission}>
            {/* Title Input */}
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="What do want to do?" />
            </Form.Group>
            {/* Content Inpunt */}
            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control 
                type="text" 
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Leave a description..." />
            </Form.Group>
            {/* Submit Button */}
            <div className="text-center">
                <Button type="submit" className="btn-lg mt-3 px-4" variant="dark">Add TODO</Button>
            </div>
        </form>
    )
}

export default TodoForm;