// src/pages/Student.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.js';
import axios from 'axios';

const Student = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/courses')  // Adjust URL if necessary
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses for student:', error));
  }, []);

  return (
    <div className="student-page">
      <Sidebar role="student" />
      <div className="content">
        <h2>Student Dashboard</h2>
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
