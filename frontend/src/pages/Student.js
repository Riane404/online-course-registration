// src/pages/Student.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.js';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const [courses, setCourses] = useState([]);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/courses')  // Adjust URL if necessary
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses for student:', error));
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="student-page">
      <Sidebar role="student" />
      <div className="content">
        <h2>Welcome, {user?.username} (Student)</h2>
        <button onClick={handleLogout}>Logout</button>

        <h3>Available Courses</h3>
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Student;
