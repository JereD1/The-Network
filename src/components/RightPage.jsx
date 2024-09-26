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
        <div className="flex flex-col items-center justify-center p-4 sm:p-2 lg:p-8 h-[600px] lg:h-[800px]">
            <div className="flex flex-col w-full ">
                {isLogin ? (
                    <LoginEmailPassword />
                ) : (
                    <CreateAccount />
                )}
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-md mb-4 gap-4">
                <h1 className="text-sm text-center">
                    {isLogin ? (
                        <>
                            Don't have an account? <span className="font-bold cursor-pointer" onClick={toggleLogin}>Sign up</span>
                        </>
                    ) : (
                        <>
                            Already have an account? <span className="font-bold cursor-pointer" onClick={toggleLogin}>Login</span>
                        </>
                    )}
                </h1>
                <h1 className="text-sm text-center">
                    <span className="font-bold cursor-pointer" onClick={openModal}>Forgot password?</span>
                </h1>
            </div>
            {isModalOpen && <ForgotPasswordModal closeModal={closeModal} />}
        </div>
    );
};

export default RightPage;