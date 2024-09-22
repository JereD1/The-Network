import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/page';

const App = () => {
    return (
      <div>
        <div className='mt-10 ml-2'>
          Hello 
        </div>
        <Router> 
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
               </Router>
               </div>
    );
};

export default App;