import React from 'react';
import logo from './EyeLogo.png';
import mockup1 from './Mockup1.png';
import mockup2 from './Mockup2.png';
import mockup3 from './Mockup3.png';
import mockup4 from './Mockup4.png';
import './App.css';

function App() {
  const handleVenmoClick = (e) => {
    e.preventDefault();
    window.location.href = "venmo://paycharge?txn=pay&recipients=lukewinningham04&amount=49&note=Portfolio%20Membership";
    setTimeout(() => {
      window.open("https://venmo.com/lukewinningham04?txn=pay&amount=49&note=Portfolio%20Membership", "_blank");
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p className="name">Luxe</p>
      </header>
      <div className="center-text">
        <p>Visualize<br />Your<br />Resume</p>
        <a href="#pricing-card" className="get-started">Get Started</a>
      </div>
      <div className="templates-heading">
        <h2>Templates We Offer</h2>
      </div>
      <div className="image-slider">
        <img src={mockup1} className="slider-image" alt="Mockup1" />
        <img src={mockup2} className="slider-image" alt="Mockup2" />
        <img src={mockup3} className="slider-image" alt="Mockup3" />
        <img src={mockup4} className="slider-image" alt="Mockup4" />
        <img src={mockup1} className="slider-image" alt="Mockup1" />
        <img src={mockup2} className="slider-image" alt="Mockup2" />
        <img src={mockup3} className="slider-image" alt="Mockup3" />
        <img src={mockup4} className="slider-image" alt="Mockup4" />
        <img src={mockup1} className="slider-image" alt="Mockup1" />
        <img src={mockup2} className="slider-image" alt="Mockup2" />
        <img src={mockup3} className="slider-image" alt="Mockup3" />
        <img src={mockup4} className="slider-image" alt="Mockup4" />
        <img src={mockup1} className="slider-image" alt="Mockup1" />
        <img src={mockup2} className="slider-image" alt="Mockup2" />
        <img src={mockup3} className="slider-image" alt="Mockup3" />
        <img src={mockup4} className="slider-image" alt="Mockup4" />
      </div>

      <div className="why-portfolio">
        <h3>Importance of Portfolios</h3>
        <div className="why-portfolio-reasons">
          <div className="reason">
            <strong>Showcase Your Work</strong>
            <p>Portfolios allow professionals to present their work visually and organized.</p>
          </div>
          <div className="reason">
            <strong>Professionalism</strong>
            <p>Portfolios demonstrate to potential clients and employers that you take your work seriously.</p>
          </div>
          <div className="reason">
            <strong>Stand Out</strong>
            <p>In a competitive job market, a portfolio helps you stand out by providing a tangible representation of your abilities.</p>
          </div>
        </div>
        <div className="why-portfolio-reasons">
          <div className="reason">
            <strong>Personal Branding</strong>
            <p>Portfolios allow you to control your career narrative and craft a compelling story about your journey and achievements.</p>
          </div>
          <div className="reason">
            <strong>Networking</strong>
            <p>Portfolios provide conversation starters and are easily shareable with potential collaborators, employers, or clients.</p>
          </div>
        </div>
      </div>
      
      <div id="pricing-card" className="pricing-card">
        <h3>Membership</h3>
        <hr className="heading-line" />
        <p className="price">$49 One-Time Fee</p>
        <hr className="price-line" />
        <h4>What's included</h4>
        <ul className="features">
        <li>No Monthly Payment</li>
          <li>Modern and Professional Template</li>
          <li>Responsive and Mobile-Friendly</li>
          <li>Fast Turn-Around Time</li>
          <li>Social Media Platforms Can Be Linked</li>
          <li>Updates Are Only $10</li>
        </ul>
        <a href="venmo://paycharge?txn=pay&recipients=Luke0404&amount=49&note=Portfolio%20Membership" className="buy-now" onClick={handleVenmoClick}>Get Started</a>
        <p className="price2">*Venmo is the payment accepted </p>
      </div>
      <img src={logo} className="logo-below-pricing" alt="logo" />
      <footer className="App-footer">
        <p>© 2024 LuxeWebWorks. All rights reserved.</p>
        <div className="footer-buttons">
          <a href="mailto:lukewinningham04@gmail.com" className="footer-button">Contact Us</a>
          <a href="https://docs.google.com/document/d/1Ut5X_pXhw2qAH728gd2g9AoVR2_RDUj0CSPpn5OL_VA/edit" className="footer-button">Terms and Conditions</a>
          <a href="https://docs.google.com/document/d/1UtaCHg2nwcSiZikuW00WUEVttw4j0iUjAi1GKFz-cSE/edit?usp=sharing" className="footer-button">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default App;


