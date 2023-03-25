import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './page/admin/DashBoard'
import ProductsManagement from './page/admin/ProductsManagement'
import HomePage from './page/HomePage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/products' element={< ProductsManagement/>}/>
      </Routes>
    </div>
  )
}

export default App
