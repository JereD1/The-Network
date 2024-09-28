import { useState } from 'react';
import MainNetworkLogo from '../assets/NewNetworkLogo.png';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu'; // Import the MobileMenu component

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mx-5'>
      <div className='lg:px-20 lg:py-2 lg:mx-10 flex items-center justify-between'>
        <img src={MainNetworkLogo} alt="The Network Logo" className='invert w-40' />
        
        <div className='hidden lg:flex items-center gap-10 text-white'>
          <li className='hover:text-green-500'>Home</li>
          <li className='hover:text-green-500'>Vision</li>
          <li className='hover:text-green-500'>Team</li>
        </div>

        <div className='hidden lg:flex gap-10'>
          <Link to='/login'>
            <button className='text-white border-green-500 border rounded-lg px-6 py-2 hover:bg-green-600'>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button className='text-white bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600'>Login</button>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='lg:hidden flex'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg className='w-8 h-8' fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Nav;