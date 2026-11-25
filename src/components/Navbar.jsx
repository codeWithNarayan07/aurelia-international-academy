import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Academics", "#academics"],
    ["Facilities", "#facilities"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <a href="#home" className="brand">
        <span className="brand-mark">A</span>
        <span>
          <strong>AURELIA</strong>
          <small>INTERNATIONAL ACADEMY</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Enquire Now
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
