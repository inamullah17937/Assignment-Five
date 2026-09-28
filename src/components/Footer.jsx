import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-intro">
          <div className="footer-brand">
            <span className="footer-brand-icon">✦</span>
            <span>Creative Collective</span>
          </div>
          <p className="footer-tagline">
            A thoughtful team of makers turning bright ideas into useful experiences.
          </p>
          <a className="footer-email" href="mailto:hello@creativecollective.dev">
            hello@creativecollective.dev <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-links-group">
          <div className="footer-links">
            <h2>Explore</h2>
            <a href="#team">Our team</a>
            <a href="#work">Selected work</a>
            <a href="#contact">Contact us</a>
          </div>

          <div className="footer-links">
            <h2>Connect</h2>
            <a href="#linkedin">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="#instagram">Instagram <span aria-hidden="true">↗</span></a>
            <a href="#github">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="footer-signature" aria-label="10 out of 10 team members">
          <span className="footer-mark">10 / 10</span>
          <strong>People make<br />the product<br />memorable.</strong>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Creative Collective</span>
        <span className="footer-note">Built with curiosity and care</span>
        <span>Made for meaningful work <span aria-hidden="true">♥</span></span>
      </div>
    </footer>
  );
}

export default Footer;