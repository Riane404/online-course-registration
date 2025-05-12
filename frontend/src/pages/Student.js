// src/pages/Student.js (modified)
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.js';
import DashboardHeader from '../components/DashboardHeader.js';
import CourseCard from '../components/CourseCard.js';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const [courses, setCourses] = useState([]);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/courses')
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
        <DashboardHeader username={user?.username} role="Student" />
        <button className="logout-button" onClick={handleLogout}>Logout</button>

        <h3>Available Courses</h3>
        <div className="course-list">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Student;
