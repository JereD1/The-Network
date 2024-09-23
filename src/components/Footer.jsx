import React from 'react';
import MainNetworkLogo from '../assets/NewNetworkLogo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='grid grid-cols-4 items-center gap-4 px-4 py-4 bg-black text-white'>
      <div className='flex flex-col'>
      <img src={MainNetworkLogo} alt="The Network Logo" className='w-28 invert'/>
        <p>The Network offers a different way to approach coding problems.</p>
        <div className='flex flex-row items-center gap-2 mt-4'>
        < FaLinkedin size={20}/>
        <FaSquareXTwitter size={20}/>
        </div>
       
      </div>
      <div className='flex flex-col'>
        <h3 className='font-bold mb-2'>Company</h3>
        <li>About</li>
        <li>Careers</li>
        <li>Contact</li>
      </div>
      <div className='flex flex-col'>
        <h3 className='font-bold mb-2'>Resources</h3>
        <li>Blog</li>
        <li>Customer Stories</li>
        <li>Podcast</li>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-white px-4 py-6 rounded-lg w-auto'>
            <h1 className='text-black mb-10 font-bold'>Subscribe to our newsletter</h1>
            <form action="">
            <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        className="border rounded-lg w-72 py-2 px-3 text-gray-700 bg-gray-100 "
                        required
                    />
                </div>
                <div className='flex justify-center items-center'>
                <button className='bg-green-800 px-28 py-2 rounded-lg hover:'>
                    Subscribe
                </button>
                </div>
                
            </form>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;