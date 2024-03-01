import React,{useState, useEffect} from 'react';
import axios from 'axios';

function ApiTable() {
    const[myData, setMyData]=useState([]);

    const getApiData= async () =>{
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
        setMyData(res.data);
    }

    useEffect( ()=> {
        getApiData();
    }, []);

  return (
    <>
    <h1>this is api fetch data</h1>
    <div className='grid grid-cols-4 grid-flow-row'>
    {myData.map((post)=>{
        const { id, title, body}= post;
        return( <div className='border border-black m-5 h-[300px] w-[300px]' key={id}>
            <h2 className='font-bold text-xl'>{title}</h2>
            <p>{body}</p>
            </div>
        );
    }
    )}
    </div>
    </>
  );

}

export default ApiTable;
