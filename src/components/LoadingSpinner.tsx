import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-50">
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-custom-blue animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-custom-blue animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-custom-blue animate-bounce [animation-delay:-.5s]"></div>
    </div>
  </div>
);

export default LoadingSpinner;
