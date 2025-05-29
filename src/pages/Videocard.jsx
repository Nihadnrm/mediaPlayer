import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addhistory, deletecard } from '../service/allAPI';

function Videocard({vid,dele,delstatus}) {
 const  handledelete=async()=>{
  const result=await deletecard(vid?.id)
  console.log(result);
  
  if(result.status=201){
    alert("video deleted successfully")
    dele(result)
  }
  else{
    alert("video did not delete")
  }
 }

     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true)
    
  const{id,title,imageurl,watchurl}=vid
  const now=new Date()
  const currenttime=now.toLocaleString()
  const data={id,title,imageurl,watchurl,currenttime}
  console.log(data)
  const result=await addhistory(data)
  console.log(result);

  }

  const handledrag=(e)=>{
    console.log("draging");
    console.log(vid);
    
    e.dataTransfer.setData("video",JSON.stringify(vid))

  }
  return (
   <>
   
   <div className='d-flex row justify-content-center '>
   <Card style={{ width: '15rem' }} className='col-6 shadow ' draggable onDragStart={(e)=>{handledrag(e)}}>
      <Card.Img variant="top" src={vid.imageurl} onClick={handleShow} style={{cursor:"pointer",height:"200px"}} />
      <Card.Title>{vid.title}</Card.Title>
      <Card.Body >
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Charlie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${vid.watchurl}&autoplay=1`} allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      {
       !delstatus &&
       <>
       <button className='btn' onClick={handledelete} >
        <i className="fa-solid fa-trash p-2" style={{color:"red"}}></i>
    </button>
    </>
}
      </Card.Body>
    
    </Card>
  
  </div>
    
   </>
  )
}

export default Videocard