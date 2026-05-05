import React from 'react'
import './StudentCard.css'
function StudentCard(props) 
{
  return (
    <>
        <div className='card'>

        <h2 style={{color:"blue"}}>Name:{props.name}</h2>
        <p>------------------</p>
        <p>Course: {props.course}</p>
        <p>Score: {props.score}</p>
        <p>Status: {props.score > 50 ? "Pass" : "Fail"}</p>

       
        </div>
    </>
  )
}

export default StudentCard