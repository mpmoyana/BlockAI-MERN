// src/components/CreateBlock.js

import React, { useState } from 'react';
import { createBlock } from '../api';

const CreateBlock = () => {
  const [data, setData] = useState('');
  const [previousHash, setPreviousHash] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBlock({ data, previousHash });
      setMessage('Block created successfully');
      console.log(response.data);
    } catch (error) {
      setMessage('Failed to create block');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Data" 
        value={data} 
        onChange={(e) => setData(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Previous Hash" 
        value={previousHash} 
        onChange={(e) => setPreviousHash(e.target.value)} 
      />
      <button type="submit">Create Block</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CreateBlock;
