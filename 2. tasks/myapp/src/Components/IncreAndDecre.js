import React, {useState} from 'react'

const IncreAndDecre = () => {

const [num, setNum]=useState(0);
  return (
   <div className='text-center mt-24'>
   <button  className='border-2 border-black px-5 py-1 hover:bg-black hover:text-white rounded' onClick={()=>setNum(num+1)}  >Increment</button>
   <h1 className='my-10 text-5xl'>{num}</h1>
   <button  className='border-2 border-black px-5 py-1 hover:bg-black hover:text-white rounded' onClick={()=>setNum(num>=1 ? num-1:num)}>Decrement</button>
   </div>
  )
}

export default IncreAndDecre;