import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
const LoginSignup = () => {

  const [state,setState] = useState("Login")
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const login = async () =>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('https://preject-final-backend.onrender.com/login',{
      method:'post',
      headers:{
        Accept:'application/form-data',
        'content-Type':'application/json',
      },
      body:JSON.stringify(formData),
     }).then((response)=> response.json()).then((data)=>responseData=data)

     if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
     }
     else{
      alert(responseData.errors)
     }
  }

  const signup = async () =>{
    console.log("Sign Up Function Executed",formData);
    let responseData;
    await fetch('https://preject-final-backend.onrender.com/signup',{
      method:'post',
      headers:{
        Accept:'application/form-data',
        'content-Type':'application/json',
      },
      body:JSON.stringify(formData),
     }).then((response)=> response.json()).then((data)=>responseData=data)

     if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
     }
     else{
      alert(responseData.errors)
     }
  }

  return (
    <div className='loginsignup'>
       <Navbar/>
       <div className="loginsignup-container">
       
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input onChange={changeHandler} type="text" name="username" id="" placeholder="Your Name" value={formData.username} />:<></>}
          <input onChange={changeHandler} type="email" name="email" id="" placeholder="Email Address" value={formData.email} />
          <input onChange={changeHandler} type="password" name="password" id="" placeholder='Password' value={formData.password}/>
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

        {state==="Sign Up"?
        <p className='loginsignup-login'>
          Already have an account?
          <span onClick={()=>{setState("Login")
            
            
          }}>Login here</span>
        </p>:<p className='loginsignup-login'>
          Create an account?
          <span onClick={()=>{setState("Sign Up")
           
            
          }}>Click here</span>
        </p>}
        
        
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
          <div className="loginsignup-agree">
          
        <Link to={'/admin'} style={{textDecoration:"none"}}><span>admin panel</span></Link>
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default LoginSignup
