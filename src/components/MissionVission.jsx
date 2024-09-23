import React from 'react'
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { GiBlackHandShield } from "react-icons/gi";

const MissionVission = () => {
  return (
    <div className="">
        <div className='flex flex-col justify-center items-center text-white'>
            <h1 className='text-lg'>Our Values</h1>
            <p className='text-xl'>Our Mission & Vission</p>
        </div>
    <div className='bg-holder my-10'>
        <div className='grid grid-cols-3 px-32 py-20 mx-10 '>
        <div className='flex flex-col'>
                <div className='bg-white px-7 py-10 w-[350px]'>
                    <MdOutlineCastForEducation size={20} />
                        <h1 className='font-bold text-lg my-4'>Education</h1>
                            <p className='text-sm '>We are committed to helping you thrive by providing 
                                 personalized learning experiences, practical skills, and engaging 
                                 content that inspires curiosity. </p>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-7 py-10 w-[350px]'>
                    <FaUserFriends size={20} />
                        <h1 className='font-bold text-lg my-4'>Collaboration</h1>
                            <p className='text-sm '>We are committed to helping you thrive by providing 
                                 personalized learning experiences, practical skills, and engaging 
                                 content that inspires curiosity. </p>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-7 py-10 w-[350px]'>
                    <GiBlackHandShield size={20} />
                        <h1 className='font-bold text-lg my-4'>Inspiration</h1>
                            <p className='text-sm '>We are committed to helping you thrive by providing 
                                 personalized learning experiences, practical skills, and engaging 
                                 content that inspires curiosity. </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MissionVission
