// import  React from 'react';
import React, { Component } from 'react'

export default class PropsMessageThroughClass extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name: "Ram",
            age:500
        };
    };
    btn=()=>{
        alert("hello");
        console.log(this.props);
    }
    
    
    myStyle={
        color:"yellow",
    }

  render()
   {


    return (
      <div>
       <h1 style={{backgroundColor:"red"}}>Dear {this.state.name} , I love you</h1>
       <h2 style={this.myStyle}>your age is {this.state.age}</h2>
       <button onClick={this.btn}>Click me</button>
       </div>
    )
  }
}
