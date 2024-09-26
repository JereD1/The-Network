import { auth } from './firebaseConfig'; // Adjust the path to your Firebase config file
import { onAuthStateChanged } from 'firebase/auth';

// Check if the user is authenticated
const isAuthenticated = () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve(!!user); // Resolve true if user is logged in, else false
        });
    });
};

// Redirect to login if not authenticated
const requireAuth = async (navigate) => {
    const isLoggedIn = await isAuthenticated();
    if (!isLoggedIn) {
        navigate('/login'); // Redirect to login page
    }
};

// Export the authentication functions
export { isAuthenticated, requireAuth };