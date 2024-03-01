import React, { Component } from 'react'

export default class ClassComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"Paramjit Kaur",
            age : "53"
        }
    }
    goHand()
    {
        this.setState({name:"Preetam"})
    }
  render()
  {
    return(
        <>
        <h1> name : {this.state.name}</h1>
        <h1> age: {this.state.age}</h1>
        <button onClick={()=>this.goHand()}>magic</button>
        </>
    )
  }
}
