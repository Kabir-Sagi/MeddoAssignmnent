import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import {shallow} from 'enzyme'
import Login from './Login'


it("Validate the Geading in Login component",()=>{
 
        const loginComponent = shallow(<Login />)
        const heading = loginComponent.find('h2.my-3').text()
        expect(heading).toBe('Login Using Auth0')
  
   
})


describe("Validate Login component",()=>{
    test("Emailinput rendered in dom",()=>{
        const component = render(<Login />)
        const text = component.getByPlaceholderText('Enter Email')
        console.log(text)
         expect(text).toBeInTheDocument();
    })
    test("passwordInput rendered in dom",()=>{
        const component = render(<Login />)
        const text = component.getByPlaceholderText('Enter Password')
        console.log(text)
         expect(text).toBeInTheDocument();
    })
   test("button rendered in DOM",()=>{
       const component = render(<Login />)
       const buttonRef = component.getByRole('button')
       expect(buttonRef).toBeInTheDocument();
   })
   test("Click event working in the button",()=>{
       const mockFn = jest.fn()
       const component = render(<Login onSubmit={mockFn} />)
       const buttonRef = component.getByRole("button")
     
       fireEvent.submit(buttonRef)
   })
   test("Text in the button",()=>{
   
    const component = render(<Login  />)
    const buttonRef = component.getByRole("button")
    
    // expect(buttonRef.getAttribute('title')).toBe('b1')
    expect(buttonRef.innerHTML).toBe('Click to Submit')
})
test("check the title in the button",()=>{
   
    const component = render(<Login  />)
    const buttonRef = component.getByRole("button")
    
     expect(buttonRef.getAttribute('title')).toBe('b1')
    
})
test("check the class in the button",()=>{
   
    const component = render(<Login  />)
    const buttonRef = component.getByRole("button")
    
     expect(buttonRef.tagName.toLowerCase()).toBe('button')
    
})
test("check the Password type of input",()=>{
   
    const component = render(<Login  />)
    const inputRef = component.getByPlaceholderText('Enter Password')
   
     expect(inputRef.type).toBe('password')
    
})
test("check the Text type of input",()=>{
   
    const component = render(<Login  />)
    const inputRef = component.getByPlaceholderText('Enter Email')
   
     expect(inputRef.type).toBe('email')
    
})
})