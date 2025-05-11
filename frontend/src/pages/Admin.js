import React from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-page">
      <Sidebar role="admin" />
      <div className="content">
        <h2>Admin Dashboard</h2>
        <p>Welcome, {user?.username}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Admin;
