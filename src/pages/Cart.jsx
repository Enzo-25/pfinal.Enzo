import React from "react";
import { NavBar } from "../components/NavBar"
import { Link } from "react-router-dom";

const Cart = () => {

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

  return (
    <>
      <NavBar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        <EmptyCart />
      </div>
    </>
  );
};
//{state.length > 0 ? <ShowCart /> : <EmptyCart />}
export default Cart;
