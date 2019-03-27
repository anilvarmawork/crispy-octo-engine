import React, { Component } from 'react';
import uuid from 'uuid/v1';

// const newUserObj = () => { return { id: uuid(), firstName: '', lastName: '' }; };
// const buttonText = (person = null) => { return (person) ? 'Edit' : 'Add'; };

class AddUser extends Component {
    constructor(props) {
        super(props);
        // console.log('addUser constructor');
        // console.log(props.person);

        this.state = {
            tmpUser: { id: uuid(), firstName: '', lastName: '' }
        };
        // console.log('state start');
        // console.log(this.state);
        // console.log('state end');
    }

    handleChange = (e) => {
        const tmpState = { ...this.state };
        tmpState.tmpUser[e.target.getAttribute('propname')] = e.target.value;
        super.setState(tmpState);
    };

    submitAdd = () => {
        const tmpState = { ...this.state }
        // tmpState.buttonText = buttonText();
        //  tmpState.tmpUser = newUserObj();
        // super.setState(tmpState);
        this.props.addOne(this.state.tmpUser);
    };

    render() {
        // let usr = this.state.tmpUser;
        if (this.props.editEnable) {
            super.setState(this.props.person)
            this.props.changeEnable(false);
        }
        return (
            <div>
                <input id='inputFN' label="First Name" value={this.state.firstName} propname="firstName" type="text" onChange={this.handleChange}>
                </input>
                <input id='inputLN' label="Last Name" value={this.state.lastName} propname="lastName" type="text" onChange={this.handleChange}>
                </input>
                <button onClick={() => { this.submitAdd() }}>{this.state.buttonText}</button>

            </div>
        );
    }
}

export default AddUser;