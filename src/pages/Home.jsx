import { useState } from 'react';
import Calculator from '../components/Calculator';
import { FiAward, FiShare2, FiHeart, FiDroplet } from 'react-icons/fi';
import './Home.css';

export default function Home() {
  const [savedCO2, setSavedCO2] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  
  const handleCalculate = (co2) => {
    setSavedCO2(co2);
    if (co2 > 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  const benefits = [
    {
      icon: <FiHeart className="benefit-icon heart-icon" />,
      title: "Health Benefits",
      desc: "Cleaner air reduces asthma and respiratory diseases by up to 20%"
    },
    {
     
      title: "Eco Impact",
      desc: "Each ride helps grow Bengaluru's urban forest canopy"
    },
    {
      icon: <FiDroplet className="benefit-icon droplet-icon" />,
      title: "Energy Savings",
      desc: "EVs use renewable energy more efficiently than fossil fuels"
    }
  ];

  return (
    <div className="home-container">
      {/* Background elements */}
      <div className="background-pattern"></div>
      <div className="top-gradient"></div>
      <div className="bottom-blob"></div>

      {/* Celebration Animation */}
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-bg"></div>
          <div className="celebration-emoji">🌿</div>
        </div>
      )}

      <div className="content-wrapper">
        <header className="main-header">
          <div className="logo-circle">
           
          </div>
          <h1 className="main-title">
            <span className="title-gradient">Grow Green Miles</span>
          </h1>
          <p className="subtitle">
            Every EV ride plants seeds for Bengaluru's cleaner future.
            <span className="highlight-text">Nourish your city with every kilometer!</span>
          </p>
        </header>

        <div className="calculator-section">
          <Calculator onCalculate={handleCalculate} />
          
          <div className="impact-card">
            <div className="decorative-leaf top-leaf">🍃</div>
            <div className="decorative-leaf bottom-leaf">🌱</div>
            
            <h2 className="impact-title">
              <span className="icon-wrapper">
                <FiAward className="award-icon" />
              </span>
              <span className="text-gradient">Your Green Footprint</span>
            </h2>
            
            {savedCO2 > 0 ? (
              <div className="impact-results fade-in">
                <div className="co2-display">
                  <span className="co2-amount">{savedCO2}</span>
                  <span className="co2-unit">kg CO₂ saved</span>
                </div>
                
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${Math.min(savedCO2 * 2, 100)}%` }}></div>
                  <div className="progress-labels">
                    <span>0</span>
                    <span>25</span>
                    <span>50 kg</span>
                  </div>
                </div>
                
                <div className="equivalent-card">
                  <p className="equivalent-text">
                    <span className="bold-text">Equivalent to:</span> {Math.round(savedCO2 * 10)} mature trees cleaning air for a day
                  </p>
                </div>
                
                <div className="action-buttons">
                  <button className="share-button">
                    <FiShare2 /> Share Impact
                  </button>
                  <button className="badge-button">
                    <FiAward /> View Badges
                  </button>
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <div className="earth-icon-wrapper">
                  <div className="earth-emoji">🌎</div>
                </div>
                <h3 className="empty-title">Ready to See Your Impact?</h3>
                <p className="empty-text">
                  Calculate your emissions savings to discover how you're helping Bengaluru breathe easier
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="benefits-section">
          <div className="decorative-recycle">♻️</div>
          <div className="decorative-tree">🌳</div>
          
          <h2 className="section-title">
            <span className="title-underline">The Ripple Effect of Your Ride</span>
          </h2>
          <div className="benefits-grid">
            {benefits.map((item, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-message">
          <div className="message-banner">
         
            <p className="message-text">
              Together, we're growing a greener Bengaluru one ride at a time
            </p>
           
          </div>
          <div className="emoji-row">
            {['🌿', '🌱', '🍃', '🌲', '🌴'].map((emoji, i) => (
              <span key={i} className="emoji-item">{emoji}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}