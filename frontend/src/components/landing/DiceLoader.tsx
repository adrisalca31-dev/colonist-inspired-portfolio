import { motion, useReducedMotion } from "motion/react";

type DiceLoaderProps = {
  onComplete?: () => void;
};

const dieFaces = {
  three: [0, 4, 8],
  four: [0, 2, 6, 8],
};

export function DiceLoader({ onComplete }: DiceLoaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="dice-loader"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="dice-loader__dice">
        <motion.div
          className="dice-loader__die"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: [0, 180, 360, 540, 720] }
          }
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        >
          {Array.from({ length: 9 }, (_, index) => (
            <span
              key={index}
              className={
                dieFaces.three.includes(index)
                  ? "dice-loader__pip dice-loader__pip--active"
                  : "dice-loader__pip"
              }
            />
          ))}
        </motion.div>

        <motion.div
          className="dice-loader__die"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: [0, -180, -360, -540, -720] }
          }
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: "easeInOut",
          }}
          onAnimationComplete={onComplete}
        >
          {Array.from({ length: 9 }, (_, index) => (
            <span
              key={index}
              className={
                dieFaces.four.includes(index)
                  ? "dice-loader__pip dice-loader__pip--active"
                  : "dice-loader__pip"
              }
            />
          ))}
        </motion.div>
      </div>

    </motion.div>
  );
}