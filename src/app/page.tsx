import React from 'react';
import './styles/BackgroundScroll.css'; // Ensure the path is correct

const Page = () => {
  return (
    <div className="scroll-container">
      {/* Overlay for Blue Section */}
      <div className="overlay blue-overlay"></div> 
      <div className="box-section blue-bg">
        <h1>Blue Page</h1>
      </div>

      {/* Overlay for Red Section */}
      <div className="overlay red-overlay"></div> 
      <div className="box-section red-bg">
        <h1>Red Page</h1>
      </div>

      {/* Overlay for Yellow Section */}
      <div className="overlay yellow-overlay"></div> 
      <div className="box-section yellow-bg">
        <h1>Yellow Page</h1>
      </div>
    </div>
  );
};

export default Page
