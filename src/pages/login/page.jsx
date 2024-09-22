import React from 'react'
import SidePage from './SIdePage'

const page = () => {
  return (
    <div>
      <div className='flex border-2 bg-black'>
        <div className='flex-1 p-20'>
        {/* left column content */}
        <SidePage />
        Left side
        </div>
        <div className='flex-1 p-20'>
            {/* Right column content */}
            <h1>Right side</h1>
        </div>
      </div>
    </div>
  )
}

export default page
