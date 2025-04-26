import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1>Archinest</h1>
        <p>Modular Living, Smart Choices.</p>
        <button>Explore Now</button>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Archinest combines modular design, smart home products, on-demand renovations, and digital twin consulting into one seamless platform.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">Modular Design Packages</div>
          <div className="card">Smart Home Marketplace</div>
          <div className="card">On-Demand Renovations</div>
          <div className="card">Digital Twin Consulting</div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products">
        <h2>Featured Smart Products</h2>
        <p>Coming soon...</p>
      </section>

      {/* Contact Section */}
      <footer className="contact">
        <h2>Get in Touch</h2>
        <p>Email us: contact@archinest.com</p>
      </footer>
    </div>
  );
}

export default App;
