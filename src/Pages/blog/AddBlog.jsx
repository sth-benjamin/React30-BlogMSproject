import React from 'react'
import Layout from '../../Components/Navbar/layout/Layout'
import axios from 'axios'
import { baseUrl } from '../../config'
import Form from './components/Card/form/Form'

const AddBlog = () => {
  const handleCreateBlog = async (data)=>{
  const response = await axios.post(`${baseUrl}blog`,data,{
    headers : {
      "Content-Type" : "multipart/form-data"  
  }
  })

  }
  
  return (
  <Layout>
	<Form type='Create' onSubmit={handleCreateBlog} />
  </Layout>
  )
}

export default AddBlog