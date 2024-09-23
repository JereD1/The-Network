import React, { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig'; // Ensure you have Firebase configured

const ForgotPasswordModal = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        try {
            await auth.sendPasswordResetEmail(email);
            setSuccess(true);
        } catch (error) {
            console.error('Error sending password reset email:', error);
            setError(error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md w-[400px]">
                <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
                <p>Please enter your email to reset your password.</p>
                <form onSubmit={handleResetPassword}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="border rounded-lg w-full py-2 px-3 mt-2"
                        required
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && <p className="text-green-500 mt-2">Check your email for reset instructions!</p>}
                    <div className="flex justify-end mt-4">
                        <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
                            Cancel
                        </button>
                        <button type="submit" className="bg-black hover:bg-zinc-800 text-white font-bold py-1 px-4 rounded ml-2">
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;