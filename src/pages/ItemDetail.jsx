import React, { useEffect, useState } from "react";
import Figure from 'react-bootstrap/Figure';
import { NavBar } from "../components/NavBar"
import Counter from "../components/Counter"
import { NavLink, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useCartContext } from '../context/ShoppingCardContext'

function ItemDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isCounter, setIsCounter] = useState(true)

    const { addProduct, cartList } = useCartContext()


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        };
        getProduct();
    }, [id]);

    const onAdd = (count) => {
        console.log("Click")
        console.log(count) 
        addProduct({ count })
        setIsCounter(false)
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

    const ShowProduct = () => {
        return (
            <Figure style={{
                width: "50%",
                border: "1px solid",
                margin: "100px 0 0 25%",
                padding: "11px"
            }}>
                <NavLink to={"/"} className="btn m-2"> {`< Back`}  </NavLink>
                <h4>{product.title}</h4>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={product.image}
                />
                <Figure.Caption>
                    <p>description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <Counter initial={1} stock={20} onAdd={onAdd} />
                </Figure.Caption>
            </Figure>
        )
    }

    console.log(cartList)

    return (
        <>
            <NavBar />
            {loading ? <Loading /> : <ShowProduct />}
        </>

    );
}


export default ItemDetail;