import { motion, useReducedMotion } from "motion/react";

export function LandingBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="landing-background" aria-hidden="true">
      <motion.div
        className="landing-background__image"
        initial={shouldReduceMotion ? false : { x: "0%" }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["0%", "-20%"],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 50,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }
        }
      />

      <div className="landing-background__shade" />
    </div>
  );
}