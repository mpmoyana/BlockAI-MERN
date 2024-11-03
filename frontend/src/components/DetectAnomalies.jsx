import React, { useState } from 'react';
import axios from 'axios';

const AnomalyDetector = () => {
  const [anomalies, setAnomalies] = useState([]); // Initialize with an empty array
  const [message, setMessage] = useState('');

  const detectAnomalies = async () => {
    try {
      const response = await detectAnomalies();
      setAnomalies(response.data.anomalies || []); // Fallback to an empty array if undefined
      setMessage(response.data.message || 'Anomalies detected');
    } catch (error) {
      console.error('Error detecting anomalies:', error);
      setMessage('Failed to detect anomalies.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Anomaly Detection</h2>
      {/* <button
        onClick={detectAnomalies}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        Detect Anomalies
      </button> */}
      <p className="text-gray-600 mt-4">{message}</p>

      {/* Only render anomalies if they exist */}
      {anomalies.length > 0 ? (
        <div className="space-y-4 mt-6">
          {anomalies.map((block, index) => (
            <div key={index} className="p-4 bg-red-100 shadow rounded">
              <p><strong>Index:</strong> {block.index}</p>
              <p><strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}</p>
              <p><strong>Data:</strong> {block.data}</p>
              <p><strong>Hash:</strong> {block.hash}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-4xl text-green-500">No anomalies detected yet.</p>
      )}
    </div>
  );
};

export default AnomalyDetector;
