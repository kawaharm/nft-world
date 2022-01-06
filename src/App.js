// Imports
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Homepage from './components/Homepage';
import NftContainer from './components/NftContainer';
import NftPage from './components/NftPage';


// Protected route for user when logged in  
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Acquire token from backend using localStorage
  let token = localStorage.getItem('jwtToken');
  // console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login" />
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
        <Routes>
          <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
          <div className="container">
            <Route exact path="/" element={<Homepage />} />
            <Route path="/nft" element={<NftContainer />} />
            <Route path="/nft/cryptopunks" element={<NftPage collection={"cryptopunks"} />} />
            <Route path="/nft/boredapeyachtclub" element={<NftPage collection={"boredapeyachtclub"} />} />
            <Route path="/nft/mutant-ape-yacht-club" element={<NftPage collection={"mutant-ape-yacht-club"} />} />
            <Route path="/nft/collectvoxmirandus" element={<NftPage collection={"collectvoxmirandus"} />} />
            <Route path="/cryptopunks" element={<CryptoContainer />} />
          </div>

        </Routes>
      </Router>
    </div>
  );
}

export default App;