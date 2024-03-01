import React from 'react'
import { useEffect, useState} from 'react'


const UseEffect = () => {

  const [data, setData]=useState(0);
  
  const decre=()=>{
    setData(data-1)
  }
  useEffect( () => {
    console.log("this a useffect")
  },[decre]);


  return (
    <div>
      <h1> i am UseEffect</h1>

      <h1>{data}</h1>

      <button onClick={()=>{setData(data+1)}}>increment</button>
      <button onClick={decre}>dicrement</button>

    </div>
  )
}

export default UseEffect
