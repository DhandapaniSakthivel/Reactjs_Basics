import React from 'react';
const Login=()=>
{
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
                    <input type='text' autofocus placeholder='Enter Name' required />
                </td>
            </tr>
            <tr>
                <td>Password</td>
               <td><input type='password' placeholder='Enter Password' required/>
               </td>
            </tr>
            <tr>
                <td>
                    <input type='submit' value='Submit'/>
                </td>
            </tr>

        </tbody>
        </table>
            
        </div>
    )
}
export default Login;