function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85"
          alt="Students collaborating during a classroom activity"
        />
        <div className="about-image-note">
          <span>OUR PHILOSOPHY</span>
          <strong>Every child is a world of possibilities.</strong>
        </div>
      </div>

      <div className="about-content">
        <span className="eyebrow">DISCOVER AURELIA</span>

        <h2>
          More than a school.
          <br />
          <em>A foundation for life.</em>
        </h2>

        <p className="about-lead">
          We are a learning community built on curiosity, compassion and the
          courage to think differently.
        </p>

        <p className="about-description">
          At Aurelia International Academy, education goes beyond textbooks and
          examinations. We create an environment where students are encouraged
          to ask questions, explore their interests and develop the confidence
          to shape their own future. Through dedicated teaching and meaningful
          experiences, we help every learner discover their strengths.
        </p>

        <div className="about-values">
          <div>
            <span>01</span>
            <strong>Academic Excellence</strong>
            <p>Building strong foundations through meaningful learning.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Character & Values</strong>
            <p>Encouraging empathy, integrity and responsibility.</p>
          </div>
        </div>

        <a href="#academics" className="about-link">
          Discover our approach <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default About;
