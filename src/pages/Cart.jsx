import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { NavBar } from "../components/NavBar"
import { Link } from "react-router-dom";
import { useCartContext } from "../context/ShoppingCardContext";

const Cart = () => {
  const { cartList, removeProductbyId } = useCartContext()

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCart = ({ product }) => {
    return (
      <Card style={{ width: '100%', border: '1px solid', padding: '23px'}}>
        <Card.Img variant="top" src={product.thumbnail} style={{width: "auto", height: "100px"}}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text> {product.description} </Card.Text>
          <Card.Text> Precio: $ {product.price} </Card.Text>
          <Card.Text> Total: {product.count} </Card.Text>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => removeProductbyId(product.id)}>Eliminar</button>
        </Card.Body>
      </Card>
    );

  }

  return (
    <>
      <NavBar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {cartList.length > 0 ? cartList.map((item) => (<ShowCart product={item} />)) : <EmptyCart />}
      </div>
    </>
  );
};

export default Cart;
