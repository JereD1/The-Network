import { Link } from 'react-router-dom';
import HeroBG from '../assets/Hero.png';

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mx-4 my-4 lg:mx-20 lg:my-20 py-10'>
      <div className='flex flex-col text-white mb-10 lg:mb-0 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-[80px] w-full lg:w-1/2 lg:leading-none'>Connecting Intelligence</h1>
        <h3 className='text-green-600 lg:text-xl text-2xl font-bold'>Better.</h3>
        <div className='my-5 text-lg'>Save agents in the field</div>
        <div className='my-5'>
          <Link to='/dashboard'>
            <button className='bg-green-500 font-bold px-5 py-3 rounded-lg hover:bg-green-700 transition duration-200'>
              Crack Case
            </button>
          </Link>
        </div>
      </div>
      <div className='hidden lg:flex flex-col items-center lg:items-end'>
        <img src={HeroBG} className='w-full lg:w-' alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;