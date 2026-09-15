import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type PageShellProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

function PageShell({ title, eyebrow = "PORTFOLIO SECTION", children }: PageShellProps) {
  const navigate = useNavigate();

  return (
    <main className="page-shell">
      <section className="page-shell__panel">
        <button
          type="button"
          className="page-shell__back"
          onClick={() => navigate("/lobby")}
        >
          <span aria-hidden="true">←</span>
          <span>BACK TO LOBBY</span>
        </button>

        <button
          type="button"
          className="page-shell__close"
          onClick={() => navigate("/lobby")}
          aria-label="Close page and return to lobby"
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M7 7 C10 9, 12 13, 16 16 C19 19, 22 23, 25 25" />
            <path d="M25 7 C22 10, 20 13, 16 16 C13 19, 10 22, 7 25" />
          </svg>
        </button>

        <header className="page-shell__header">
          <p className="page-shell__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </header>

        <div className="page-shell__content">{children}</div>
      </section>
    </main>
  );
}

export default PageShell;
