

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider


// Default admin initializer
const defaultAdmin = {
  username: 'admin',
  password: 'admin123',
  email: 'admin@example.com',
  role: 'admin',
};

// Initialize only if no users exist
const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
if (!existingUsers.some(user => user.role === 'admin')) {
  localStorage.setItem('users', JSON.stringify([...existingUsers, defaultAdmin]));
}

function App() {
  return (
    <AuthProvider>  {/* Wrap the app with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
