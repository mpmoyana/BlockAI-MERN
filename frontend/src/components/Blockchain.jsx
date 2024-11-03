import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlockchain = async () => {
      const response = await axios.get('http://localhost:5000/api/blockchain');
      setBlocks(response.data);
    };
    fetchBlockchain();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Blockchain Data</h2>
      <div className="space-y-4">
        {blocks.map(block => (
          <div key={block.index} className="p-4 bg-white shadow rounded">
            <p><strong>Index:</strong> {block.index}</p>
            <p><strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}</p>
            <p><strong>Data:</strong> {block.data}</p>
            <p><strong>Hash:</strong> {block.hash}</p>
            <p><strong>Previous Hash:</strong> {block.previousHash}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blockchain;
