import React, { Component } from 'react';
export default class Product extends Component {
    constructor(props) {
        super(props);

    }
    addToCart=(itemAdded)=>{
console.log(itemAdded)
this.props.cartSelected(itemAdded)
    }
    render() {
        return (
            <div className='container'>


                <table className='table table-bordered table-striped'>
                    <thead >
                        <tr>
                            <td><h3>Product Id</h3></td>
                            <td><h3>Product Name</h3></td>
                            <td><h3>Action</h3></td>
                        </tr>
                    </thead>


                    <tbody> {this.props.list.map((item, i) => {
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
                                    <button onClick={()=>this.addToCart(item)}>Add To Cart</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>


                </table>


            </div>
        );
    }
}
