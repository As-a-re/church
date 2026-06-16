'use client';

import { useEffect, useState } from 'react';

const SESSION_KEY = 'hilltop-intro-seen';

export default function SplashIntro() {
  const [show, setShow] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      seen = true;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || reduceMotion) return;

    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* ignore */
    }

    setShow(true);
    document.body.style.overflow = 'hidden';

    const hideTimer = window.setTimeout(() => setHiding(true), 2400);
    const removeTimer = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = '';
    }, 3000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  const skip = () => {
    setHiding(true);
    window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = '';
    }, 600);
  };

  if (!show) return null;

  return (
    <div
      role="button"
      aria-label="Skip intro animation"
      onClick={skip}
      className={`fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-night transition-opacity duration-700 ${
        hiding ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Radiating rays */}
      <div className="absolute h-[140vmax] w-[140vmax]" style={{ animation: 'ray-spin 50s linear infinite' }}>
        <svg viewBox="0 0 200 200" className="h-full w-full opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <rect
              key={i}
              x="98.5"
              y="0"
              width="3"
              height="100"
              fill="var(--dawn)"
              transform={`rotate(${i * 22.5} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Sun rising */}
      <div
        className="absolute h-40 w-40 sm:h-56 sm:w-56 rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--dawn) 0%, var(--ember) 60%, transparent 100%)',
          animation: 'sun-rise 1.6s cubic-bezier(0.16, 1, 0.3, 1) both',
          filter: 'blur(2px)',
        }}
      />

      {/* Hill silhouette */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-1/2 w-full"
      >
        <path
          d="M0,220 C 220,120 420,260 680,160 C 920,70 1180,240 1440,140 L1440,320 L0,320 Z"
          fill="var(--night-deep)"
        />
      </svg>

      {/* Wordmark */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span
          className="eyebrow text-dawn-soft"
          style={{ animation: 'wordmark-in 1.2s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both' }}
        >
          Church of Christ
        </span>
        <span
          className="font-display mt-2 text-4xl sm:text-6xl font-semibold text-white"
          style={{ animation: 'wordmark-in 1.2s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both', letterSpacing: '0.32em' }}
        >
          HILLTOP
        </span>
        <span
          className="mt-6 text-xs text-white/40 opacity-0"
          style={{ animation: 'fade-in-slow 1s 1.8s both' }}
        >
          Tap anywhere to enter
        </span>
      </div>
    </div>
  );
}
