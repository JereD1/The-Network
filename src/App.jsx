import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import DashboardLayout from './layout/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import Settings from './components/Settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardLayout />} >
        <Route index element={<DashboardPage />} />
        <Route path='setting' element={<Settings />} /> {/* Corrected path */}
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;