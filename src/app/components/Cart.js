import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartAction from '../actions/cartAction';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: []
        }

    }
    componentWillReceiveProps(nextProps){
        this.setState({cartList:nextProps.cart})
    }
    componentDidMount() {
        console.log("in did mount", this.props.cart);
        this.setState({ cartList: this.props.cart });
    }
    removeFromCart=(item)=>{
        this.props.actions.removeFromCart(item.id)
    }
    emptyCart=()=>{
        this.props.actions.emptyCart()
    }

    render() {
        return (
            <div>
            <h3>No.of.items present in the cart is:{this.state.cartList.length}</h3>
            
            <table className='table table-bordered table-striped'>
            
    <thead >
    
        <tr>
            <td><h3>Product Id</h3></td>
            <td><h3>Product Name</h3></td>
            <td><h3>Action</h3></td>
        </tr>
    </thead>


    <tbody> {this.state.cartList.map((item, i) => {
        return (
            <tr key={i}>
                <td>
                    <div>
                        {item.id}
                    </div>
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    <button onClick={()=>this.removeFromCart(item)}>Remove From Cart</button>
                </td>
            </tr>
           
        )
    })}
    </tbody>


</table>
<button onClick={()=>this.emptyCart()}>Clear List</button>
</div>
        )

    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state)
    return {
        cart: state.cart
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(cartAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);