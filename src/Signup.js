import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
  let navigate = useNavigate();

  const [user,setUser]=useState({
    name:"",last_name:"",email:"",password:""
  })

  let name,value

  const handleInput=(e)=>{
    name=e.target.name
    value=e.target.value
    setUser({...user, [name]:value})
  }

  const PostData = async (e)=>{
     e.preventDefault()
  
     const {  name, last_name, email, password } = user

     const res=await fetch("/signup",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, last_name, email, password
      })
    })

      if(res.status===201){
        // window.alert("your account create successfully");
        navigate("/login")
      }else{
        // window.alert("this data already exist try another");
      }
    }
  return (
    <div className="signup">
    <div className="login_form">
     <h2>Sign Up Form</h2>
       <form  method="post" onSubmit={ PostData }>
         <label className="name">First Name</label>
          <input type="text" name="name" className="input" value={user.name} onChange={handleInput}/>

          <label className="name">Last Name</label>
          <input type="text" name="last_name" className="input" value={user.last_name} onChange={handleInput}/>

          <label className="name">Email</label>
          <input type="email" name="email" className="input" value={user.email} onChange={handleInput}/>

          <label className="name">Password</label>
          <input type="password" name="password" className="input" value={user.password} onChange={handleInput}/>
            <Link to="/login">
          <button type="submit" className="create_btn">Create a account</button>
          </Link>
       </form>
    </div> 
 </div>
  )
}

export default Signup