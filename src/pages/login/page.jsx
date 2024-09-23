import React from 'react'
import SidePage from '../../components/SidePage'
import RightPage from '../../components/RightPage'

const page = () => {
  return (
    <div>
      <div className='flex'>
        <div className='flex-1 p-20'>
        {/* left column content */}
        <SidePage />
        
        </div>
        <div className='flex-1 p-20'>
            {/* Right column content */}
            < RightPage />
            
        </div>
      </div>
    </div>
  )
}

export default page
