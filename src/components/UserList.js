import React, { Component } from 'react';

class UserList extends Component {
      
    render() {
 // console.log(this.props.users);
        return (
            <div>
                <div id='thisIsID'>
                     <ul className = "UserList"> 
                     {
                         this.props
                             .users
                             .map((person) => 
                                 <li key={person.id}>{person.firstName} {person.lastName} 
                                 <button className= {person.id} onClick={() => { this.props.editOne(person)}}>Edit</button>
                                 <button className = {person.id + "delete"} onClick = {() => {this.props.deleteOne(person)}}>Delete</button>
                                 </li>)
                        }
                     </ul>
                </div>
            </div>
        );
    }
}

export default UserList;