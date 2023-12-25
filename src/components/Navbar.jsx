import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../context/ShoppingCardContext';


export const NavBar = () => {

  const { getTotalQuantity } = useCartContext()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="btn btn-outline-dark m-2"> Home </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2"> <FontAwesomeIcon icon={faCartShopping} /> Cart ({getTotalQuantity() ? getTotalQuantity() : 0 }) </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};