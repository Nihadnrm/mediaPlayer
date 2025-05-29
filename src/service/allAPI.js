import base_url from "./base_url";
import axios from "axios";
 
export const registration=async(data)=>{
return await axios.post(`${base_url}/user`,data)
}

export const alreadyregistered=async()=>{
     return await axios.get(`${base_url}/user`)
}



export const LoginUser=async(email,password)=>{
     return axios.get(`${base_url}/user?email=${email}&password=${password}`)
}



export const Addvedio=async(data)=>{
     return await axios.post(`${base_url}/vedio`,data)
}

export const getvideoapi= async()=>{
     return await axios.get(`${base_url}/vedio`)
}

export const deletecard=async(id)=>{
     return await axios.delete(`${base_url}/vedio/${id}`)
}

 export const addcategory=async(data)=>{
     return await axios.post(`${base_url}/category`,data)
 }
 
 export const getcategoriesapi=async()=>{
     return await axios.get(`${base_url}/category`)
 }

 export const deletecategory=async(id)=>{
     return await axios.delete(`${base_url}/category/${id}`)
}

export const addhistory=async(data)=>{
     return await axios.post(`${base_url}/history`,data)
 }
 export const gethistory=async()=>{
     return await axios.get(`${base_url}/history`)
 }
  export const deletehistory=async(id)=>{
     return await axios.delete(`${base_url}/history/${id}`)
}
export const addvideotocategoryapi=async(id,data)=>{
     return await axios.put(`${base_url}/category/${id}`,data)
}
 