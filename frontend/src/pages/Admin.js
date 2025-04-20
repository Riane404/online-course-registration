import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const navigate = useNavigate();

  const handleAddAdmin = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the logged-in user is an admin
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // You need to implement this

    if (loggedInUser?.role !== 'admin') {
      alert('Only admins can add new admins!');
      return;
    }

    // Add the new admin
    const newAdmin = { username, password, role };
    storedUsers.push(newAdmin);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    console.log('New admin added:', newAdmin);
    navigate('/admin');  // Redirect to admin page after adding new admin
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
    </div>
  );
};

export default Admin;
