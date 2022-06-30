import { Navbar as NavBoot, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavBoot bg='light' expand='lg'>
      <Container>
        <NavBoot.Brand>Khaled Elbahr</NavBoot.Brand>
        <NavBoot.Toggle aria-controls='basic-navbar-nav' />
        <NavBoot.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
            <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
          </Nav>
        </NavBoot.Collapse>
      </Container>
    </NavBoot>
  )
}

export default Navbar
