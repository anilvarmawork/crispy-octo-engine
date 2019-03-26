import React, { Component } from 'react';
import '../css/App.css';
import UserList from './UserList';
import UserEdit from './UserEdit';
import AddUser from './AddUser';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users : [{"firstName": "anil", "lastName": "varma", "id": "a"},
                 {"firstName": "Mathias", "lastName": "Kana", "id": "b"}],
      newUser: {}
    }
  }

  editUser = (person) => {
    // console.log(person);
  }
  addOneUser = (user) => {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.users.push(user);
    super.setState(newState);
    console.log(user);
  }

  render() {
    return (
      <div className="App">
        <UserList users = {this.state.users} editOne={this.editUser} />
        <AddUser addOne={this.addOneUser}/>
      </div>
    );
  }
}

export default App;
