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