import { motion, useReducedMotion } from "motion/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type GameButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onTransitionEnd"
> & {
  children: ReactNode;
  variant: "primary" | "secondary";
};

export function GameButton({
  children,
  className = "",
  variant,
  ...props
}: GameButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      className={`game-button game-button--${variant} ${className}`}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { y: 2 }}
      transition={{ duration: 0.14, ease: "easeOut" }}
      type="button"
      {...props}
    >
      {children}
    </motion.button>
  );
}
