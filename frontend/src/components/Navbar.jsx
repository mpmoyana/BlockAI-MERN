import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">BlockAI-MERN</Link>
        </h1>
        <div>
          <Link to="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link to="/blockchain" className="mr-4 hover:underline">
            Blockchain
          </Link>
          <Link to="/anomaly-detector" className="mr-4 hover:underline">
            Anomaly Detector
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
