import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const user = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1>NeuroFleetX</h1>
          <div className="user-info">
            <span>Welcome, {user?.firstName} {user?.lastName}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>
      
      <main className="home-main">
        <div className="welcome-section">
          <h2>Welcome to NeuroFleetX</h2>
          <p>AI-Driven Urban Mobility Optimization Platform</p>
        </div>
      </main>
    </div>
  );
};

export default Home;