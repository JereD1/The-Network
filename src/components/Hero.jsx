import React from 'react'
import HeroBG from '../assets/Hero.png'

const Hero = () => {
  return (
    <div>
      <div className='flex flex-2 items-center justify-between mx-10 py-10'>
        <div className='flex flex-col text-white'>
            <h1 className='text-[80px] w-40 leading-none '>Connecting Intelligence</h1>
            <h3 className='text-green-600 text-xl font-bold'>Better.</h3>
            <div className='my-5'>
                Save agents in the field
            </div>
            <div className='my-5'>
                <button className='bg-green-500 font-bold px-5 py-3 rounded-lg hover:bg-green-700'>Crack Case</button>
            </div>
        </div>
        <div className='flex flex-col'>
            <img src={HeroBG} width='650px' alt="image"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
