import React, { Component } from 'react';
import './App.css';
import ReactLifeCycle from './app/components/ReactLifeCycle';
import UserList from './app/components/UserList';
import ShouldUpdate from './app/components/ShouldUpdate';
import PureComponents from './app/components/PureComponent';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import FileNotFound from './app/components/FileNotFound';
import Param from './app/components/Param';
import Ajax from './app/components/Ajax';
import Login from './app/components/Login';
import ProductList from './app/components/ProductList';
import Cart from './app/components/Cart';
import ControlledComponent from './app/components/ControlledComponent';
import UncontrolledComponent from './app/components/UncontrolledComponent';
import UserComponent from './app/components/UserComponent'
import ProductListComponent from './app/components/ProductListComponent'
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
    
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <div>
        <Link to="/pureComp">Pure Component</Link>
        <Link to="/userList">User List</Link>
        <Link to="/fromFun">From Function</Link>
        <Link to="/param/2154">Param Component</Link>
        <Link to="/ajax">Ajax</Link>
        <Link to="/login">Login</Link>
        <Link to="/prodList">Product List</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/control">Controlled Component</Link>
        <Link to="/uncontrol">Uncontrolled Component</Link>
        <Link to="/userComp">User Component</Link>
        <Link to="/prodListComp">Product List Component</Link>
        </div>
       <Switch>
        <Route path="/" component={ShouldUpdate} exact/>
        <Route path="/pureComp" component={PureComponents}/>
        <Route path="/userList" component={UserList}/>
        <Route path="/fromFun" render={()=><div>Hello!!!</div>}/>
        <Route path="/param/:id" component={Param}/>
        <Route path="/ajax" component={Ajax}/>
        <Route path="/login" component={Login}/>
        <Route path="/prodList" component={ProductList}/>
        <Route path="/control" component={ControlledComponent}/>
        <Route path="/uncontrol" component={UncontrolledComponent}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/userComp" component={UserComponent}/>
        <Route path="/prodListComp" component={ProductListComponent}/>
        <Route component={FileNotFound}/>
        </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
