import React, { Component } from 'react';
import '../css/App.css';
import UserList from './UserList';
import AddUser from './AddUser';
//import uuid from 'uuid/v1';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        { "firstName": "anil", "lastName": "varma", "id": "a" },
        { "firstName": "Mathias", "lastName": "Kana", "id": "b" }
      ],
      tmpPerson: null,
      editEnable: false
    };
  }

  editUser = (person) => {
    console.log('edit');
    console.log(person);
    let tmpState = { ...this.state };
    tmpState.tmpPerson = person;
    tmpState.editEnable = true;
    super.setState(tmpState);
  }

  deleteOneUser = (person) => {
    console.log(person);
    const newState = { ...this.state };
    const ind = newState.users.indexOf(person);
    console.log(ind);
    newState.users.splice(ind, 1);
    console.log(newState);
    super.setState(newState);
  }

  addOneUser = (user) => {
    const newState = { ...this.state };
    newState.users.push(user);
    super.setState(newState);
    // console.log(user);
  }

  changeEnable = () => {
    let tmpState = { ...this.state };
    tmpState.editEnable = false;
    super.setState(tmpState);
  }

  render() {
    let tmpView = (
      <div className="ListAndAdd">
        <AddUser addOne={this.addOneUser} person={this.state.tmpPerson} editEnable={this.state.editEnable} />
      </div>
    );
    if (this.state.tmpPerson) {
      tmpView = (<div className="ListAndEdit">
        <AddUser addOne={this.addOneUser} person={this.state.tmpPerson} editEnable={this.state.editEnable} changeEnable={this.changeEnable} />
      </div>);
    }
    return (
      <div className="App">
        <UserList users={this.state.users} editOne={this.editUser} deleteOne={this.deleteOneUser} />
        {tmpView}
      </div>
    );
  }
}

export default App;
