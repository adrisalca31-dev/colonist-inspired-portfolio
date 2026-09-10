import { motion, useReducedMotion } from "motion/react";

const backgroundImages = [1, 2, 3, 4];

export function LandingBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="landing-background" aria-hidden="true">
      <motion.div
        className="landing-background__track"
        initial={shouldReduceMotion ? false : { x: "0%" }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["0%", "-25%"],
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
      >
        {backgroundImages.map((image) => (
          <img
            key={image}
            className="landing-background__image"
            src="/game-background.png"
            alt=""
          />
        ))}
      </motion.div>

      <div className="landing-background__shade" />
    </div>
  );
}