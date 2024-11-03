import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust for production

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/auth/login`, credentials);
};

export const createBlock = async (blockData) => {
  try {
    const response = await axios.post(`${API_URL}/blockchain/create`, blockData);
    return response.data;
  } catch (error) {
    console.error('Error creating block:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export const detectAnomalies = async () => {
  return await axios.post(`${API_URL}/ai/detect-anomalies`);
};

export const getBlockchain = async () => {
  return await axios.get(`${API_URL}/block`);
};
