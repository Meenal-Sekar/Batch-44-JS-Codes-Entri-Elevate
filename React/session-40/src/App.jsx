// components  (javascript function)
//jsx    (html+js  samepage)
//2 types of components 1.function component  rfce   2.class component rcc

//index.html---->root(id)--->main.jsx----> app.jsx(Script mode)

import React from 'react'
import './App.css'
import Home from './components/Home'


function App()
 {
  let name="Entri"

 function bigger()
 {
    let a1=prompt('Enter the value of A:')
    let b1=prompt('Enter the value of B:')

    if(a1>b1)
    {
      alert('A is big')
    }
    else{
      alert('B is big')
    }
 }

 function Welcome()
 {
  console.log('I am from App.jsx')
 }

 let mystyle=
 {
   backgroundColor:"blue",
   color:"white",
    textTransform:"uppercase"
  
 }

  return (
    <>
      <div>
<h1>Welcome to React Programming</h1>
      <p>I am learning Components</p>
      <div>
          <h1 style={{color:"blue",backgroundColor:"yellow"}}>I am learning Inline css connection</h1>
          <h2 style={mystyle}>I am learning Internal css connection</h2>

          <p>My learning platform is  {name}</p>

          <button onClick={bigger}>Bigger</button>
      </div>

      <h1 className='text-success'>I am a code from bootstrap</h1>
      <button type='button' className='btn btn-primary'>Login</button>
      </div>
       <Home/>
      <footer className="bg-body-tertiary text-center text-lg-start">
  
  <div className="text-center p-3" style={{backgroundColor:"black",color:"white"}}>
    © 2026 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
    </footer>
    <Welcome/>
      
    </>
  )
}

export default App
