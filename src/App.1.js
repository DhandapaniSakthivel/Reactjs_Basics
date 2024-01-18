import React, { Component } from 'react';
import './App.css';
import ReactLifeCycle from './app/components/ReactLifeCycle';
import UserList from './app/components/UserList';
import ShouldUpdate from './app/components/ShouldUpdate';
import PureComponents from './app/components/PureComponent';
import {BrowserRouter,Route} from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'HCL',
      showChild: false
    }
  }
  clickEvent = () => {
    this.setState({ name: 'HCL Technologies' });
  }
  showHide = () => {
    console.log('Show Hide.........')
    this.setState({ showChild: !this.state.showChild })
  }
  render() {
    //     let divTest;
    //     if(this.state.showChild){
    //       divTest=<div>================>Multiple components are wrap into one component(div)
    // <UserList />
    //         <ReactLifeCycle/>
    //          <p>{this.state.name}</p>

    //         <ShouldUpdate/>


    //         <PureComponents/>
    //       </div>


    //     }
    return (
      <div className="App">
        {/* <button onClick={this.clickEvent}>Click Event</button>
        <button onClick={this.showHide}>Show Child and Hide Child</button>
        {divTest} 
         <ReactLifeCycle/>
       <PureComponents/> */}
        <UserList />
      </div>
    );
  }
}

export default App;
