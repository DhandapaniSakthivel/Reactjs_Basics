import React, {Component} from 'react';
import axios from 'axios';
export default function AjaxHoc(WrappedComponent,input){
    return class extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.getData().then(response =>{
            let data=input.isUser?response.data.data:response.data
        this.setState({data});
        });
        }
        getData=() => {
        return new Promise((resolve, reject) =>{
        axios.get(input.url).then(function(response){
            console.log(response)
        resolve(response)
        }).catch(function(error){
        reject(error)
        });
        });
        }
    render(){
        return(
          <div>  <WrappedComponent data={this.state.data}/></div>
        )

    }
}
}