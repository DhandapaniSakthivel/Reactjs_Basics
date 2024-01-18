import React, {Component} from 'react';
import AjaxHoc from './AjaxHoc';
export default class ProductListComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p>{this.props.data.length}</p>
        )
    }
}
ProductListComponent=AjaxHoc(ProductListComponent,{url:'https://nodesense.github.io/api/products.json'})
