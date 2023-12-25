import { Card, Button, Placeholder } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Cards({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text> {item.description} </Card.Text>
        <Card.Text> $ {item.price} </Card.Text>
        <NavLink to={`/detail/${item.id}`} className="btn btn-outline-dark m-2"> View </NavLink>
      </Card.Body>
    </Card>
  );
}

export default Cards;