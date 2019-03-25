import {shallow} from 'enzyme';
import '../setupTests';
import UserList from '../components/UserList';
import React from 'react';
import UserEdit from '../components/UserEdit';


describe('test for userlist', () => {

    let wrapper;
    let users;
    beforeEach ( () => {
        users = [{"firstName": "anil", "lastName": "varma", "id": "a"},
        {"firstName": "Mathias", "lastName": "Kana", "id": "b"}]
        wrapper = shallow(<UserList users={users}/>);
    })

    it('testing the props', () => {
        //console.log('root node:', wrapper.props());
       // console.log('instance:',wrapper.instance().props);
        expect(wrapper.instance().props.users).toEqual(users);
    })
    it('testing the UL',() =>{ 
        expect(wrapper.find('ul')).toHaveLength(1);
    })

    it('testing the li', () => {
        expect(wrapper.find('li')).toHaveLength(2);
    })

    it('testing the button', () => {
        const editUserButton = wrapper.find('button');
        expect(editUserButton.length).toBe(2);

        // wrapper.simulate("click");
    })
    it('testing the click for Edit person', () => {
        const mockEditPerson=jest.fn();
        const wrapperEdit=shallow(<UserList users = {users} editOne={mockEditPerson}/>);
        const submitState={firstName:"Mathias",lastName:"Kana",id:"b"};
        wrapperEdit.setState(submitState);
        wrapperEdit.find('.b').simulate("click");
        expect(mockEditPerson).toBeCalledWith(submitState);
    })

})