import React,{useState, useEffect} from 'react'

function UseEffect() {
    const [change, setChange]=useState(0);

useEffect(()=>{
    // console.log(" I running Man");
    // document.title = `You clicked ${change} times`;
    return () => {
        // document.title = "React App"; // Reset title on unmount or count change
        <h1>hello</h1>
      };
}, [change]);

  return (
    <div style={{margin:"auto" ,   width:"100px", textAlign:"center"}}>
        <h1>{change}</h1>
      <button onClick={()=>setChange(change+1)}>Plus</button>
      <button onClick={()=>setChange((change>0) ? change-1: change)}>Minus</button>
    </div>
  )
}

export default UseEffect
