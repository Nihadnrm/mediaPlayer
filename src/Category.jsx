import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Categorylist from './Categorylist';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addcategory } from './service/allAPI';
function Category() {
  const[cat,setcat]=useState({name:"",video:[]})
  const[addresponse,setaddresponse]=useState("")
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handlecategory=async()=>{
  const{name}=cat
  if(!name){
    alert("enter valid input")
  }
  else{
    const result=await addcategory(cat)
    console.log(result);
    if(result.status=201){
      alert("category added successfully")
       setcat({name:"",video:[]})
       handleClose()
       setaddresponse(result)
    }
    else{
      alert("category adding failed")
    }
   
    
  }
}


  return (
   <>
   <div className='d-grid'>
   <button className='btn btn-info' onClick={handleShow}>Category +</button>

   </div>
   <div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FloatingLabel controlId="floatingPassword" label="Add Category Name">
        <Form.Control type="text" onChange={(e)=>{setcat({...cat,name:e.target.value})}} placeholder="Category" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlecategory}>Add</Button>
        </Modal.Footer>
      </Modal>
   </div>
   <div className='mt-3'>
<Categorylist prop={addresponse} />
   </div>
   </>
  )
}

export default Category