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
        <p>Email: support@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className='flex flex-col'>
        <h3 className='font-bold mb-2'>Follow Us</h3>
        <p>Stay connected on social media.</p>
        <p>
          <a href="#" className="text-blue-400">Facebook</a>
          <br />
          <a href="#" className="text-blue-400">Twitter</a>
          <br />
          <a href="#" className="text-blue-400">Instagram</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;