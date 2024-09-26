import React from 'react';
import SidePage from '../components/SidePage';
import RightPage from '../components/RightPage';

const Page = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="hidden lg:flex flex-1 p-20">
          {/* Left column content */}
          <SidePage />
        </div>
        <div className="flex-1 lg:p-20 p-4">
          {/* Right column content */}
          <RightPage />
        </div>
      </div>
    </div>
  );
};

export default Page;