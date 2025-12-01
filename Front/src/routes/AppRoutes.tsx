import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ResponsePage from '../pages/Response'

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/response' element={<ResponsePage/>} />
      </Routes>
    </BrowserRouter>
  )
}