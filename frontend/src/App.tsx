import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { LandingFooter } from "./components/landing/LandingFooter";
import { LandingBackground } from "./components/landing/LandingBackground";
import { LandingHeader } from "./components/landing/LandingHeader";
import { LandingHero } from "./components/landing/LandingHero";
import "./styles/tokens.css";
import "./styles/landing.css";

function App() {
  const [isEntering, setIsEntering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleEnter = () => {
    setIsEntering(true);
  };

  const handleTransitionComplete = () => {
    console.log("Portfolio loading...");
  };

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
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            onAnimationComplete={handleTransitionComplete}
            aria-live="polite"
          >
            <div className="entry-overlay__content">
              <motion.div
                className="entry-overlay__loader"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span>ENTERING PORTFOLIO</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;