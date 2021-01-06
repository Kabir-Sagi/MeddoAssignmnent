import React, { useState } from "react";
import auth0 from 'auth0-js';

import './Login.css';

const Login = () => {
  
  var webAuth = new auth0.WebAuth({
    domain: "dev-s8jpa6xf.us.auth0.com",
    clientID: "Cp2IpnqW1e2OzP9bA07XSZGTQgkuoxZP",
    redirectUri:"http://localhost:3000/dashboard",
    responseType: 'token id_token'
  });
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitIT = (e) => {
    e.preventDefault();
    login(email,password)
  };

 const login=(username,password)=>{
  // webAuth.crossOriginVerification();
   debugger;
  webAuth.login({
    
    realm: "mycon",
    username: username,
    password: password,
  },(err)=>{
    
    if(err) {
     
      console.log(err)
      alert("Invalid User,Check your Credentials")
      return;
    } 
   
   
  });
 
 
  
   
  }
  return (
    <div className='container-fluid'>
      <div className="row">
       <div className="col-sm-3"></div>
      <div className="col-sm-6">
    <div className="card cardclass mx-auto mt-5  text-white">
      <h2 className="my-3">Login Using Auth0</h2>
      <form onSubmit={SubmitIT}>
        <table className="table">
       <tr>
       
          <td>
           
             
       <input
       name='username'
       className="form-control e1"
       placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          /></td></tr>
          <tr>
           
          <td>
      <input 
            id='psd'
             className="form-control"
             placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /></td></tr>
      
        <button title="b1" className="btn btn-outline-dark text-white font-weight-bold mt-3 btn-lg " type="submit">Click to Submit</button>
        </table>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Login;