import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-[65vw] grow bg-red-50 rounded-lg shadow-lg border border-red-200">
      <h1 className="text-9xl text-red-600">404</h1>
      <h1 className="text-2xl text-red-700 font-semibold mt-4">Page Not Found</h1>
      <h2 className="text-red-500 mt-2">Wrong URL...</h2>
    </div>
  );
}

export default NotFound;
