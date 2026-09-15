import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { DiceLoader } from "../components/landing/DiceLoader";
import { LandingBackground } from "../components/landing/LandingBackground";
import { LandingFooter } from "../components/landing/LandingFooter";
import { LandingHeader } from "../components/landing/LandingHeader";
import { LandingHero } from "../components/landing/LandingHero";

type LandingPageProps = {
  onEnter: () => void;
};

function LandingPage({ onEnter }: LandingPageProps) {
  const [isEntering, setIsEntering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleEnter = () => {
    setIsEntering(true);
  };

  const handleTransitionComplete = () => {
    setIsEntering(false);
    onEnter();
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

export default LandingPage;
