import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext([])

export const useCartContext = () => useContext(ShoppingCartContext)

export const ShoppingCartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const isCart = (pid) => cartList.findIndex(producto => producto.id === pid)

    const addProduct = (producto) => {
        const indexProduct = isCart(producto.id)
        if (indexProduct != -1) {
            cartList[indexProduct].cantidad += producto.cantidad
            return setCartList([...cartList])
        }
        setCartList([
            ...cartList,
            producto
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const getTotalQuantity = () => {
        const totalQuantity = cartList.reduce(
            (total, product) => total + product.count,
            0
        );
        return totalQuantity;
    };

    const removeProductbyId = (id) => {
        const removeProduct = cartList.filter((product) => product.id !== id);
        setCartList(removeProduct);
    };

    return (
        <ShoppingCartContext.Provider value={{
            cartList,
            addProduct,
            vaciarCarrito,
            getTotalQuantity,
            removeProductbyId
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}