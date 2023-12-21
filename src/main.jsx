import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navber from './Pages/Navbar.jsx'
import { RouterProvider } from 'react-router-dom'
import Routers from './router/Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers}>
      <Navber></Navber>
    </RouterProvider>
  </React.StrictMode>,
)
