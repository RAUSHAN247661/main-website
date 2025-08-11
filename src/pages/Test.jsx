import React from 'react';

const Test = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Page</h1>
        <p className="text-lg text-gray-600 mb-8">If you can see this, the basic routing is working!</p>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ React is rendering successfully
        </div>
      </div>
    </div>
  );
};

export default Test;
