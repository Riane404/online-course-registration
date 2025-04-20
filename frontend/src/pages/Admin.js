// src/pages/Admin.js
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar.js';
import axios from 'axios';

const Admin = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/courses')  // Adjust URL if necessary
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="admin-page">
      <Sidebar role="admin" />
      <div className="content">
        <h2>Admin Dashboard</h2>
        <h3>Manage Courses</h3>
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
