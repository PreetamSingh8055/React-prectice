import React from 'react'

const WelcomeMessage = (props) => {
   const btn=()=>{
        alert("Hello");
    }

  return (
    <>
    <h1>Dear {props.name} , your age is {props.age} Welcome to my website</h1>  
    <button onClick={btn}>show</button>
     </>
  )
}

export default WelcomeMessage