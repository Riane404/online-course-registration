// src/services/api.js
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api';  // Flask backend URL

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${apiUrl}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

export const fetchUserCourses = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${userId}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user courses:', error);
  }
};
