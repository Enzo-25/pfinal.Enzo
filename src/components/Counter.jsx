import { useState } from "react"

const ItemCounter = ({ initial = 1, stock, onAdd }) => {


    const [counter, setCounter] = useState(initial)

    const handleSumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleRestar = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
        <div>
            <button className="btn btn-outline-dark btn-sm m-2" onClick={handleSumar}>+</button>
            <label>{counter}</label>
            <button className="btn btn-outline-dark btn-sm m-2" onClick={handleRestar}>-</button>
            <button className="btn btn-outline-dark btn-sm m-2" onClick={handleOnAdd}>Agregar</button>

        </div>
    )
}

export default ItemCounter
