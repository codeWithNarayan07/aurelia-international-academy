const facilities = [
  {
    number: "01",
    name: "Modern Library",
    category: "KNOWLEDGE & RESEARCH",
    description:
      "A welcoming space filled with books, digital resources and quiet corners for independent discovery.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    name: "Science Laboratories",
    category: "EXPERIMENT & EXPLORE",
    description:
      "Purpose-designed learning spaces where students turn scientific concepts into practical experiences.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    name: "Sports & Athletics",
    category: "FITNESS & TEAMWORK",
    description:
      "Opportunities to develop physical fitness, discipline, teamwork and a healthy competitive spirit.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    name: "Arts & Creativity",
    category: "IMAGINATION & EXPRESSION",
    description:
      "Dedicated creative spaces that encourage students to explore art, music and self-expression.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
  },
];

function Facilities() {
  return (
    <section id="facilities" className="facilities-section">
      <div className="facilities-heading">
        <div>
          <span className="eyebrow">CAMPUS & INFRASTRUCTURE</span>
          <h2>
            Spaces that inspire.
            <br />
            <em>Experiences that last.</em>
          </h2>
        </div>

        <p>
          A thoughtfully designed campus gives every learner the freedom to
          explore interests, discover talents and grow beyond the classroom.
        </p>
      </div>

      <div className="facility-grid">
        {facilities.map((facility) => (
          <article className="facility-card" key={facility.number}>
            <div className="facility-image">
              <img src={facility.image} alt={facility.name} loading="lazy" />
              <span>{facility.number}</span>
            </div>

            <div className="facility-info">
              <span className="facility-category">{facility.category}</span>
              <h3>{facility.name}</h3>
              <p>{facility.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="facility-footer">
        <p>A campus designed for every kind of learner.</p>
        <a href="#contact">Arrange a campus enquiry ↗</a>
      </div>
    </section>
  );
}

export default Facilities;
