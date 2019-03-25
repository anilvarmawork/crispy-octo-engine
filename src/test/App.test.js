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
    const initUsers = [{"firstName": "anil", "lastName": "varma", "id": "a"},
    {"firstName": "Mathias", "lastName": "Kana", "id": "b"}];
    expect(wrapper.state().users).toEqual(initUsers);
  })

  it('userlist component check', () => {
    expect(wrapper.find('UserList')).toHaveLength(1);
  })

})
