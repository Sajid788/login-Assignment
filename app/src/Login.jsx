import React, { useState } from 'react'
import bcrypt from "bcryptjs"
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email:"",password:""});

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        const user = users.find((u) =>u.email === form.email) 
        if(!users || !bcrypt.compareSync(form.password, user.password)){
          alert("Invalid email or password");
          return;
        }
        const token = Math.random().toString(36).substr(2);
        localStorage.setItem("token",token);
        // Navigate("/")
        alert("login sucessfull")
    }
  return (
    <div>
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"250px",margin:"auto"}}>

        <input type="email" name='email' placeholder='Email'
         onChange={handleChange}
         style={{margin:"5px, 0",padding:"8px"}}
         />
        <input type="password" name='password' placeholder='Password'
         onChange={handleChange}
         style={{margin:"5px, 0",padding:"8px"}}
        />
        <button 
        style={{padding:"10px", backgroundColor:"blue", color:"white", border:"none", cursor:"pointer"}}
        type='submit'>Login</button>
       <p style={{marginTop:"10px"}}> Redirect to Dashborad <Link to ="/dashboard" state={{}}>dashboard</Link> </p>
    </form>
    </div>

  )
}

export default Login
