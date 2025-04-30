import React from 'react'
import AppRoutes from './components/app/AppRoutes'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App