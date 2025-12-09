import React from 'react'
import Form from './components/Form.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const handleLogin = async(data)=>{
  try {const response = await axios.post("https://react30.onrender.com/api/user/login",data)
  if(response.status === 200){
    navigate('/')
   }else{
    alert("Login failed")
   }
  } catch (error) {
    alert(error?.response?.data?.message || "An error occurred during login")
  }

  }
  return (
    <Form type='Login' onSubmit={handleLogin}/>
  )
}

export default Login