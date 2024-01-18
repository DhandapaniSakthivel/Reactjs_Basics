import React, {Component} from 'react';
export default class ControlledComponent extends Component{
    constructor()
    {
        super();
       
        
    }
    
   clickEvent=(event)=>{
       const text=this.email.value
       const password=this.password.value
       console.log(text,password)
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
                        <input type='email'  placeholder='Enter Name' ref={(userInput)=>this.email=userInput}  required />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                   <td><input type='password' placeholder='Enter Password' ref={(userInput)=>this.password=userInput}  required/>
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