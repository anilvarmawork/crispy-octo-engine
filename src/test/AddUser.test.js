import {shallow} from 'enzyme';
import '../setupTests';
import AddUser from '../components/AddUser';
import React from 'react';

describe('testing the edit', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<AddUser/>)
    })

    it('testing the number of inputs', () => {
        expect(wrapper.find('input')).toHaveLength(2);
     })

     it('testing the data of inputs', () => {
        wrapper.find('#input1').simulate('change', {target: {value: 'anil', getAttribute: () => 'firstName'}});
        console.log(wrapper.state().newUser);
        expect(wrapper.state().newUser.firstName).toEqual('anil');
     })

    //  it('test addone being invoke on click', () => {
    //      const mockAddOne = jest.fn();
    //      wrapper = shallow(<AddUser addOne={mockAddOne}/>);
    //      wrapper.find('button').simulate('click');
    //      expect(mockAddOne).toBeCalledWith("")
    //  })
    
})