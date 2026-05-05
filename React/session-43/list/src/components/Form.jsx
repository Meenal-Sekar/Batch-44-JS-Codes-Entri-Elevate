import React,{ useState } from 'react'

function Form() 

{

    const [name,setName]=useState(''); //dt--String value:user
    const [age,setAge]=useState();   //dt--Number
    const[city,setCity]=useState("") //dt  -- string

    function savemydata()
    {
        alert(`The user name is ${name},and the person age is ${age} their city is ${city}`)

        setName("")
        setAge("")
        setCity("")
    }
  return (
   <form>
        <label>Name:</label>
        <input type='text' placeholder='Enter your name' value={name}
          onChange={(e)=>setName(e.target.value)}/>
        <br/>
         <label>Age:</label>
        <input type='text' placeholder='Enter your age' value={age}
        onChange={(e)=>setAge(e.target.value)}/>
        <br/>
          <label>city:</label>
        <input type='text' placeholder='Enter your city' value={city} 
        onChange={(e)=>setCity(e.target.value)}/>
        <br/>

        <button  className= "bg-blue-400 p-3 " onClick={savemydata}>Save</button>
   </form>
  )
}

export default Form