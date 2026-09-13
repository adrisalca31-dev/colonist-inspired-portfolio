let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  return audioContext;
}

export function playUiClick() {
  const context = getAudioContext();

  if (context.state === "suspended") {
    void context.resume();
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";

  oscillator.frequency.setValueAtTime(520, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    180,
    context.currentTime + 0.08,
  );

  gain.gain.setValueAtTime(0.08, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    context.currentTime + 0.08,
  );

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start();
  oscillator.stop(context.currentTime + 0.08);
}

const diceRollAudio = new Audio("/audio/dice-roll.wav");
diceRollAudio.preload = "auto";
diceRollAudio.volume = 0.8;

export function playDiceRoll() {
  diceRollAudio.currentTime = 0;
  void diceRollAudio.play();
}

const aboutMeAudio = new Audio("/audio/about-me-paper.wav");
aboutMeAudio.preload = "auto";
aboutMeAudio.volume = 0.65;

export function playAboutMeSound() {
  aboutMeAudio.currentTime = 0;
  void aboutMeAudio.play();
}

const projectsAudio = new Audio("/audio/projects-keyboard.wav");
projectsAudio.preload = "auto";
projectsAudio.volume = 0.5;

let projectsTimeout: number | null = null;

export function playProjectsSound() {
  projectsAudio.currentTime = 0;
  void projectsAudio.play();

  if (projectsTimeout !== null) {
    window.clearTimeout(projectsTimeout);
  }

  projectsTimeout = window.setTimeout(() => {
    projectsAudio.pause();
    projectsAudio.currentTime = 0;
    projectsTimeout = null;
  }, 1000);
}

const skillsAudio = new Audio("/audio/skills-map.wav");
skillsAudio.preload = "auto";
skillsAudio.volume = 0.65;

export function playSkillsSound() {
  skillsAudio.currentTime = 0;
  void skillsAudio.play();
}

const aiLabAudio = new Audio("/audio/ai-lab-pop.wav");
aiLabAudio.preload = "auto";
aiLabAudio.volume = 0.7;

export function playAiLabSound() {
  aiLabAudio.currentTime = 0;
  void aiLabAudio.play();
}

const journeyAudio = new Audio(
  `/audio/journey-footsteps.wav?v=${Date.now()}`,
);
journeyAudio.preload = "auto";
journeyAudio.volume = 0.55;

export function playJourneySound() {
  journeyAudio.currentTime = 0;
  void journeyAudio.play();
}

const contactAudio = new Audio("/audio/contact.wav");
contactAudio.preload = "auto";
contactAudio.volume = 0.6;

export function playContactSound() {
  contactAudio.currentTime = 0;
  void contactAudio.play();
}