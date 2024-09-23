import React from 'react'
import MainNetworkLogo from '../assets/NewNetworkLogo.png'

const Nav = () => {
  return (
    <div className='flex flex-row items-center justify-center '>
        <div className=''>
      <div className='flex items-center gap-56'>
        <img src={MainNetworkLogo} alt="The Network Logo" className='w-40'/>        
        <div className='flex gap-10'>
            <button className='text-white border-green-500 border rounded-full px-6 py-2 hover:bg-green-600'>Sign Up</button>
            <button className='text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-600'>Login</button>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Nav
