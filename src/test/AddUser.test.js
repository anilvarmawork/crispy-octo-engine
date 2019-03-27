import {shallow} from 'enzyme';
import '../setupTests';
import AddUser from '../components/AddUser';
import React from 'react';

describe('testing the edit', () => {
    let wrapper =shallow(<AddUser />);
    beforeEach(()=> {
        wrapper = shallow(<AddUser />);
    });

    it('testing the number of inputs', () => {
        expect(wrapper.find('input')).toHaveLength(2);
     });

     it('testing the data of inputs', () => {
        wrapper.find('#inputFN').simulate('change', {target: {value: 'anil', getAttribute: () => 'firstName'}});
        // console.log(wrapper.state().newUser);
        expect(wrapper.state().tmpUser.firstName).toEqual('anil');
     });

    //  it('test addone being invoke on click', () => {
    //      //const mockAddOne = jest.fn();
    //      wrapper = shallow(<AddUser addOneUser={mockAddOne}/>);
    //     //  wrapper.find('#inputFN').simulate('change', {target: {value: 'anil', getAttribute: () => 'firstName'}});
    //     //  wrapper.find('#inputLN').simulate('change', {target: {value: 'varma', getAttribute: () => 'lastName'}});
    //     //  wrapper.find('button').simulate('click');
    //      const initUsers = {"firstName": "anil", id : "16461ea1-50a9-11e9-83ae-6d6248a079d5", "lastName": "varma"};
    //      wrapper.setState(initUsers);
    //      mockAddOne.mockReturnValue(initUsers);
         
    //      expect(mockAddOne()).toBe(initUsers);
    //  })
     
    
})