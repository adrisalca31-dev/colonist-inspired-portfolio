type DesktopProps = {
  onOpenProjects: () => void;
  onBack: () => void;
};

function Desktop({ onOpenProjects, onBack }: DesktopProps) {
  return (
    <main className="projects-desktop">
      <header className="desktop-menu-bar">
        <nav className="desktop-menu-bar__left" aria-label="Desktop menu">
          <button type="button" onClick={onOpenProjects}>
            Projects
          </button>

          <button type="button">
            Window
          </button>

          <button type="button">
            Help
          </button>
        </nav>

        <div className="desktop-menu-bar__right">
          <button
            type="button"
            className="desktop-menu-bar__language"
            aria-label="Current language: English"
          >
            EN
          </button>

          <button
            type="button"
            className="desktop-menu-bar__close"
            onClick={onBack}
            aria-label="Return to lobby"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="desktop-icons" aria-label="Desktop items">
        <button
          type="button"
          className="desktop-icon"
          onClick={onOpenProjects}
        >
          <span
            className="desktop-icon__graphic desktop-icon__graphic--folder"
            aria-hidden="true"
          />

          <span className="desktop-icon__label">
            Projects
          </span>
        </button>

        <button
          type="button"
          className="desktop-icon"
        >
          <span
            className="desktop-icon__graphic desktop-icon__graphic--document"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>

          <span className="desktop-icon__label">
            Resume
          </span>
        </button>
      </section>

      <nav className="desktop-dock" aria-label="Applications">
        <button
          type="button"
          className="desktop-dock__item desktop-dock__item--active"
          aria-label="Projects"
          onClick={onOpenProjects}
        >
          <span className="dock-icon dock-icon--folder" />
          <span className="desktop-dock__indicator" />
        </button>

        <button
          type="button"
          className="desktop-dock__item"
          aria-label="Browser"
        >
          <span className="dock-icon dock-icon--browser" />
        </button>

        <button
          type="button"
          className="desktop-dock__item"
          aria-label="Terminal"
        >
          <span className="dock-icon dock-icon--terminal">
            &gt;_
          </span>
        </button>

        <span className="desktop-dock__separator" />

        <button
          type="button"
          className="desktop-dock__item"
          aria-label="Trash"
        >
          <span className="dock-icon dock-icon--trash" />
        </button>
      </nav>
    </main>
  );
}

export default Desktop;