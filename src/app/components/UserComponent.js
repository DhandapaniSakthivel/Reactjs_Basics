import React, {Component} from 'react';
import AjaxHoc from './AjaxHoc'
export default class UserComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p>{this.props.data.length}</p>
        )
    }
}
UserComponent=AjaxHoc(UserComponent,{url:'https://reqres.in/api/users',isUser:true})
