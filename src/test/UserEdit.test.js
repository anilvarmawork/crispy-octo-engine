import {shallow} from 'enzyme';
import '../setupTests';
import UserEdit from '../components/UserEdit';
import React from 'react';

describe('testing the edit', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<UserEdit/>)
    })

    it('testing the number of inputs', () => {
        expect(wrapper.find('input')).toHaveLength(2);
     })
    
})