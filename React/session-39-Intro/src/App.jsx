import React from 'react'
import './App.css'
import Navbar from './Navbar';
const App = () => {

//  insert js 

function checkage()
{
   let name=document.getElementById('name').value;
   let age=document.getElementById('age').value;

   if(age>=18)
   {
    alert(`${name} is eligible for vote `)
   }
   else{
    alert(`${name} is not eligible for vote `)
   }
}

  return (

//  insert the html structure

    <>  
        <div>
          <h1>Welcome to the React Programming</h1>
        <p>I like React js programming</p>
        </div>
        <section className='sample'>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Js</li>

          </ul>
        </section>
        <form>
            <label>Firstname</label><br></br>

            <input type='text' placeholder='Enter your name:' id='name'/><br/>
             <label>Age:</label><br></br>

            <input type='number' placeholder='Enter your name:' id='age'/>
            <button onClick={checkage}>Check Age</button>
        </form>
        <Navbar/>
    </>
    
   
  )
}

export default App
