import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  // so you can login if  you have signed up before in the same login page, the place that says 'login here'
  const [state,setState] = useState("Login");  //adminlink
  // state variable to save our input field data 
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  // API FOR LOGIN SIGNUP PAGE
  const login = async () =>{
    console.log("Login function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if (responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      // once user register successful, send the user to homepage
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  
  }
  const signup = async () =>{
    console.log("Signup function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if (responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      // once user register successful, send the user to homepage
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">

          {/* if the input page is showing 'sign up', then the input name should show or it should not show if it is login.
           add 'name', 'value' and 'onchange' attributes with their valudata for backend to connect  for  */}
         {state==="Sign Up"?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name'/>:<></>} 
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address'/>
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password'/>
        </div>
        {/* linking the api on the 'button' so as to work in the backend */}
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button> 
        {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
