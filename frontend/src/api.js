import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust for production

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/auth/login`, credentials);
};

export const createBlock = async (blockData) => {
  return await axios.post(`${API_URL}/block`, blockData);
};

export const detectAnomalies = async () => {
  return await axios.post(`${API_URL}/ai/detect-anomalies`);
};

export const getBlockchain = async () => {
  return await axios.get(`${API_URL}/block`);
};
