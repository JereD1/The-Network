import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import DashboardLayout from './layout/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage />}  />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/dashboard' element={<DashboardLayout />}  />
    <Route path='/dashboard' element={<DashboardPage />} />
    </Route>
    
)
);

const App = () => {
  return  <RouterProvider router={router} />;
    
}

export default App;
