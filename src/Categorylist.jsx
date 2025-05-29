
import {useState,useEffect}from 'react';
import { getcategoriesapi } from './service/allAPI';
import { deletecategory } from './service/allAPI';
import { addvideotocategoryapi } from './service/allAPI';
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


   const handleDragOver=(e)=>{
     e.preventDefault()

   }

const handledrop= async (e,cat)=>{
e.preventDefault()
console.log("droping");
const videodata=JSON.parse(e.dataTransfer.getData("video"))
// console.log(videodata);
// console.log(cat);
const exist=cat.video.find((item)=>item.id==videodata.id)
if(exist){
  alert("video already added to category")
}
else {
cat.video.push(videodata)
console.log(cat);
const result=await addvideotocategoryapi(cat.id,cat)
console.log(result);
if(result.status==200){
  getdata()
  alert("video added successfully")
}
else{
  alert("video adding category failed")
}
}

 }

  return (
    <>
      <div className='border p-3 shadow'>
        {
          list.length> 0 ?
            <>
              {list.map(item => (
                <div className="m-2 border-info border">
                <div className=" p-3 d-flex justify-content-between" onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>{handledrop(e,item)}}>
                  <h3>{item.name}</h3>
                  <button  className='btn' onClick={()=>{handledeletecategory(item.id)}}>
                    <i className='fa-solid fa-trash text-danger'></i>
                  </button>
                </div>
                <div>
                {
                  item.video.length>0 &&
                  <>
                  {item.video.map((tt)=>
                  <Videocard vid={tt} delstatus={true}/>
                )
                  }
                  </>
                }
                </div>
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
