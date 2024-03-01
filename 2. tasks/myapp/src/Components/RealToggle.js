import React,{useState} from 'react'
import './RealToggle.css';

const RealToggle = () => {
    const [name, setName]=useState("Hide");
    const [isHidden , setHidden]=useState(false);
    const trigger=()=>
    {
        if(name=="Hide")
        {
           
            setHidden(true);
            setName("Show");
        }
        else
        {
            setHidden(false);
            setName("Hide");
        }
    }

   
    
  return (
   <div className='mt-20  text-center'>
   <button className='mb-10 border-2 border-black px-5 py-1 hover:bg-black hover:text-white rounded' onClick={trigger}>{name}</button>
   <h1  className={ `${isHidden ? 'hidden': 'block'} text-3xl font-bold` }>I am a LEGEND</h1>
   </div>
  )
}

export default RealToggle