import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { LoginUser } from '../service/allAPI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const[user,setuser]=useState({email:"",password:""})
  const nav=useNavigate()

  const Handlesubmit=async()=>{
    const{email,password}=user
   if(!email || !password){
  alert("enter valid input")
    }
    else{
      const login=await LoginUser(email,password)
      if(login.data.length>0){
       alert("login successfull")
       setuser({email:"",password:""})
       nav("/dash")

      }
      else{
        alert("user not found")
      }
    }

  }


  return (
   <>
<div className='container-fluid d-flex justify-content-center align-items-center bg-light' style={{height:"100vh"}}>
  <div className='w-75 p-5 row shadow my-5'>
    
      <div className='col'>
        <img src="https://www.iso.org/files/live/sites/isoorg/files/news/insights/information-security/Information%20security_Dark.svg" alt="" style={{height:"100%",width:"100%"}} />
      </div>

      <div className='col'>
        <h4 >Login</h4>
        <div>
 <FloatingLabel controlId="floatingInput" label="Email address"  className="mb-3">
         <Form.Control type="email" onChange={(e)=>setuser({...user,email:e.target.value})} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" onChange={(e)=>setuser({...user,password:e.target.value})} placeholder="Password" />
      </FloatingLabel>
        </div>
        <div className='d-flex justify-content-between my-4'>
         <button className='btn btn-light border 'onClick={Handlesubmit} >Click</button>
         <Link to={"/reg"} className='link-info'>Are You New?</Link>
        </div>
      </div>

    

  </div>

</div>
   </>
  )
}

export default Login