import React, { useState } from 'react'
// import {useNavigate} from "react-router-dom"
import bcrypt from "bcryptjs"
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({username:"", email:"",password:""});

    // const navigate = useNavigate();

    const handleChange = (e) =>{
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if(!form.username || !form.email || !form.password){
            alert("All feilds are ewquired");
        }
        if(!/\S+@\S+\.\S+/.test (form.email)){
            alert("Invalid email formate");
        }

        const hashedPassword = bcrypt.hashSync(form.password, 10);
        users.push({username:form.username, email:form.email, password:hashedPassword});
        localStorage.setItem("users", JSON.stringify(users));
        alert("user registered sucessfull!");
       
    }
   


  return (
    <div>
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"250px",margin:"auto"}}>
        <input type="text" name='username' placeholder='Username'
        onChange={handleChange}
        style={{margin:"5px, 0",padding:"8px"}}
        />
        <input type="email" name='email' placeholder='Email'
         onChange={handleChange}
         style={{margin:"5px, 0",padding:"8px"}}
         />
        <input type="password" name='password' placeholder='Password'
         onChange={handleChange}
         style={{margin:"5px, 0",padding:"5px"}}
        />
        <button type='submit'

style={{padding:"10px", backgroundColor:"blue", color:"white", border:"none", cursor:"pointer"}}
        >Register</button>
        <p style={{marginTop:"10px"}}> Already have an acount? <Link to ="/login" state={{}}>login</Link> </p>
    </form>
    
    </div>
  )
}

export default Register
