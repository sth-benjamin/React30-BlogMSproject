import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar/Navbar'
import Layout from '../../Components/Navbar/layout/Layout'
import Card from './components/Card/Card'
import axios from 'axios' 
import { baseUrl } from '../../config'

const Home = () => {
  const [blogs,setBlogs] =useState([])
  const fetchBlogs = async()=>{
  const response = await axios.get(`${baseUrl}/blog`)
  if(response.status === 200){
  setBlogs(response.data.data)
  }
}
  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    
    <Layout>
   <div className='flex flex-wrap justify-center gap-4 p-4'>
    {
      blogs.length > 0 && blogs.map((blog)=>{
        return (
           <Card blog={blog}/>)
      })
    }
   

   </div>
    </Layout>
  
  )
}

export default Home