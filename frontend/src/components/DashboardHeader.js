import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = ({ username, role }) => {
  return (
    <div className="dashboard-header">
      <h1>Welcome back, {username}!</h1>
      <p>You are logged in as <strong>{role}</strong></p>
    </div>
  );
};

export default DashboardHeader;

