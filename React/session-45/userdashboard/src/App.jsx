import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserList from './components/UserList'


function App() {
  return (
    <>
    <Navbar/>
   
   <UserList/>
    
    <Footer/>
    </>
  )
}

export default App