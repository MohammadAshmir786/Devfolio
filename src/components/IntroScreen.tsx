import { useEffect, useMemo, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const magicalWord = useMemo(
    () => "CRAFTING IMPACTFUL DIGITAL\nEXPERIENCES",
    [],
  );
  const [visibleChars, setVisibleChars] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const charIntervalMs = 100;
    const revealDuration = magicalWord.length * charIntervalMs + 400;
    const exitDuration = 700;

    const revealInterval = window.setInterval(() => {
      setVisibleChars((current) => {
        if (current >= magicalWord.length) {
          window.clearInterval(revealInterval);
          return current;
        }
        return current + 1;
      });
    }, 55);

    const AudioContextClass =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    let audioContext: AudioContext | null = null;
    const activeNodes: OscillatorNode[] = [];
    let hasPlayed = false;

    const playIntroSound = (ctx: AudioContext) => {
      const notes = [261.63, 329.63, 392.0, 523.25, 659.25, 783.99, 1046.5];
      const base = ctx.currentTime + 0.04;

      notes.forEach((frequency, index) => {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = base + index * 0.11;
        const end = start + 0.16;

        oscillator.type = index % 2 === 0 ? "triangle" : "sine";
        oscillator.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.12, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, end);

        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start(start);
        oscillator.stop(end);
        activeNodes.push(oscillator);
      });

      const tail = ctx.createOscillator();
      const tailGain = ctx.createGain();
      const tailStart = base + notes.length * 0.11;
      const tailEnd = tailStart + 0.35;

      tail.type = "sawtooth";
      tail.frequency.setValueAtTime(430, tailStart);
      tail.frequency.exponentialRampToValueAtTime(220, tailEnd);
      tailGain.gain.setValueAtTime(0.0001, tailStart);
      tailGain.gain.exponentialRampToValueAtTime(0.09, tailStart + 0.03);
      tailGain.gain.exponentialRampToValueAtTime(0.0001, tailEnd);

      tail.connect(tailGain);
      tailGain.connect(ctx.destination);
      tail.start(tailStart);
      tail.stop(tailEnd);
      activeNodes.push(tail);
    };

    const unlockEvents: Array<keyof WindowEventMap> = [
      "pointerdown",
      "touchstart",
      "keydown",
    ];

    const removeUnlockListeners = () => {
      unlockEvents.forEach((eventName) => {
        window.removeEventListener(eventName, startAudio);
      });
    };

    const startAudio = async () => {
      if (hasPlayed || !AudioContextClass) {
        return;
      }

      try {
        if (!audioContext) {
          audioContext = new AudioContextClass();
        }

        await audioContext.resume();

        if (audioContext.state !== "running") {
          return;
        }

        playIntroSound(audioContext);
        hasPlayed = true;
        removeUnlockListeners();
      } catch {
        hasPlayed = false;
      }
    };

    if (AudioContextClass) {
      unlockEvents.forEach((eventName) => {
        window.addEventListener(eventName, startAudio, { once: true });
      });
      void startAudio();
    }

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, revealDuration);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, revealDuration + exitDuration);

    return () => {
      window.clearInterval(revealInterval);
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
      removeUnlockListeners();
      activeNodes.forEach((node) => {
        try {
          node.disconnect();
        } catch {
          return;
        }
      });
      if (audioContext && audioContext.state !== "closed") {
        void audioContext.close();
      }
    };
  }, [magicalWord, onComplete]);

  return (
    <section
      className={`fixed inset-0 z-[100] overflow-hidden bg-background transition-all duration-700 ease-out ${
        isExiting ? "scale-[5] opacity-0 blur-sm" : "scale-100 opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.28),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,hsl(var(--background)),hsl(var(--background)/0.85),hsl(var(--background)))]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[68vmin] w-[68vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 h-[48vmin] w-[48vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/35 animate-pulse-soft" />
        <div className="absolute left-1/2 top-1/2 h-[26vmin] w-[26vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/20 animate-float" />
      </div>

      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center transition-all duration-700 ${
          isExiting ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <p className="mb-6 animate-slide-down text-xs uppercase tracking-[0.5em] text-foreground/70 md:text-sm">
          Loading Experience
        </p>

        <h1 className="max-w-6xl text-2xl font-black leading-tight text-transparent md:text-5xl lg:text-6xl">
          {magicalWord.split("").map((character, index) =>
            character === "\n" ? (
              <br key={`line-break-${index}`} />
            ) : (
              <span
                key={`${character}-${index}`}
                className={`inline-block transition-all duration-500 ${
                  index < visibleChars
                    ? "translate-y-0 opacity-100 text-foreground"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 22}ms` }}
              >
                {character === " " ? "\u00A0" : character}
              </span>
            ),
          )}
        </h1>

        <div className="mt-8 h-1.5 w-full max-w-xl overflow-hidden rounded-full bg-foreground/15">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            style={{
              width: `${(visibleChars / magicalWord.length) * 100}%`,
              transition: "width 120ms linear",
            }}
          />
        </div>

        <p className="mt-6 animate-slide-up text-sm text-foreground/70 md:text-base">
          Launching your portfolio...
        </p>
      </div>
    </section>
  );
};

export default IntroScreen;
