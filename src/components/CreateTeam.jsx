import React from 'react'
import TeamBG from '../assets/Team.png'

const CreateTeam = () => {
  return (
    <div className='bg-holder  my-10'>
        <div className='flex flex-cols-2 items-center justify-around py-10'>
        <div className='flex flex-col text-white'>
            <h1 className='text-2xl w-56 my-2'>Create a team of <span className='font-bold'>Network.</span></h1>
            <p>Solve and crack problems together</p>
            <div>
            <button className='text-white font-bold my-2 bg-green-500 px-4 py-2 rounded-lg'>Create Team</button>
            </div>
        </div>
        <div className='flex flex-col '>
            <img src={TeamBG} width={400} alt="Create team background image"  className=''/>
        </div>
        </div>
    </div>
  )
}

export default CreateTeam
