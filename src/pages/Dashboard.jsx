import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideo from './Addvideo'
import Category from '../Category'
import { Link } from 'react-router-dom'
import Vediolist from './Vediolist'
import { useState } from 'react'



function Dashboard() {
  const[addresponse,setaddresponse]=useState("")
  return (
    <>
    <div className='container-fluid my-5' style={{}}>
      <div className='d-flex justify-content-between'>
      <h1>Dashboard</h1>
      <div>
      <Link to={"/his"}>watch history</Link>
      <button className='btn btn-danger m-2 '>
        <Link to={"/login"}  >Logout</Link>
      </button>
       </div>
      </div>
      <Row>
        <Col sm={6} md={2} className='py-3'><Addvideo address={setaddresponse}/> </Col>
        
       <Col sm={4} md={7} ><Vediolist add={addresponse}/></Col>

        <Col sm={2} md={3}><Category/></Col>
      </Row>

    </div>
    </>
  )
}

export default Dashboard