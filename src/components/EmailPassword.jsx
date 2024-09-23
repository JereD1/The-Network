import React, { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig'; // Firebase setup file
import { signInWithEmailAndPassword } from 'firebase/auth';
import GoogleSignUp from './SignUpGoogleButton';

const EmailPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            // Sign in with email and password
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', userCredential.user);

            // Clear error on successful sign in
            setError('');
        } catch (error) {
            console.error('Error signing in:', error); // Log the error for debugging
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-start p-4 h-[740px]">
            <div className='flex flex-col justify-center items-start mb-3'>
                <div className='mx-6'>
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                </div>
                <GoogleSignUp />
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mb-4">
                <div className="w-[175px] border-t-2 border-gray-400"></div>
                <span>or</span>
                <div className="w-[175px] border-t-2 border-gray-400"></div>
            </div>

            <form onSubmit={handleSignIn} className='w-[450px]'>
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