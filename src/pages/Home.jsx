import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "../components/Card"
import Container from 'react-bootstrap/Container'
import { Link, useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { NavItem } from "react-bootstrap";

function Home() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  let componentMounted = true;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const products = await fetch(`https://dummyjson.com/products`);
      const listProduct = await products.json();
      console.log("listProduct")
      console.log(listProduct)
      setProducts(listProduct.products);
      setLoading(false);
      //const response2 = await fetch(
      //  `https://fakestoreapi.com/products/category/${data.category}`
      //);
      //const data2 = await response2.json();
      //setSimilarProducts(data2);
    };
    getProduct();
  }, [id]);

  const filterProduct = (cat) => {
    const updatedList = products.filter((item) => item.category === cat);
    setFilter(updatedList);
  }


  const Loading = () => {
    return (
      <>
        <div className="row justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <Row>
        {filter.length != 0 ? filter.map((item) => {
          return (
            <Col xs={6} md={4}>
              <Card item={item} />
            </Col>
          )
        }) : products.map((item) => {
          return (
            <Col xs={6} md={4}>
              <Card
                key={item.id}
                item={item}
              />
            </Col>
          )
        })}
      </Row>
    )
  }

  return (
    <>
      <NavBar />
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(products)}>All</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("smartphones")}>smartphones</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("laptops")}>
          laptops
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("skincare")}>skincare</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("fragrances")}>fragrances</button>
      </div>
      <Container>
        <>
          {loading ? <Loading /> : <ShowProducts />}
        </>
      </Container>
    </>
  )
}
export default Home