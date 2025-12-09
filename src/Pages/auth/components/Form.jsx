import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// 1. FIX: Added 'onSubmit' to the destructured props
const Form = ({type, onSubmit}) => { 
    const [data, setData] = useState({
        email: '',
        username: '', 
        password: ''    
    })
    
    const handleChange =(e)=>{
      const{name,value}= e.target
      
      // OPTIONAL: Using the data state to control input values (recommended for React forms)
      setData({...data,[name]:value}) 
    }
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      // 2. FIX: 'onSubmit' is now defined and called with the form data
      onSubmit(data) 
    }

  return (
    // Outer form correctly uses the handleSubmit handler
    <form onSubmit={handleSubmit}>
      <div class="lg:min-h-screen flex fle-col items-center justify-center p-6">
        <div class="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
          <div>
            <h1 class="lg:text-5xl text-4xl font-bold text-slate-900 !leading-tight"> 
              {type === 'Login' ? 'Login here to continue': 'Register your account now'}
            </h1>
            <p class="text-[15px] mt-6 text-slate-600 leading-relaxed">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
          </div>

          {/* 3. FIX: Replaced the redundant inner <form> tag with a <div> */}
          <div class="max-w-md lg:ml-auto w-full"> 
            <h2 class="text-slate-900 text-3xl font-semibold mb-8">
              Sign in
            </h2>

            <div class="space-y-6">
              <div>
                <label class='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
                {/* Added value prop for controlled component */}
                <input name="email" type="email" id="email" required class="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Email" onChange={handleChange} value={data.email} />
              </div>
              {
                type === 'Register' && (
                  <div>
                    <label class='text-sm text-slate-900 font-medium mb-2 block'>Username</label>
                    {/* Updated type to 'text' and added value prop */}
                    <input name="username" type="text" required class="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Username" onChange={handleChange} value={data.username}/>
                  </div>
                )
              }
              <div>
                <label class='text-sm text-slate-900 font-medium mb-2 block'>Password</label>
                {/* Added value prop */}
                <input name="password" type="password" required class="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Password" onChange={handleChange} value={data.password} />
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                  <label htmlFor="remember-me" class="ml-3 block text-sm text-slate-900">
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a href="jajvascript:void(0);" class="text-blue-600 hover:text-blue-500 font-medium">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div class="!mt-12">
              {/* 4. FIX: Changed type to "submit" to trigger the form's onSubmit handler */}
              <button type="submit" class="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                Submit
              </button>
            </div>

            <div class="my-6 flex items-center gap-4">
              <hr class="w-full border-slate-300" />
              <p class="text-sm text-slate-900 text-center">or</p>
              <hr class="w-full border-slate-300" />
            </div>

            <div class="space-x-6 flex justify-center">
              <button type="button" class="border-0 outline-0 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">...</svg>
              </button>
              <button type="button" class="border-0 outline-0 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">...</svg>
              </button>
              <button type="button" class="border-0 outline-0 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 22.773 22.773">...</svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        type === 'Register' ?(
        <Link to='/login' style={{color:'blue'}}>Go to login</Link>
        ) :(
          <Link to='/Register'>Go to Register</Link>
        )
      }
    </form>
  )
}

export default Form