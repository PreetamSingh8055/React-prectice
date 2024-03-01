import React,{useState} from 'react'

function TranslateBox() {
    const[inputText, setIntputText]=useState('');

    const HandleUppercase=()=>{
        setIntputText(inputText.toUpperCase());
    }   
    const HandleLowercase=()=>{
        setIntputText(inputText.toLowerCase());
    }
    const HandleCapitalize=()=>{
        setIntputText(inputText.replace(/\b\w/g,(char)=>char.toUpperCase()));
    }


  return (
    <div className='m-4 p-4 border border-gray-300'>
        <textarea  className='w-full h-36  p-2 border border-gray-400 ' value={inputText} onChange={(e)=>setIntputText(e.target.value)}/>
        <div className='flex justify-end mt-2 space-x-2'>
        <button className='text-white bg-green-400 px-4 py-2 rounded uppercase' onClick={HandleUppercase} > Uppercase</button>
        <button className='text-white bg-blue-400 px-4 py-2 rounded uppercase' onClick={HandleLowercase}> lowercasse</button>
        <button className='text-white bg-yellow-400 px-4 py-2 rounded uppercase' onClick={HandleCapitalize}>capitalcase</button>
        </div>
    </div>
  )
}

export default TranslateBox
