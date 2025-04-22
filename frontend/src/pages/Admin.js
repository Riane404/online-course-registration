import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleAddAdmin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser?.role !== 'admin') {
      alert('Only admins can add new admins!');
      return;
    }

    const newAdmin = { username, password, role };
    storedUsers.push(newAdmin);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    console.log('New admin added:', newAdmin);
    navigate('/admin');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-page">
      <h2>Add New Admin</h2>
      <form onSubmit={handleAddAdmin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add Admin</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;
