// formula , take any formula for that I want you to create 5 buttons < 
//I want everyone to create class component, use any structre as per dude who share, 5 buttons , ensure to have bigger formula , 
//I want you to have three to four buttons for value changing , when clicked on first button only first one should change , 
//so based on the button click , the value should be changed ... fifth button should change all values . 
// formula  x/a + y/b

import React from "react";

class BigFormula extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:6,
            y:8,
            a:3,
            b:4,
        }
         
    }
    changeValue1 = () =>{
        this.setState({x:this.state.x+1})
    }
    changeValue2 = () =>{
        this.setState({a:this.state.a+1})
    }
    changeValue3 = () =>{
        this.setState({y:this.state.y+1})
    }
    changeValue4 = () =>{
        this.setState({b:this.state.b+1})
    }
    changeValueAll = () =>{
        this.setState({y:0,a:1,b:1,x:1})
    }
    render(){
        return(
        <>
            <>
            <button onClick={this.changeValue1}>Click to Change One</button>
            <br/>
            <button onClick={this.changeValue2}>Click to Change Two</button>
            <br/>
            <button onClick={this.changeValue3}>Click to Change Three</button>
            <br/>
            <button onClick={this.changeValue4}>Click to Change Four</button>
            <br/>
            <button onClick={this.changeValueAll}>Click to Change All</button>
            <br/>
            <h1>x/a + y/b = </h1>
            <h1>result {this.state.x/this.state.a + this.state.y/this.state.b}</h1>
            </>
        </>
        )
    }
}

export default BigFormula;