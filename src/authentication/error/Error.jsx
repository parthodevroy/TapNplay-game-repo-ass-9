import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
    <div className="h-screen bg-slate-800 text-red-500 flex flex-col  justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
      <p className="mt-3 text-gray-600">The page you're looking for doesn't exist.</p>

      <Link
        to="/"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;