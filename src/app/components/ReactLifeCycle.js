import React, { Component } from 'react';
export default class ReactLifeCycle extends Component {
    constructor() {
        console.log('Initial phase......')
        super();
        this.state = {
            text: 1
        }
    }
    componentWillMount(){
        console.log('Before Rendering....')
    }
    componentDidMount(){
        console.log('After Rendering...')
    }
    componentWillReceiveProps(newProps){
        console.log('component will receive props...',newProps)
        
    }
    shouldComponentUpdate(newProps,newState){
        console.log('component should ComponentUpdate..',newProps,newState)
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('Before Update...',nextProps,nextState)
    }
    componentDidUpdate(prevProps,prevState){
        console.log('After Update...',prevProps,prevState)
    }
    componentWillUnmount(){
        console.log('Component Will Unmount....');
    }
    changeText = () => {
        this.setState({ text: Math.random() });
    }
    render() {
        console.log('Component rendering....')
        return (
            <div>
                <div>{this.state.text}</div>
                <button onClick={this.changeText}>Click to Change</button>
            </div>
        )
    }
}
