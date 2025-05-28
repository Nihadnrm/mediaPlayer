
import {useState,useEffect}from 'react';
import { getcategoriesapi } from './service/allAPI';
import { deletecategory } from './service/allAPI';
import Videocard from './pages/Videocard';

function Categorylist({prop}) {
  const [list,setlist]=useState([])
  useEffect(()=>{getdata() },[prop])

  
    
 const getdata=async()=>{
    const result= await getcategoriesapi()
    console.log(result.data);
    if(result.status==200){
      setlist(result.data)
      console.log(result.data);
   
      
    }
    
  }
  
const handledeletecategory=async(id)=>{
   const result=await deletecategory(id)
   if(result.status==200){
    getdata()
   }
   else{
    alert("category deletion is failed !!")
   }
  }
 const handledrop=(e)=>{
console.log("droping");
 }
 const handleDragOver=(e)=>{
e.preventDefault()
}
  return (
    <>
      <div className='border p-3 shadow'>
        {
          list.length> 0 ?
            <>
              {list.map(item => (
                
                <div className="m-2 border-info border p-3 d-flex justify-content-between" onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>{handledrop(e)}}>
                  <h3>{item.name}</h3>
                  <button  className='btn' onClick={()=>{handledeletecategory(item.id)}}>
                    <i className='fa-solid fa-trash text-danger'></i>
                  </button>
                </div>
           
                
              ))}

            </>
            :
            <h3>not found!!</h3>

    }


      </div>
    </>
  );
}

export default Categorylist;
