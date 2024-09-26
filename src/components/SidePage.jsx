import React from 'react'
import NetworkLogo from '../assets/The Network Logo.png'
import John from '../assets/john.jpg'

const SidePage = () => {
 
  const Quote = "Leadership and learning are indispensable to each other. The one cannot exist without the other. The success of any organization or community depends on the ability to learn from the past and adapt to new challenges.";

  return (
    <div className='flex flex-col'>
      <div className='bg-green-50 px-6 py-5'>
          <img src={NetworkLogo} alt='Network Logo' className='w-20' />
          <div className='mt-40 mb-40'>
            <p>Master your tech stack </p>
            <h2>Our registeration process is quick and easy, takes 2-3 minutes to complete</h2>
          </div>
          <div className='bg-zinc-800 mb-28 px-10 py-6 rounded-lg'>
            <h2 className='text-white mb-2'>{Quote} </h2>
              <div className='flex gap-4 my-4'>
                <img src={John} alt='Albert Einstein'  className='John w-14 h-14 contain rounded-full' />
                <div className='flex flex-col'>
                  <h2 className='text-white'>John F. Kennedy </h2>
                  <h3 className='text-zinc-400'>35th U.S President</h3>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SidePage;
