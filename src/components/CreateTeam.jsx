import React from 'react'

const CreateTeam = () => {
  return (
    <div className='bg-holder  my-10'>
        <div className='grid grid-cols-2 px-40 py-20'>
        <div className='flex flex-col text-white'>
            <h1 className='text-2xl w-56 my-2'>Create a team of <span className='font-bold'>Network.</span></h1>
            <p>Solve and crack problems together</p>
            <div>
            <button className='text-white font-bold my-2 bg-green-500 px-4 py-2 rounded-lg'>Create Team</button>
            </div>
        </div>
        <div className='flex flex-col '>
            <h1>For Image!</h1>
        </div>
        </div>
    </div>
  )
}

export default CreateTeam
