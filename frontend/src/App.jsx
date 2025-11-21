import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import EditReport from './components/EditReport/EditReport'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Form />} />
    <Route path='/Dashboard' element={<Dashboard />} />
    <Route path='editReport/:id' element={<EditReport />} />
   </Routes>
  )
}

export default App
