import { useState } from "react";
import "./App.css";

function App() {
  const [entering, setEntering] = useState(false);

  const handleEnter = () => {
    setEntering(true);

    window.setTimeout(() => {
      console.log("Portfolio loading...");
    }, 500);
  };

  return (
    <main className={`landing-page ${entering ? "is-entering" : ""}`}>
      <div className="background-pattern" />
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <header className="landing-header">
        <div className="header-brand">
          <div className="brand-mark">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <span className="brand-name">ADRIAN</span>
        </div>

        <div className="header-status">
          <span className="status-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </div>
      </header>

      <section className="landing-content">
        <div className="map-section">
          <div className="map-shadow" />

          <div className="board">
            <div className="hex hex-1 resource-forest">
              <span>♣</span>
            </div>

            <div className="hex hex-2 resource-hills">
              <span>◆</span>
            </div>

            <div className="hex hex-3 resource-fields">
              <span>✦</span>
            </div>

            <div className="hex hex-4 resource-mountains">
              <span>▲</span>
            </div>

            <div className="hex hex-5 resource-pasture">
              <span>♠</span>
            </div>

            <div className="hex hex-6 resource-forest">
              <span>♣</span>
            </div>

            <div className="hex hex-7 resource-fields">
              <span>✦</span>
            </div>

            <div className="hex hex-8 resource-desert">
              <span>•</span>
            </div>

            <div className="hex hex-9 resource-hills">
              <span>◆</span>
            </div>

            <div className="hex hex-10 resource-pasture">
              <span>♠</span>
            </div>

            <div className="hex hex-11 resource-mountains">
              <span>▲</span>
            </div>

            <div className="hex hex-12 resource-forest">
              <span>♣</span>
            </div>

            <div className="hex hex-13 resource-fields">
              <span>✦</span>
            </div>

            <div className="hex hex-14 resource-pasture">
              <span>♠</span>
            </div>

            <div className="hex hex-15 resource-hills">
              <span>◆</span>
            </div>

            <div className="hex hex-16 resource-desert">
              <span>•</span>
            </div>

            <div className="hex hex-17 resource-forest">
              <span>♣</span>
            </div>

            <div className="hex hex-18 resource-mountains">
              <span>▲</span>
            </div>

            <div className="board-road road-one" />
            <div className="board-road road-two" />
            <div className="board-road road-three" />
            <div className="board-road road-four" />

            <div className="board-piece piece-one" />
            <div className="board-piece piece-two" />
            <div className="board-piece piece-three" />
          </div>

          <div className="map-label">
            <span>INTERACTIVE</span>
            <strong>DEVELOPER MAP</strong>
          </div>
        </div>

        <div className="right-section">
          <div className="portfolio-logo">
            <div className="logo-hex">
              <span>A</span>
            </div>

            <div className="logo-text">
              <strong>PORTFOLIO</strong>
              <span>DEVELOPER EDITION</span>
            </div>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK DEVELOPER</p>

            <h1>
              Building software
              <br />
              <span>with purpose.</span>
            </h1>

            <p className="description">
              Explore my projects, experiments, skills and the ideas behind
              the code.
            </p>
          </div>

          <div className="social-proof">
            <div className="proof-item">
              <strong>FULL-STACK</strong>
              <span>DEVELOPMENT</span>
            </div>

            <div className="proof-divider" />

            <div className="proof-item">
              <strong>AI-ASSISTED</strong>
              <span>ENGINEERING</span>
            </div>

            <div className="proof-divider" />

            <div className="proof-item">
              <strong>OPEN</strong>
              <span>TO EXPERIMENTS</span>
            </div>
          </div>

          <div className="cta-container">
            <button
              className="cta-primary"
              onClick={handleEnter}
              type="button"
            >
              <span>ENTER PORTFOLIO</span>
              <span className="button-arrow">→</span>
            </button>

            <button className="cta-secondary" type="button">
              VIEW PROJECTS
            </button>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-left">
          <span>EN</span>
          <span className="footer-separator">•</span>
          <span>ES</span>
        </div>

        <div className="footer-center">
          <span>BUILT WITH CODE + AI</span>
        </div>

        <div className="footer-right">
          <span>GITHUB</span>
          <span className="footer-separator">•</span>
          <span>© 2026 ADRIAN</span>
        </div>
      </footer>

      <div className="transition-overlay">
        <div className="transition-content">
          <div className="transition-loader" />
          <span>ENTERING PORTFOLIO</span>
        </div>
      </div>
    </main>
  );
}

export default App;