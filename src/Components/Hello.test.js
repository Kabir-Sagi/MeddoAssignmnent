import React from 'react'
import {shallow} from 'enzyme'
import Hello from './Hello'


it("render dashboard title",()=>{
    const wrapper1 = shallow(<Hello />);
    const h1 = wrapper1.find('h1');
    const result = h1.text();
    expect(result).toBe('Welcome To React');
})