import React from 'react';
import TeamBG from '../assets/Team.png';

const CreateTeam = () => {
  return (
    <div className='bg-holder my-10'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-around py-10'>
        <div className='flex flex-col text-white text-center lg:text-left'>
          <h1 className='text-2xl w-full my-2'>
            Create a team of <span className='font-bold'>Network.</span>
          </h1>
          <p>Solve and crack problems together</p>
          <div>
            <button className='text-white font-bold my-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200'>
              Create Team
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center lg:items-end'>
          <img src={TeamBG} className='w-full max-w-[400px] h-auto' alt="Create team background image" />
        </div>
      </div>
    </div>
  );
}

export default CreateTeam;