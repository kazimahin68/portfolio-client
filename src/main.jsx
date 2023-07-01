import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import ThemeProvider from './ThemeContext'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
