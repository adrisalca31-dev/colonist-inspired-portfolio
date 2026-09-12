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

type View = "landing" | "lobby" | "projects";

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
    if (destination === "projects") {
      setView("projects");
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