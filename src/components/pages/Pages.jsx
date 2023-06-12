import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { Home } from '../home/Home'
import { Details } from "../home/details/Details"
import { products } from '../assets/data/data'
export const Pages = () => {
  const [data, setData] = useState(products);
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/details/:id' element={<Details data={data}/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}