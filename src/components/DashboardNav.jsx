import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebaseConfig'; // Import your auth configuration
import { signOut } from 'firebase/auth';
import TheNetwork from '../assets/NewNetworklogo.png';
import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';

const DashboardNav = () => {
    const [user, setUser] = useState(null);
    const [activeButton, setActiveButton] = useState('dashboard'); // Default active button
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser({
                    username: currentUser.displayName || 'Guest',
                    email: currentUser.email,
                    photoURL: currentUser.photoURL
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/'); // Redirect to homepage after logout
    };

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className='flex flex-col pl-4 pr-5 py-5 h-screen border-2'>
            <div className='flex justify-center items-center border-b-2 mb-10'>
                <img src={TheNetwork} alt="The NetWork Logo" className='w-28'/>
            </div>
            <div className='mb-5'>
                <div className='my-4'>
                    <h3 className='text-xs text-gray-600 font-bold'>MAIN MENU</h3>
                </div>
                <div className='flex flex-col gap-3'>
                    <Link to='' className='flex flex-col'>
                        <button
                            className={`px-2 py-5 hover:bg-zinc-700 hover:text-white ${activeButton === 'dashboard' ? 'text-white bg-black' : 'text'} transition duration-200`}
                            onClick={() => handleButtonClick('dashboard')}
                        >
                            Dashboard
                        </button>
                    </Link>
                    <Link to='cases' className='flex flex-col'>
                    <button
                        className={`px-2 py-5  hover:bg-zinc-700 hover:text-white ${activeButton === 'cases' ? 'text-white bg-black' : 'text'} transition duration-200`}
                        onClick={() => handleButtonClick('cases')}
                    >
                        Cases
                    </button>
                    </Link>
                    <button
                        className={`px-2 py-5  hover:bg-zinc-700 hover:text-white ${activeButton === 'solved' ? 'text-white bg-black' : 'text'} transition duration-200`}
                        onClick={() => handleButtonClick('solved')}
                    >
                        Solved Cases
                    </button>
                </div>
            </div>

            <div className='mb-5'>
                <div className='flex justify-between my-4'>
                    <h3 className='text-xs text-gray-600 font-bold'>TEAMS</h3>
                    <button><GoPlus/></button>
                </div>
                <div className='flex flex-col gap-3'>
                    <button className='px-2 py-5'>Dev</button>
                </div>
            </div>

            <div className='mb-10'>
                <div className='my-4'>
                    <h3 className='text-xs text-gray-600 font-bold'>OTHER</h3>
                </div>
                <div className='flex flex-col gap-3'>
                    <Link to='setting' className='flex flex-col'>
                    <button className={`px-2 py-5  hover:bg-zinc-700 hover:text-white ${activeButton === 'setting' ? 'text-white bg-black' : 'text'} transition duration-200`}
                        onClick={() => handleButtonClick('setting')}>Settings</button>
                    </Link>
                    
                    <button onClick={handleLogout} className='px-2 py-5  hover:bg-zinc-700 hover:text-white'>Log out</button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='flex flex-col items-center'>
                    <img
                        src={user?.photoURL || ''} // Fallback image
                        alt=""
                        className='rounded-full w-24 h-24 mb-2'
                    />
                    <h2 className='font-bold'>{user?.username || 'Anonymous'}</h2>
                    <h2 className='text-sm'>{user?.email || 'Anonymous@gmail.com'}</h2>
                </div>
            </div>
        </div>
    );
}

export default DashboardNav;