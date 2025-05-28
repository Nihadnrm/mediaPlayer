import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { registration,alreadyregistered } from '../service/allAPI';
import { useNavigate } from 'react-router-dom';


function Reg() {
  const[data,setdata]=useState({email:"",username:"",password:""})
    const nav=useNavigate()
     
  const handlesubmit= async()=>{
const {email,username,password}=data
if(!email || !username|| !password){
  alert("enter valid input")
}
else{ 
  const a=await alreadyregistered()
  console.log(data);
  console.log(a);

  const check=a.data.find((item)=>item.email==data.email || item.username==data.username)
  console.log(check);
  if(check){
    alert("username or password already exist,please try another")
  }
  else{
     const result= await registration(data)
  if(result.status=201){
    setdata({email:"",username:"",password:""})
    alert("registration successful")
     nav("/login")
    }
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
        <h4>Registration</h4>
        <div>
          
 <FloatingLabel controlId="floatingInput"label="Email address" className="mb-3">
      
        <Form.Control type="email" onChange={(e)=>setdata({...data,email:e.target.value})} placeholder="name@example.com" />
      </FloatingLabel>

       <FloatingLabel controlId="floatingInput"label="UserName" className="mb-3">
      <Form.Control type="text" onChange={(e)=>setdata({...data,username:e.target.value})} placeholder="name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" onChange={(e)=>setdata({...data,password:e.target.value})} placeholder="Password" />
      </FloatingLabel>
        </div>
        <div className='d-flex justify-content-between my-4'>
         <button className='btn btn-light border ' onClick={handlesubmit}>Register</button>
         <Link to={"/login"} className='link-info'>Already have an Account?</Link>
        </div>
      </div> 
  
    

  </div>

</div>
</>
  )
}

export default Reg