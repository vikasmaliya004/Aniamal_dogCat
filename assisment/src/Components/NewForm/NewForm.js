// import React from "react";
import React, { useState } from 'react'
import "./NewFrom.css";
const NewForm = () => {
  //     return (
  //         <div>
  //             <h1>Adopt a pet</h1>
  //             <h3>What pet do you want to adopt?</h3>
  //             <div>
  //             <label for="cars">Pet type*</label>

  // <select name="Dog">
  //   <option value="Dog1">Dog1</option>
  //   <option value="Dog2">Dog2</option>
  //   <option value="Dog3">Dog3</option>
  //   <option value="Dog4">Dog4</option>
  // </select>
  //             </div>
  //             <div>
  // <label for="Cat">Breed</label>

  // <select name="Cat">
  //   <option value="Cat1">Cat1</option>
  //   <option value="saab">Cat2</option>
  //   <option value="mercedes">Cat3</option>
  //   <option value="audi">Cat4</option>
  // </select>
  // </div>

  //             <h3>Please fill your details</h3>
  //             <div>
  //             <label for="name">Full Name*</label>
  //             <input type="name" placeholder="Enter your name"></input>
  //     </div>
  //     <div>
  //             <label for="email">Email*</label>
  //             <input type="email" placeholder='Email'></input>
  //          </div>
  //          <div>
  //             <label for="phone">Enter your phone number:</label>
  // <input type="tel"  name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}>"/>
  //         </div>
  //         </div>
  //     );
  // }
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);


  function loginHandle(e) {
    if (user.length < 3 || password.length < 3 || phone.length<10) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }

    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  function phoneHandler(e) {
    let item = e.target.value;
    if (item.length < 10) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
    setPhone(item);
  }
  return (
    <div className='mynewform'>
      
      <form onSubmit={loginHandle}>
        <h1>Adopt a pet</h1>
         <h3>What pet do you want to adopt?</h3>
       
        <div className='option'>
          <label for="name">Pet type*</label>
          <br></br>
        
          <select name="Dog" required>
             <option value="Dog1">select</option>
             <option value="Dog2">Dog2</option>
            <option value="Dog3">Dog3</option>
             <option value="Dog4">Dog4</option>
            
          </select>
        
        </div>
        
        <div className='option'>
          <label for="name">Breed</label>
          <br></br>
          <select name="Cat" required>
            <option value="Cat1">select</option>
            <option value="saab">Cat2</option>
             <option value="mercedes">Cat3</option>
             <option value="audi">Cat4</option>
          
          </select>
      
        </div>
        <h3>Please fill your details</h3>
  <div className='input'>
               <label for="name">Name*</label>
               <br /> <br />

        <input type="text" placeholder="Enter Your name" onChange={userHandler} />
        {userErr ? <span>User Not Valid Name</span> : ""}
        <br /> <br />
               <label for="email">Email*</label>
               <br /> <br />

        <input
          type="Email"
          placeholder="Enter User Email"
          onChange={passwordHandler}
        />
        {passErr ? <span>Email Not Valid</span> : ""}
        <br /> <br />
    <label for="phone">Phone Number*</label>
    <br /> <br />
      
        <input
          type="phone"
          placeholder="Enter phone number"
          onChange={phoneHandler}
        />
        {phoneErr ? <span>phone number Not Valid</span> : ""}
        <br /> <br />
        </div>
        <button type="submit">REQUEST FOR ADOPTION</button>
      </form>
    </div>
  );
};

export default NewForm;
