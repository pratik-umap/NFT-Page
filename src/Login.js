import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate=useNavigate()
  const[userData,setUserData]=useState({
  check_email:"",check_password:""
 })

 let name,value
 const handleChange=(e)=>{
   name=e.target.name
   value=e.target.value

   setUserData({...userData,[name]:value})
 }

 const handlePost= async (e)=>{
   e.preventDefault()

   const { check_email,check_password}=userData

   const response= await fetch("/login",{
     method:"POST",
     headers:{
      "Content-Type" : "application/json"
    },
     body: JSON.stringify({
      check_email,check_password    
    })
   })
   
   if (response.status===200) {
     window.alert("user is present")
     navigate("/")
   }else{
    window.alert("first you have to signup")
   }
 }
  return (
    <div className="login">
       <div className="login_form">
        <h2>Login Form</h2>
          <form method="post" onSubmit={handlePost}>
             <label className="name">Email - </label>
             <input type="email" name="check_email" className="input" value={userData.check_email} onChange={handleChange}/>
             <label className="name">Password - </label>
             <input type="password" name="check_password" className="input" value={userData.check_password} onChange={handleChange}/>
              <Link to="/">
             <button type="submit" className="submit_btn">Login</button>
             </Link>
          </form>
          <Link to="/signup">
          <button className="create_btn">Create a account</button>
          </Link>
       </div> 
    </div>
  )
}

export default Login