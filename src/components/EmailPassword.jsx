import React, { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig'; // Firebase setup file
import { signInWithEmailAndPassword } from 'firebase/auth';
import GoogleSignUp from './SignUpGoogleButton';
import { useNavigate } from 'react-router-dom';

const EmailPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', userCredential.user);
            navigate('/dashboard');
            setError(''); // Clear error on successful sign in
        } catch (error) {
            console.error('Error signing in:', error);
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 h-[500px] lg:h-[450px] lg:p-8 w-full max-w-md mx-auto">
            <div className='flex flex-col justify-center items-center mb-3'>
                <div className='text-center'>
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                </div>
                <GoogleSignUp />
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mb-4">
                <div className="w-20 sm:w-40 border-t-2 border-gray-400"></div>
                <span className="text-sm">or</span>
                <div className="w-20 sm:w-40 border-t-2 border-gray-400"></div>
            </div>

            <form onSubmit={handleSignIn} className='w-full h-[600px]'>
                {error && <p className='text-red-500 text-center mb-2'>{error}</p>} {/* Display error message */}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email*</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password*</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default EmailPassword;