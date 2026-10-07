import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string };
export function StatCounter({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (reducedMotion) setCount(stat.value);
        else {
          const start = performance.now();
          const duration = 1400;
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round(stat.value * (1 - Math.pow(1 - progress, 4))));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [stat.value]);
  return (
    <div className="stat" ref={ref}>
      <span className="stat-index">0{index + 1}</span>
      <strong>
        {count}
        <span>{stat.suffix}</span>
      </strong>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}
