import React from 'react'
import TheNetwork from '../assets/code.png'

const AboutUs = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-white'>
            <h1 className='text-lg text-center'>Who are we</h1>
            <h2>We are determined to improve your problem solving skills</h2>
        </div>
        <div className='flex justify-center items-center mt-10 mb-20'>
            <div className='w-[500px] h-[500px] bg-holder items-center'>
             <img src={TheNetwork} width='500px' alt="TheNetwork" />
            </div>
            <div className='absolute right-[500px] w-[300px] h-[300px] flex  items-center bg-green-800'>
                <div className='text-white px-5 py-4'>
                    <h1 className='font-bold my-2'>The Network</h1>
                    <h2 className='text-sm'>A Community that thrives for growth,
                         intelligence and collaboration among young and bright individual</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
