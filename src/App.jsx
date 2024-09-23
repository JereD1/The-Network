import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/page';
import Home from './pages/home/page';

const App = () => {
    return (
      <div className=''>
        <Router> 
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
               </Router>
        
               </div>
    );
};

export default App;
