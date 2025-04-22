import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');  // Default role as student
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if there is already an admin
    if (role === 'admin' && storedUsers.some(user => user.role === 'admin')) {
      alert('An admin already exists. Only one admin is allowed.');
      return;
    }

    // Store the new user
    const newUser = { username, email, password, role };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    console.log('User Registered:', newUser); // For now, log the data

    // After successful registration, redirect to the login page
    navigate('/');
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
