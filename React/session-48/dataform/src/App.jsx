import React from 'react'
import './App.css'
import Navbar from './components/Navbar'


import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'

import Home from './pages/Home'
import Service from './pages/Service'
import UserDefault from './pages/UserDefault'
import Users,{userLoader} from './pages/Users'
import Product from './pages/Product'

function Layout()
{
    return(
      <>
      <Navbar/>
      <Outlet/>
      </>
    )
}

const router=createBrowserRouter([
  {
      path:"/",
      element:<Layout/>,

      children:[
        {
          index:true,
          element:<Home/>

        },
        {
        path:"/product",
        element:<Product/>
       },
       {
        path:"/service",
        element:<Service/>
      },

        {
          path:"/users",
          element:<UserDefault/>
        },
        {
          path:"/users/:id",
          element:<Users/>,
          loader:userLoader
        }
      ]
  }
])

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App