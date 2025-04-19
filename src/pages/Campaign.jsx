import React from 'react';
import './Campaign.css';

const Campaign = () => {
  return (
    <div className="campaign-container">
      <h2 className="campaign-title">🌱 Green Earth Campaign</h2>
      <p className="campaign-description">
        Join our mission to plant 1 million trees by 2030. Every step you take and every km you ride clean makes an impact!
      </p>
      <div className="campaign-stats">
        <div className="stat-card">
          <h3>🌳 72,430</h3>
          <p>Trees Planted</p>
        </div>
        <div className="stat-card">
          <h3>🚴‍♂️ 180,000 km</h3>
          <p>Clean Distance Logged</p>
        </div>
        <div className="stat-card">
          <h3>🧍 12,320</h3>
          <p>People Participated</p>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
