import { motion, useReducedMotion } from "motion/react";
import avatarUrl from "../../assets/landing/adrian-avatar.png";

export function LandingHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="landing-header">
      <motion.div
        className="header-brand"
        initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="brand-avatar"
          src={avatarUrl}
          alt=""
          aria-hidden="true"
        />

        <span className="brand-name">ADRIAN</span>
      </motion.div>

      <motion.div
        className="header-label"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        LONGEST ROAD: IN PROGRESS
      </motion.div>
    </header>
  );
}