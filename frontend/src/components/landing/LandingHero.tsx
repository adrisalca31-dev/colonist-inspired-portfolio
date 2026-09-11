import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import badgeUrl from "../../assets/landing/portfolio-badge.png";
import { playDiceRoll } from "../../audio/uiSounds";

type LandingHeroProps = {
  onEnter: () => void;
};

export function LandingHero({ onEnter }: LandingHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="landing-content">
      <motion.div
        className="portfolio-logo"
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 12, scale: 0.96 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.08,
          ease: "easeOut",
        }}
      >
        <img
          className="logo-badge"
          src={badgeUrl}
          alt=""
          aria-hidden="true"
        />

        <div className="logo-text">
          <strong>PORTFOLIO</strong>
          <span>DEVELOPER EDITION</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-copy"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.18,
          ease: "easeOut",
        }}
      >
        <p className="eyebrow">FULL-STACK DEVELOPER</p>

        <h1>
          Building
          <br />
          software with
          <br />
          <span>purpose.</span>
        </h1>

        <p className="description">
          Explore my projects, experiments, skills and the ideas behind the
          code.
        </p>
      </motion.div>

      <motion.div
        className="cta-container"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.32,
          ease: "easeOut",
        }}
      >
        <button
          type="button"
          className="game-button game-button--primary"
          onClick={() => {
            playDiceRoll();
            onEnter();
         }}
      >
          <span className="game-button__label">
            ROLL THE DICE
          </span>

          <span
            className="game-button__arrow"
            aria-hidden="true"
          >
            <ArrowRight size={23} strokeWidth={2.8} />
          </span>
        </button>
      </motion.div>
    </main>
  );
}