import React from 'react'
import Navbar from '../../Components/Navbar/Navbar/Navbar'
import Layout from '../../Components/Navbar/layout/Layout'
import Card from './components/Card/Card'

const Home = () => {
  return (
    
    <Layout>
   <div className='flex flex-wrap justify-center gap-4 p-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
   </div>
    </Layout>
  
  )
}

export default Home