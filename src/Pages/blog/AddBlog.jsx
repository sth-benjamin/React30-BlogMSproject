import React from 'react'
import Navbar from '../../Components/Navbar/Navbar/Navbar'
import Layout from '../../Components/Navbar/layout/Layout'
import Form from './components/Card/form/form'

const AddBlog = () => {
  return (
    <Layout>
      <Form type='Create'/>
    </Layout>
  )
}

export default AddBlog