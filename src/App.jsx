import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/page';

const App = () => {
    return (
      <div>
        <div className=''>
     <h1>hello</h1>
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