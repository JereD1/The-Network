import { Outlet } from "react-router-dom"
import DashboardNav from '../components/DashboardNav'

const DashboardLayout = () => {
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
