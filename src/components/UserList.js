import React, { Component } from 'react';
import { className } from 'postcss-selector-parser';

class UserList extends Component {

    editUser = (person) => {
        console.log(person);
      }
      
    render() {
        console.log(this.props.users);
        return (
            <div id='thisIsID'>
                <ul className = "UserList"> 
                {
                    this.props
                        .users
                        .map((person) => 
                            <li key={person.id}>{person.firstName} {person.lastName} 
                            <button className= {person.id} onClick={() => { this.props.editOne(person)}}>Edit</button>
                            </li>)
                            
                }
                </ul>
            </div>
        );
    }
}

export default UserList;