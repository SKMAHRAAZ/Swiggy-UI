import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './Scrap/Pages/LandingPage'
import ProductSection from './Scrap/Components/ProductSection'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products/:firmId/:firmname' element={<ProductSection/>}/>
      </Routes>
    </div>
  )
}

export default App