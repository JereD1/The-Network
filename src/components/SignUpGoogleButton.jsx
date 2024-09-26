import React, { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SignUpGoogleButton = () => {
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();
    const db = getFirestore();
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;

            // Define username and points (adjust these values as needed)
            const username = user.displayName || 'Anonymous'; // Example username
            const points = 0; // Default points

            // Store user in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                username: username,
                points: points,
            });

            console.log('User signed in with Google:', user);

            navigate('/dashboard');
        } catch (err) {
            console.error('Error during Google sign in:', err);
            setError('Failed to sign in with Google');
        }
    };

    return (
        <div className='flex flex-col justify-center items-center my-4'>
        <button 
            onClick={signInWithGoogle} 
            className='flex justify-center gap-2 items-center border-2 rounded-lg w-full sm:w-[400px] p-2 hover:border-black transition duration-200'
        >
            <FcGoogle size={25} />
            <span className='text-black'>Sign up with Google</span>
        </button>
        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </div>
    );
}

export default SignUpGoogleButton;