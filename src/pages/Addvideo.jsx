import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Addvedio } from '../service/allAPI';

function Addvideo({address}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);
 
  const[vedio,setvedio]=useState({title:"",imageurl:"",watchurl:""})

  const Handlesubmit= async()=>{
    console.log(vedio);
    const{title,imageurl,watchurl}=vedio
    if(!title || !imageurl || !watchurl){
      alert("enter valid input")
    }
    else{
    const charecter=watchurl.split("v=")[1]
    const embeded=`https://www.youtube.com/embed/${charecter}?si=OGKIfBFxmwHYSBZk` 
    vedio.watchurl=embeded
    const result=await Addvedio(vedio)
    console.log(result);
    if(result.status==201){
      alert("vedio uploaded successfully")
      setvedio({title:"",imageurl:"",watchurl:""})
      handleClose()
      address(result)
    }
    else{
      alert("vedio uploaded failed !!!")
    }
    

    }
    
  }
  
  return (
    <>
    <button className='btn btn-success p-4' onClick={handleShow}>+</button>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingPassword" label="video title" className='mb-2'>
        <Form.Control type="link" onChange={(e)=>setvedio({...vedio,title:e.target.value})} placeholder="title" />
      </FloatingLabel>
       <FloatingLabel controlId="floatingPassword" label="video thumnail URL image" className='mb-2'>
        <Form.Control type="link" onChange={(e)=>setvedio({...vedio,imageurl:e.target.value})} placeholder="image" />
      </FloatingLabel>
     <FloatingLabel controlId="floatingPassword" label="video URL" className='mb-2'>
        <Form.Control type="link"  onChange={(e)=>setvedio({...vedio,watchurl:e.target.value})} placeholder="video" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={Handlesubmit}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvideo