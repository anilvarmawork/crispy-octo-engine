import React, { Component } from 'react';
import uuid from 'uuid/v1';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUser : { id : uuid()}
        };
    }

    handleChange = (e) => {
        const tempUser = {...this.state};
        tempUser.newUser[e.target.getAttribute('propname')] = e.target.value;
        console.log(tempUser);
        super.setState(tempUser);
    };
    render() {
        return (
            <div>
                <input id = 'input1' label = "First Name" value={this.state.newUser.firstName}  propname = "firstName" type="text" onChange = {this.handleChange}>
                 </input>
                 <input label = "Last Name" value={this.state.newUser.lastName}  propname = "firstName" type="text" onChange = {this.handleChange}>
                 </input>
                 <button className= 'submitUser' onClick={() => { this.props.addOneUser(newUser)}}>Save</button>
            </div>
        );
    }
}

export default AddUser;