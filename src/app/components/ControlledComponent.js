import React, {Component} from 'react';
export default class ControlledComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            formData:
             {  name:'',
                password:''
            }
        
            
        }
    }
    clickEvent=()=>{
       
  console.log(this.state.formData)
       
    }
    handleChange=(event)=>{
   console.log( event.target.value)
   const{formData}=this.state;
   formData[event.target.name]=event.target.value
   
   this.setState({formData});
    }
    
        
            

   
    render(){
        const style={
            backgroundColor:'lightBlue'
        }
        return(
            <div className='container'>
            <table className='table table-responsive' style={style}>
            <thead>
                <h1>LOGIN</h1>
             </thead>
            <tbody>
            
                <tr>
                    <td>Name</td>
                    <td>
                        <input type='email'  placeholder='Enter Name' onChange={this.handleChange} value={this.state.user}   />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                   <td><input type='password' placeholder='Enter Password' onChange={this.handleChange} value={this.state.password} />
                   </td>
                </tr>
                <tr>
                    <td>
                        <input type='submit' value='Submit' onClick={this.clickEvent}/>
                    </td>
                </tr>
    
            </tbody>
            </table>
                
            </div>
        )

    }

}