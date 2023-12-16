import React, { Component } from "react";

class StateClassCom extends Component
{
    state={
        color:"Yellow",
        price:121
    }
    handleChange=()=>{this.setState({color:"Red"})}
    Change=()=>{this.setState({price:800})}
    render()
    {
        return(
            <div>
                <h1>The color i have selected is {this.state.color} and the price is {this.state.price}</h1>
                <button onClick={this.handleChange}>Click me</button>
                <button onClick={this.Change}>Click me</button>
            </div>
        )
    }
}

export default StateClassCom;