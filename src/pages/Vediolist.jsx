import React from 'react'
import Videocard from './Videocard'
import { getvideoapi } from '../service/allAPI'
import { useEffect } from 'react'
import { useState } from 'react'

function Vediolist({add}) {
const[vedio,setvedio]=useState([])
const[delevideo,setdelevideo]=useState("")
 useEffect(()=>{getdata()},[add,delevideo])

 const getdata=async()=>{
    const result=await getvideoapi()
    console.log(result.data);
    if(result.status=201){
      setvedio(result.data)
    }
    
 }

  return (
    <>
    <div className='border border-light shadow'>
    {
        vedio.length>0?
        <div className='d-flex flex-wrap justify-content-around'>
            {
                vedio.map((item)=><Videocard vid={item} dele={setdelevideo} />)
            }
        </div>
        :
        <h2>no videos added !!</h2>
    }
    </div>
    </>
  )
}

export default Vediolist