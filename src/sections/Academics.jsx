const programmes = [
  {
    number: "01",
    stage: "Early Years",
    grades: "Pre-KG – UKG",
    age: "Ages 3–5",
    description:
      "A joyful introduction to learning through discovery, creativity, play and meaningful interaction.",
    subjects: "Language · Numbers · Creative Play",
  },
  {
    number: "02",
    stage: "Primary School",
    grades: "Grades 1 – 5",
    age: "Ages 6–10",
    description:
      "Building strong foundations in essential subjects while encouraging curiosity and independent thinking.",
    subjects: "English · Mathematics · Science · Arts",
  },
  {
    number: "03",
    stage: "Middle School",
    grades: "Grades 6 – 8",
    age: "Ages 11–13",
    description:
      "Developing analytical skills, collaboration and confidence through deeper subject exploration.",
    subjects: "Sciences · Humanities · Technology",
  },
  {
    number: "04",
    stage: "Senior School",
    grades: "Grades 9 – 12",
    age: "Ages 14–18",
    description:
      "Preparing students for higher education and future careers with academic focus and personal guidance.",
    subjects: "Advanced Sciences · Commerce · Humanities",
  },
];

function Academics() {
  return (
    <section id="academics" className="academics-section">
      <div className="academics-heading">
        <div>
          <span className="eyebrow">LEARNING AT AURELIA</span>
          <h2>
            A journey of learning.
            <br />
            <em>Every step matters.</em>
          </h2>
        </div>

        <p>
          Every stage of education brings new possibilities. Our programmes are
          designed to help students grow academically, socially and personally.
        </p>
      </div>

      <div className="programme-list">
        {programmes.map((programme) => (
          <article className="programme-row" key={programme.number}>
            <span className="programme-number">{programme.number}</span>

            <div className="programme-title">
              <h3>{programme.stage}</h3>
              <span>{programme.grades}</span>
            </div>

            <p className="programme-description">{programme.description}</p>

            <div className="programme-details">
              <span>{programme.age}</span>
              <small>{programme.subjects}</small>
            </div>

            <a href="#contact" aria-label={`Enquire about ${programme.stage}`}>
              ↗
            </a>
          </article>
        ))}
      </div>

      <div className="academic-note">
        <span>OUR APPROACH</span>
        <p>Strong foundations. Curious minds. Confident futures.</p>
      </div>
    </section>
  );
}

export default Academics;
