import { ReactNode, useEffect } from "react";
import clickAudioSrc from "/click.wav";
import "./sparkle.css";

type SparkleProviderProps = {
  children: ReactNode;
};

function createSparkleSpread(originX: number, originY: number, count = 16): void {
  const radius = 10;

  for (let index = 0; index < count; index += 1) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const angle = Math.random() * Math.PI * 2;
    const distance = radius + Math.pow(Math.random(), 0.72) * radius;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 1 + Math.random() * 9;
    const duration = 650 + Math.random() * 720;

    sparkle.style.left = `${originX}px`;
    sparkle.style.top = `${originY}px`;
    sparkle.style.setProperty("--dx", `${dx}px`);
    sparkle.style.setProperty("--dy", `${dy}px`);
    sparkle.style.setProperty("--size", `${size}px`);
    sparkle.style.setProperty("--duration", `${duration}ms`);

    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), {
      once: true,
    });
  }
}

export default function SparkleProvider({ children }: SparkleProviderProps) {
  useEffect(() => {
    const clickAudio = new Audio(clickAudioSrc);

    const onClick = ({ clientX, clientY }: MouseEvent): void => {
      createSparkleSpread(clientX, clientY);
      clickAudio.currentTime = 0;
      clickAudio.play().catch(() => {});
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return <>{children}</>;
}
