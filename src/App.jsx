
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ItemDetail from "./pages/ItemDetail"
import { ShoppingCartContextProvider } from './context/ShoppingCardContext'

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartContextProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/detail/:id" element={<ItemDetail />} />
          </Routes>
        </div>
      </ShoppingCartContextProvider>
    </BrowserRouter>
  )
}

export default App
