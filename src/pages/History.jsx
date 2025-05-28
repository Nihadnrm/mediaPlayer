import React from 'react'
import { useState,useEffect } from 'react'
import { gethistory } from '../service/allAPI'
import { deletehistory } from '../service/allAPI'


function History() {
const[gethis,setgethis]=useState([])

useEffect(()=>{handlegethistory()},[])
const handlegethistory=async()=>{
  const result=await gethistory()
  console.log(result);
  if(result.status==200){
    setgethis(result.data)
  }
}
  const handledeletehistory=async(id)=>{
    const result=await deletehistory(id)
    console.log(result);
    
    if(result.status==200){
      handlegethistory()
      
    }
    else{
      alert("history deletion is failed")
    }
    
  }

  return (
<>
<div>
  {
    gethis.length>0 ?
    
  <>
    <div className='container-fluid'>
  <h2>History</h2>
  <table className='table table-dark my-5'>
<thead>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Thumbnail</th>
    <th>URL</th>
    <th>Date and Time</th>
    <th></th>
  </tr>
</thead>
<tbody>
 {
  gethis.map((item)=>
     <tr>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td><img src={item.imageurl} alt="" srcset="" /></td>
    <td>{item.watchurl}</td>
    <td>{item.currenttime}</td>
    <td>
      <button className='btn' onClick={()=>handledeletehistory(item.id)}>
        <i className="fa-solid fa-trash p-2" style={{color:"red"}}></i>
        </button>  
    </td>
  </tr>
  
  )
}
</tbody>
  </table>


</div>
  </>  

    
    :
    <h3>history did not found!!</h3>

  }
</div>

</>
  )
}

export default History