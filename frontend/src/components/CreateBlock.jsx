import React, { useState, useEffect } from 'react';
import { createBlock } from '../api';
import { useNavigate  } from 'react-router-dom';

const CreateBlock = () => {
  const [data, setData] = useState('');
  const [previousHash, setPreviousHash] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate ();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBlock({ data, previousHash });
      setMessage('Block created successfully');
      navigate('/blockchain')
      console.log(response);
    } catch (error) {
      setMessage('Failed to create block');
      console.error(error);
    }
  };

  // Automatically clear the message after 2-3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 2000); // 3000 ms = 3 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [message]);

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-gray-100 rounded shadow">
      <input 
        type="text" 
        placeholder="Data" 
        value={data} 
        onChange={(e) => setData(e.target.value)} 
        className="w-full p-2 mb-3 border rounded"
      />
      <input 
        type="text" 
        placeholder="Previous Hash" 
        value={previousHash} 
        onChange={(e) => setPreviousHash(e.target.value)} 
        className="w-full p-2 mb-3 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Create Block</button>

      {message && (
        <p className={`mt-4 text-center font-medium ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default CreateBlock;
