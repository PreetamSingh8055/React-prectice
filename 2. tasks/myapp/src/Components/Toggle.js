import React, {useState} from 'react'

const Toggle = () => {
    const[name, setName]=useState("show");
    const[num, setNum]=useState(0);
    const setGame=()=>{
        if (name=="hide")
        {
        setName("show");
        setNum(0);

        }
         
        else 
        {
            setName("hide");
            setNum(1);
        }
    }
   
  return (
    <div className='text-center mt-20'>
         <h1 className='text-5xl py-4'>{num}</h1>
         {/* <h1 className='text-[#fc2c03] text-3xl font-bold py-96' >ram</h1> */}
        <button className='border-2 border-black px-5 py-1 hover:bg-black hover:text-white rounded' onClick={setGame}>{name}</button>
    </div>
  )
}

export default Toggle