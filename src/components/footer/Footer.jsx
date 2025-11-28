import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} <strong>Anime & Weather</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}