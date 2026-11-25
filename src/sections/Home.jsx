function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="eyebrow">
          ESTABLISHED WITH PURPOSE · BUILT FOR THE FUTURE
        </span>

        <h1>
          Inspiring young minds.
          <br />
          <em>Shaping tomorrow.</em>
        </h1>

        <p className="hero-description">
          At Aurelia International Academy, we believe every child has the
          potential to make a difference. We nurture curiosity, build character
          and prepare students for a world of possibilities.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="button-primary">
            Explore Admissions <span>↗</span>
          </a>
          <a href="#about" className="button-secondary">
            Discover Our School
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>15+</strong>
            <span>Years of Excellence</span>
          </div>
          <div>
            <strong>1,200+</strong>
            <span>Students Enrolled</span>
          </div>
          <div>
            <strong>45+</strong>
            <span>Expert Educators</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
          alt="Students learning together in a bright classroom"
        />

        <div className="hero-image-label">
          <span className="label-line"></span>
          <div>
            <strong>A PLACE TO GROW</strong>
            <small>Learning beyond the classroom</small>
          </div>
        </div>

        <div className="hero-image-index">01 / 06</div>
      </div>
    </section>
  );
}

export default Home;
