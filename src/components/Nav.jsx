
import MainNetworkLogo from '../assets/NewNetworkLogo.png'
import LoginPage from '../pages/login/page'


const Nav = () => {
  return (
    <div>
      <div className='lg:px-20 lg:py-2 lg:mx-10'>
        <div className='flex items-center justify-between'>
          <img src={MainNetworkLogo} alt="The Network Logo" className='invert w-40'/> 
           <div className='flex items-center gap-10 text-white'>
            <li className='hover:text-green-500'>Home</li>
            <li className='hover:text-green-500'>Vision</li>
            <li className='hover:text-green-500'>Team</li>
            </div>       
          <div className='flex gap-10'>
            <Link to='/login'>
            <button className='text-white border-green-500 border rounded-lg px-6 py-2 hover:bg-green-600'>Sign Up</button>
            </Link>
            <Link to='/login'>
            <button className='text-white bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600'>Login</button>
            </Link>
            </div>
      </div>
      </div> 
    </div> 
  )
}

export default Nav
