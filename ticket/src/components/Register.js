import React from 'react'
import './Register.css';
function Register(){
  const currentDate = new Date().toISOString().split('T')[0];
  return (
    <div class="wrapper">
    <div class="title">
      Registration Form
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input"/>
       </div>  
       <div class="inputfield">
          <label>Password</label>
          <input type="password" class="input"/>
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Date</label>
          <input type="date" class="input" min={currentDate} required />

       </div> 
      <div class="inputfield">
          <label>Time</label>
          <input type="time" class="input"/>
       </div> 
      <div class="inputfield">
          <label>No of Persons</label>
          <input type="number" class="input" min ={0}/>
       </div> 
        <div class="inputfield">
          <label>Gender</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          </div>
       
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input" minlength={10} />
       </div> 
      <div class="inputfield">
          <label>Address</label>
          <textarea class="textarea"></textarea>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Register" class="btn"/>
      </div>
    </div>
</div>
  )
}
export default Register;