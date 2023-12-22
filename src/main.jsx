import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navber from './Pages/Navbar.jsx'
import { RouterProvider } from 'react-router-dom'
import Routers from './router/Routers.jsx'
import AuthProvider from './router/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={Routers}>
        <Navber></Navber>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
