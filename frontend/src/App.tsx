import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { DiceLoader } from "./components/landing/DiceLoader";
import { LandingBackground } from "./components/landing/LandingBackground";
import { LandingFooter } from "./components/landing/LandingFooter";
import { LandingHeader } from "./components/landing/LandingHeader";
import { LandingHero } from "./components/landing/LandingHero";
import { Lobby } from "./components/lobby/Lobby";
import "./styles/tokens.css";
import "./styles/landing.css";
import "./styles/lobby.css";

type View =
  | "landing"
  | "lobby"
  | "projects"
  | "about"
  | "skills"
  | "ai-lab"
  | "journey"
  | "contact";

function App() {
  const [view, setView] = useState<View>("landing");
  const [isEntering, setIsEntering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleEnter = () => {
    setIsEntering(true);
  };

  const handleTransitionComplete = () => {
    setIsEntering(false);
    setView("lobby");
  };

  const handleNavigate = (destination: string) => {
    if (
      destination === "projects" ||
      destination === "about" ||
      destination === "skills" ||
      destination === "ai-lab" ||
      destination === "journey" ||
      destination === "contact"
    ) {
      setView(destination);
    }
  };

  if (view === "lobby") {
    return <Lobby onNavigate={handleNavigate} />;
  }

  if (view === "projects") {
    return (
      <main className="placeholder-page">
        <button
          type="button"
          className="placeholder-page__back"
          onClick={() => setView("lobby")}
        >
          ← BACK TO LOBBY
        </button>

        <div className="placeholder-page__content">
          <p className="placeholder-page__eyebrow">PORTFOLIO SECTION</p>

          <h1>Projects</h1>

          <p>
            This section will showcase my projects, experiments, and
            development work.
          </p>
        </div>
      </main>
    );
  }

  if (view === "about") {
    return (
      <main className="placeholder-page">
        <button
          type="button"
          className="placeholder-page__back"
          onClick={() => setView("lobby")}
        >
          ← BACK TO LOBBY
        </button>

        <div className="placeholder-page__content">
          <p className="placeholder-page__eyebrow">PORTFOLIO SECTION</p>

          <h1>About Me</h1>

          <p>
            This section will introduce who I am, what I care about, and what
            drives me as a developer.
          </p>
        </div>
      </main>
    );
  }

  if (view === "skills") {
    return (
      <main className="placeholder-page">
        <button
          type="button"
          className="placeholder-page__back"
          onClick={() => setView("lobby")}
        >
          ← BACK TO LOBBY
        </button>

        <div className="placeholder-page__content">
          <p className="placeholder-page__eyebrow">PORTFOLIO SECTION</p>

          <h1>Skills</h1>

          <p>
            This section will showcase my technical skills, tools, and
            technologies.
          </p>
        </div>
      </main>
    );
  }

  if (view === "ai-lab") {
    return (
      <main className="placeholder-page">
        <button
          type="button"
          className="placeholder-page__back"
          onClick={() => setView("lobby")}
        >
          ← BACK TO LOBBY
        </button>

        <div className="placeholder-page__content">
          <p className="placeholder-page__eyebrow">PORTFOLIO SECTION</p>

          <h1>AI Lab</h1>

          <p>
            This section will showcase AI experiments, workflows, and projects
            built with AI-assisted development.
          </p>
        </div>
      </main>
    );
  }

  if (view === "journey") {
    return (
      <main className="placeholder-page">
        <button
          type="button"
          className="placeholder-page__back"
          onClick={() => setView("lobby")}
        >
          ← BACK TO LOBBY
        </button>

        <div className="placeholder-page__content">
          <p className="placeholder-page__eyebrow">PORTFOLIO SECTION</p>

          <h1>Developer Journey</h1>

          <p>
            This section will tell the story of my growth, learning process,
            and evolution as a developer.
          </p>
        </div>
      </main>
    );
  }

  if (view === "contact") {
    return (
      <main className="placeholder-page">
        <button
          type="button"
          className="placeholder-page__back"
          onClick={() => setView("lobby")}
        >
          ← BACK TO LOBBY
        </button>

        <div className="placeholder-page__content">
          <p className="placeholder-page__eyebrow">PORTFOLIO SECTION</p>

          <h1>Contact</h1>

          <p>
            This section will contain my contact information and professional
            links.
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="landing-page">
      <LandingBackground />

      <LandingHeader />

      <LandingHero onEnter={handleEnter} />

      <LandingFooter />

      <AnimatePresence>
        {isEntering && (
          <motion.div
            className="entry-overlay"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
            }}
            aria-live="polite"
          >
            <div className="entry-overlay__content">
              <DiceLoader onComplete={handleTransitionComplete} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;