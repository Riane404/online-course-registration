// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      <h3>{role.charAt(0).toUpperCase() + role.slice(1)} Sidebar</h3>
      <ul>
        {role === 'admin' && (
          <>
            <li><Link to="/manage-courses">Manage Courses</Link></li>
            <li><Link to="/manage-users">Manage Users</Link></li>
          </>
        )}
        {role === 'teacher' && (
          <>
            <li><Link to="/my-courses">My Courses</Link></li>
            <li><Link to="/student-list">Student List</Link></li>
          </>
        )}
        {role === 'student' && (
          <>
            <li><Link to="/available-courses">Available Courses</Link></li>
            <li><Link to="/my-registrations">My Registrations</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
