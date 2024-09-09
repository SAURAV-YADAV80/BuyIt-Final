import React from 'react';

function NoMatching() {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-[60vh] flex items-center justify-center bg-red-50 rounded-lg shadow-lg border border-red-200">
      <div className="text-center bg-white rounded-md shadow-md p-6 w-full max-w-md">
        <h1 className="text-red-600 text-2xl font-semibold mb-4">
          No Matching Product Found
        </h1>
        <p className="text-gray-600">
          Sorry, we couldn't find any products matching your search criteria.
          Please try adjusting your search or filter options.
        </p>
      </div>
    </div>
  );
}

export default NoMatching;
