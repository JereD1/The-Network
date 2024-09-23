import React, { useState } from 'react';
import CreateAccount from './CreateAccount';
import LoginEmailPassword from './EmailPassword';
import ForgotPasswordModal from './ForgotPasswordModal'; // Import your modal component

const RightPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div>
                {isLogin ? (
                    <LoginEmailPassword />
                ) : (
                    <CreateAccount />
                )}
            </div>
            <div className='flex justify-center items-center w-[450px] mb-4'>
                <h1 className='text-sm'>
                    {isLogin ? (
                        <>
                            Don't have an account? <span className='font-bold cursor-pointer' onClick={toggleLogin}>Sign up</span>
                        </>
                    ) : (
                        <>
                            Already have an account? <span className='font-bold cursor-pointer' onClick={toggleLogin}>Login</span>
                        </>
                    )}
                </h1>
            </div>
            <div className='flex justify-center items-center w-[450px] gap-28'>
                <h1 className='text-sm'>
                    <span className='font-bold cursor-pointer' onClick={openModal}>Forgot password?</span>
                </h1>
            </div>
            {isModalOpen && <ForgotPasswordModal closeModal={closeModal} />}
        </div>
    );
};

export default RightPage;