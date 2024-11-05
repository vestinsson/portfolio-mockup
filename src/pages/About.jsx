// src/pages/About.jsx
function About() {
    return (
      <section className="about">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="profile">
            <h2>Karl Vestinsson</h2>
            <p>Frontend Developer</p>
            <img src="https://vestinsson.github.io/portfolio-mockup/img/karl.jpg" alt="Your Profile Picture" />
          </div>
          <div className="bio">
            <h3>My Competence</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Responsive Design</li>
            </ul>
            <h3>My history</h3>
            <p className="history-text">Personal description goes here...</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;