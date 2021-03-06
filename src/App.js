// Imports
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage';
import NftPage from './components/NftPage';
import RankingContainer from './components/rankings/RankingContainer';
import MarketContainer from './components/MarketContainer';

// Protected route for user when logged in  
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Acquire token from backend using localStorage
  let token = localStorage.getItem('jwtToken');
  // console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Navigate to="/login" />
  }} />
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      // console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    // console.log('===> nowCurrentUser is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">

      <Router>
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route
            path="/login"
            element={<Login nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
          />
          <Route exact path="/" element={<Homepage />} />
          {/* <Route path="/nft" element={<NftContainer />} /> */}
          <Route path="/nft/:id" element={<NftPage />} />
          <Route path="/rankings" element={<RankingContainer />} />
          <Route path="/markets" element={<MarketContainer />} />
          <Route path="/profile" element={<Profile user={currentUser} handleLogout={handleLogout} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;