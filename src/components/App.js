import React, { Component } from 'react';
import '../css/App.css';
import UserList from './UserList';
import UserEdit from './UserEdit';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users : [{"firstName": "anil", "lastName": "varma", "id": "a"},
                 {"firstName": "Mathias", "lastName": "Kana", "id": "b"}]
    }
  }

  editUser = (person) => {
    console.log(person);
  }

  render() {
    return (
      <div className="App">
        <UserList users = {this.state.users} editOne={this.editUser} />
      </div>
    );
  }
}

export default App;
