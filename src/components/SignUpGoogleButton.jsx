import React, { useState } from 'react';
import { auth, googleProvider, db } from '../../firebase/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUpGoogleButton = () => {
    const [error, setError] = useState('');
    const [username, setUsername] = useState(''); // State for username
    const [points, setPoints] = useState(0); // State for points

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Store user in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                username: username,
                points: points,
            });

            console.log('User signed in with Google:', user);
        } catch (err) {
            console.error('Error during Google sign in:', err);
            setError('Failed to sign in with Google');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Sign Up with Google</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border mb-4 p-2"
            />
            <input
                type="number"
                placeholder="Enter points"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                className="border mb-4 p-2"
            />
            <button
                onClick={signInWithGoogle}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
                Sign Up with Google
            </button>
        </div>
    );
}

export default SignUpGoogleButton;