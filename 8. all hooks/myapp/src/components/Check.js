import React from 'react'
import {useState} from 'react'


const Check = () => {

    const [InputValue,setInputValue]=useState()
    const InputHandler=(event)=>{
        setInputValue(event.target.value);
    }

  return (
    <div>
        <label htmlFor="myInput">Enter Something :  </label>
        <input type="text" 
        id='muInput'
        value={InputValue}
        onChange={InputHandler}
        />
      <p> you typed : {InputValue}</p>
    </div>
  )
}

export default Check
