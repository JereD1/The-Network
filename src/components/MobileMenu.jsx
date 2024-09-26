import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    isOpen && (
      <div className='fixed top-20 right-0 flex flex-col items-end h-screen w-1/2 bg-holder text-white p-5'>
        <li  className='block py-2 hover:text-green-500'>Home</li>
        <li  className='block py-2 hover:text-green-500'>Vision</li>
        <li  className='block py-2 hover:text-green-500'>Team</li>
        <Link to='/signup' onClick={toggleMenu} className='block py-2'>
          <button className='text-white border-green-500 border rounded-lg px-6 py-2 hover:bg-green-600'>Sign Up</button>
        </Link>
        <Link to='/login' onClick={toggleMenu} className='block py-2'>
          <button className='text-white bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600'>Login</button>
        </Link>
      </div>
    )
  );
};

export default MobileMenu;