import { GitFork } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="footer-languages">
        <span>EN</span>
        <span className="footer-dot">•</span>
        <span>ES</span>
      </div>

      <a
        className="footer-github"
        href="https://github.com/adrisalca31-dev"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Adrian's GitHub profile"
      >
        <GitFork
          aria-hidden="true"
          size={13}
          strokeWidth={2.4}
        />

        <span>GITHUB</span>

        <span className="footer-dot">•</span>

        <span>adrisalca31-dev</span>
      </a>
    </footer>
  );
}