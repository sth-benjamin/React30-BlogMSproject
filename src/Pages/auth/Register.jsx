import React from 'react'
import Form from './components/Form.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const handleRegister = async(data)=>{
  try {const response = await axios.post("https://react30.onrender.com/api/user/register",data)
  if(response.status === 201){
    navigate('/login')
   }else{
    alert("Registration failed")
   }
  } catch (error) {
    alert(error?.response?.data?.message || "An error occurred")
  }
}
  return (
   <Form type='Register'onSubmit={handleRegister} />
  )
}

export default Register