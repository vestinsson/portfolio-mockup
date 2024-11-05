// src/pages/Home.jsx
function Home() {
    return (
      <section className="home">
        <div className="hero">
          <h1>A mockup portfolio</h1>
          <p className="subtitle">C# | Frontend-Dev | UX-Dev | Creative Dev</p>
        </div>
        <div className="intro">
          <h2>Services Offered</h2>
          <div className="services">
            <div className="service">
              <h3>Web Developing</h3>
              <p>Modern and Responsive Webb Apps</p>
            </div>
            <div className="service">
              <h3>UX Design</h3>
              <p>User friendly and Attractive user interfaces </p>
            </div>
            <div className="service">
              <h3>C# Applications</h3>
              <p>Cross-platform, Productive and Very High-Performance Code </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;