'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function StatCounter({ value, label, suffix = '', prefix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;

            if (reduceMotion) {
              setCount(value);
              return;
            }

            const duration = 1400;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-semibold text-gradient-dawn">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}
