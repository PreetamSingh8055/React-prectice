import React,{useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Login = ()=> {
  let h=useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("login")){
        h('/second')
    }
  },[])
  // ,[h]
  
    return (
    <div>
      Login
      <Link to='/second'>
      <button onClick={()=>{
        sessionStorage.setItem("login",true);
      }}>
        Submit</button>
        </Link>
    </div>
  )
}

export default Login
