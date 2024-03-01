import React,{useRef, useState} from 'react'

function UseRef() {

    const [count, setCount]=useState(0);
    const countRef=useRef(0);
    let x=0;
    
    const handleIncrement=()=>{
        setCount(count+1);
        countRef.current++;
        x+=1;
        console.log("state:",count);
        console.log("x:", x);
        console.log("Ref:", countRef.current);
    }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>bomb</button>
    </div>
  )
}

export default UseRef
