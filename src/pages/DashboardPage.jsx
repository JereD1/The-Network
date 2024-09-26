import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { requireAuth } from '../../firebase/auth'

const DashboardPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            await requireAuth(navigate);
        };
        checkAuth();
    }, [navigate]);

    
  return (
    <div>
        <div>
            helllo
        </div>
      
    </div>
  )
}

export default DashboardPage
