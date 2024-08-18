import React from 'react'

const Login = () => {
  return (
    <div className=' flex justify-center'>
      <div className='border border-black rounded p-4 bg-orange-100' >
        <p className='font-bold text-3xl'>Log In to</p>
        <p className='font-bold text-2xl'>Rotten Tomatoes</p>
        <br /><br />
        <form action="" className='flex flex-col gap-3 '>
          <label htmlFor="lable">Email:</label>
          <input type="email" placeholder='Enter your email' name='email' className='border rounded w-[300px]' />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password"  placeholder='Enter Password' className='border rounded w-[300px]' />
          <button  className='bg-blue-500 m-auto py-2 px-4 border rounded'>Log In</button>
        </form>
        </div>
    </div>
  )
}

export default Login
