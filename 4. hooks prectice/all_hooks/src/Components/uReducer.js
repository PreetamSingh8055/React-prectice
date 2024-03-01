import React,{useReducer} from 'react'
const initialState=0;

const reducer=(state, action)=>{
  switch(action.type)
  {
    case "INCREMENT":
    return state+1;

    case "DECREMENT":
      return ((state>0) ? state-1: state) ;
      default:
        return state;
  }

}

function UReducer() {
const[state,dispatch]=useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>plus</button>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>minus</button>
    </div>
  )
}

export default  UReducer
