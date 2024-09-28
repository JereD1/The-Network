import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { requireAuth } from '../../firebase/auth'
import Dashboard from '../components/Dasboard'
import Setting from '../components/Settings'

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
        < Dashboard />
    </div>
  )
}

export default DashboardPage
