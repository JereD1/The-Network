import { Outlet } from "react-router-dom"
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { requireAuth } from '../../firebase/auth'
import DashboardNav from '../components/DashboardNav'

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
      const checkAuth = async () => {
          await requireAuth(navigate);
      };
      checkAuth();
  }, [navigate]);



  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <DashboardNav />
        </div>
        <div className="flex-grow md:overflow-y-auto md:p-12">
        <Outlet />
        </div>
        
     </div>
  )
}

export default DashboardLayout
