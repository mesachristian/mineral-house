// LIBRARIES
import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';

// STYLES
import './styles.css';

const WebPage = () => {

  return (
    <Router style={{display : 'block'}}>
        <Navbar />
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default WebPage;