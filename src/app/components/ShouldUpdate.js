import React, { Component } from 'react';
export default class ShouldUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 1
        }
    }
    changeText = () => {
        this.setState({ text: Math.random() });
    }
    shouldComponentUpdate(newProps,newState){
         console.log('component should ComponentUpdate..',newProps,newState,this.state.text)
        
            if(newState.text!==this.state.text)
            {
                return true;
            }
        else{
        return false;
        }
    }
    render() {
        console.log('Component rendering....')
        return (
            <div>
                <div>{this.state.text}</div>
                <button onClick={this.changeText}>Click to Change</button>
            </div>
        );
    }
}