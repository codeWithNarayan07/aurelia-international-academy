import { useState } from "react";

const photos = [
  {
    id: 1,
    category: "Campus",
    title: "Learning Spaces",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    category: "Classroom",
    title: "Everyday Learning",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    category: "Sports",
    title: "Team Spirit",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    category: "Arts",
    title: "Creative Expression",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    category: "Campus",
    title: "A Place to Discover",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    category: "Classroom",
    title: "Growing Together",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = ["All", "Campus", "Classroom", "Sports", "Arts"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-heading">
        <span className="eyebrow">LIFE AT AURELIA</span>
        <h2>
          Moments that make
          <br />
          <em>memories.</em>
        </h2>
        <p>
          A glimpse into the experiences, discoveries and everyday moments that
          make our school community special.
        </p>
      </div>

      <div className="gallery-filters" aria-label="Filter gallery images">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredPhotos.map((photo) => (
          <article className="gallery-item" key={photo.id}>
            <img src={photo.image} alt={photo.title} loading="lazy" />
            <div className="gallery-caption">
              <span>{photo.category}</span>
              <h3>{photo.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <p className="gallery-note">
        A collection of sample campus and learning-life photographs.
      </p>
    </section>
  );
}

export default Gallery;
