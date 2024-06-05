import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Auth from './pages/Auth'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Category category='mens-clothing' />} />
          <Route path='/women' element={<Category category='womens-clothing' />} />
          <Route path='/electronics' element={<Category category='electronics' />} />
          <Route path='/jewelery' element={<Category category='jewelery' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/auth' element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App