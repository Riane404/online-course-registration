// src/pages/Teacher.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.js';
import axios from 'axios';

const Teacher = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/teacher/courses')  // Adjust URL if necessary
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses for teacher:', error));
  }, []);

  return (
    <div className="teacher-page">
      <Sidebar role="teacher" />
      <div className="content">
        <h2>Teacher Dashboard</h2>
        <h3>My Courses</h3>
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
