export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h3>AURELIA</h3>
          <p>INTERNATIONAL ACADEMY</p>
        </div>

        <p>Inspiring young minds. Shaping tomorrow.</p>

        <p>© {new Date().getFullYear()} Aurelia International Academy.</p>
      </div>
    </footer>
  );
}
