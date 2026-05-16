import React from 'react'
import './App.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// rootlayout(navbar,outlet)  , Pages

import RootLayout from './Layout/RootLayout'

import Home from './pages/Home'
import Student from './pages/Student'
import { studentsLoader } from './pages/Student'
import About from './pages/About'
import Errorpage from './pages/Errorpage'

const router=createBrowserRouter([

{
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage/>,

    children:[
      {
        path: "/",
        element: <Home />,
        index:true
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/student",
        element: <Student />,
        loader: studentsLoader
      }
    ]
}
])



function App() {

  return (
   
    <RouterProvider router={router} />


    
  )
}

export default App