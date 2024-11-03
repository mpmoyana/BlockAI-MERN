import React from 'react';
import CreateBlock from './CreateBlock';

const Home = () => {
  return (
    <>
        <div className="p-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Welcome to BlockAI-MERN
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Explore blockchain data and detect anomalies with AI integration.
            </p>
        </div>
        <div className="">
            <CreateBlock />
        </div>
    </>
    
  );
};

export default Home;
