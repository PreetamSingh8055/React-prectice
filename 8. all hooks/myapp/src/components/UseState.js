import React from 'react'
import {useState} from 'react'

const UseState = () => {

  const [count ,changeCount]=useState(0);
  return (
    <div className=' container mx-auto'>
      <h1>i am a UseState</h1>

      <h1 className='ms-5 ps-5' >{count}</h1>
      <button className='mx-5' onClick={()=>{changeCount(count+1)}}>Increment</button>
      <button className='mx-5' onClick={()=>{changeCount(count>0 ? count-1 : count)}}>decrement</button>
    </div>
  )
}

export default UseState
