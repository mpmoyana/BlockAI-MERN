// src/components/DetectAnomalies.js

import React, { useState } from 'react';
import { detectAnomalies } from '../api';

const DetectAnomalies = () => {
  const [anomalies, setAnomalies] = useState([]);
  const [message, setMessage] = useState('');

  const handleDetect = async () => {
    try {
      const response = await detectAnomalies();
      setAnomalies(response.data.anomalies);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error detecting anomalies:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDetect}>Detect Anomalies</button>
      {message && <p>{message}</p>}
      {anomalies.map((anomaly) => (
        <div key={anomaly._id}>
          <p>Index: {anomaly.index}</p>
          <p>Timestamp: {anomaly.timestamp}</p>
          <p>Data: {anomaly.data}</p>
        </div>
      ))}
    </div>
  );
};

export default DetectAnomalies;
