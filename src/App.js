import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product/:id' element={<SingleProduct />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
      <Sidebar />
    </BrowserRouter>
  )
}

export default App
