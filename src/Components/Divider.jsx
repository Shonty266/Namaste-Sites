import React from 'react';

const Divider = () => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-700"></div>
    </div>
    <div className="relative flex justify-center">
      <div className="bg-[#121212] px-3">
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-teal-500"></div>
      </div>
    </div>
  </div>
);

export default Divider;