import React, { Component } from 'react';
import User from './User';
class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userList: [
                { userName: 'Ravi', sapId: 76549870 },
                { userName: 'Arun', sapId: 56784563 },
                { userName: 'Balaji', sapId: 34529876 },
                { userName: 'Suresh', sapId: 56439802 }
            ]
        }
    }
    selectedUser(user)
    {
        console.log(user)
    }

    render() {
        return (
            <div>
                <p>Selected User: </p>

              <User user={this.state.userList} title="List of Users" noOfItems={this.state.userList.length} selectedUser={this.selectedUser}/>
            {/* {this.state.userList.map((user,i)=>
           
                
                {
                     return(
                    <User user={user} key={i}/>
                     )
                }
              )} */}
              
            </div>
        );
    }
}
export default UserList;