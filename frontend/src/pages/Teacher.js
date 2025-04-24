import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.js';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Teacher = () => {
  const [courses, setCourses] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/teacher/courses')
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses for teacher:', error));
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="teacher-page">
      <Sidebar role="teacher" />
      <div className="content">
        <h2>Teacher Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Teacher;
