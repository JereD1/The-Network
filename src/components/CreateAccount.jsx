import React, { useState } from 'react';
import { auth, db } from '../../firebase/firebaseConfig'; // Firebase setup file
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import GoogleSignUp from './SignUpGoogleButton';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const points = 0; // Initialize points
    const tasksCompleted = 0; // Initialize tasks completed

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                username: username,
                points: points,
                tasksCompleted: tasksCompleted, // Adding tasks completed
            });

            console.log('User signed up and added to Firestore');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error signing up:', error);
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 h-screen lg:h-[600px] w-full max-w-md mx-auto">
            <div className='flex flex-col justify-center items-center mb-3'>
                <div className='text-center'>
                    <h1 className="text-2xl font-bold">Create account</h1>
                    <h2 className="text-sm">Join our 100% free creative network</h2>
                </div>
                <GoogleSignUp />
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mb-4">
                <div className="w-20 border-t-2 border-gray-400"></div>
                <span className="text-sm">or</span>
                <div className="w-20 border-t-2 border-gray-400"></div>
            </div>

            <form onSubmit={handleSignUp} className='w-full'>
                {error && <p className='text-red-500 text-center mb-2'>{error}</p>} {/* Display error message */}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>

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
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default CreateAccount;