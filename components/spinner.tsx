// components/Spinner.tsx
import React from 'react';

const spinner: React.FC = () => (
  <div className="flex justify-center items-center mt-5">
    <div className="animate-spin rounded-full h-16 w-16 border-y-2 border-secondary"></div>
  </div>
);

export default spinner;
