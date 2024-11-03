// src/components/Blockchain.js

import React, { useEffect, useState } from 'react';
import { getBlockchain } from '../api';

const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlockchain = async () => {
      const response = await getBlockchain();
      setBlocks(response.data);
    };
    fetchBlockchain();
  }, []);

  return (
    <div>
      <h2>Blockchain</h2>
      {blocks.map((block) => (
        <div key={block._id}>
          <p>Index: {block.index}</p>
          <p>Timestamp: {block.timestamp}</p>
          <p>Data: {block.data}</p>
          <p>Hash: {block.hash}</p>
          <p>Previous Hash: {block.previousHash}</p>
        </div>
      ))}
    </div>
  );
};

export default Blockchain;
