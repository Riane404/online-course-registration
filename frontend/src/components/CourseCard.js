// src/components/CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>{course.description || 'No description provided.'}</p>
    </div>
  );
};

export default CourseCard;

