import React from 'react';
const User = (props) => {
    return (
        <div>
            
 <h1>{props.title} --- {props.noOfItems}</h1>
            Welcome {props.user.map((user, i) => {
                return (
                    <div key={i} onClick={()=>{props.selectedUser(user)}}>

                        
                        {user.first_name}

                    </div>                                                   
                )
            })}
        </div>
        // <div className='container'>
        // <h1>{props.title}</h1>

        //     <table className='table table-bordered table-striped'>
        //         <thead className='success'>
        //             <tr>
        //                 <td><h3>User Name</h3></td>
        //                 <td><h3>Sap ID</h3></td>
        //             </tr>
        //         </thead>
        //         {/*Welcome {props.user.userName}*/}
        //         {/* <h1>{props.title} --- {props.noOfItems}</h1> */}

        //         <tbody> {props.user.map((user) => {
        //             return (


        //                 <tr>
        //                     <td>{user.userName}</td>
        //                     <td>{user.sapId}</td>
        //                 </tr>



        //             )
        //         })}   </tbody>

        //         {/* Welcome {props.user.map((user)=>
        //   {
        //       return(
        //           <div key={user.sapId}>
        //               {user.userName}
        //               </div>
        //       )
        //   })}*/}
        //     </table>
    ) 
    
}
export default User;