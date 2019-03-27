import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow} from "enzyme" ;
import "../setupTests";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('testing the app component', () => {

  let wrapper; 

  beforeEach ( () => {
     wrapper = shallow (<App/>);
  })

  it('testing the div', () => {
    expect(wrapper.find(".App")).toHaveLength(1);
  })

  it('testing the state having values', () => {
    const initUsers = wrapper.state().users;
    expect(wrapper.state().users).toEqual(initUsers);
  })

  it('userlist component check', () => {
    expect(wrapper.find('UserList')).toHaveLength(1);
  })

  it('AddUser component check', () => {
    expect(wrapper.find('AddUser')).toHaveLength(1);
  })

  it('testing the addOneUser function',()=>{
    const initUsers = {"firstName": "anil", "lastName": "varma", "id": "c"};
    const finalUsers = wrapper.state().users;
    finalUsers.push(initUsers);
    wrapper.instance().addOneUser(initUsers);
    expect(wrapper.state().users).toEqual(finalUsers);
  })

  it('testing deleteOneUser function', () => {
    const users = wrapper.state().users;
    console.log(users);//2
    wrapper.instance().deleteOneUser(users[1]);//1
    expect(wrapper.state().users[0]).toEqual(users[0]);
  })

})
