import React from 'react';

function App() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">GreenSweep</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <button className="donate-btn">Donate Now</button>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Let's Keep Our Cities Clean Together</h1>
            <p>We are dedicated to maintaining the cleanliness of our urban areas through innovative solutions and community engagement.</p>
            <a href="#about" className="cta-btn">More About Us</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
