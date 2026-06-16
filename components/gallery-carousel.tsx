'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Flame, Users, HeartHandshake, Music2, Sparkles, HandHeart } from 'lucide-react';

export interface GallerySlide {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

interface GalleryCarouselProps {
  slides: GallerySlide[];
  /** Autoplay interval in ms */
  interval?: number;
}

const FALLBACK_ICONS = [Flame, Users, HeartHandshake, Music2, Sparkles, HandHeart];
const FALLBACK_GRADIENTS = [
  'from-night via-primary to-dawn/60',
  'from-night via-ember/40 to-dawn/50',
  'from-night via-sage/30 to-dawn/40',
  'from-primary via-night to-ember/40',
  'from-night via-dawn/30 to-sage/40',
  'from-night via-primary to-ember/50',
];

export default function GalleryCarousel({ slides, interval = 5200 }: GalleryCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [errored, setErrored] = useState<Record<number, boolean>>({});
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, interval, slides.length]);

  const go = (next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl glass-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-3xl">
        {slides.map((slide, i) => {
          const Icon = FALLBACK_ICONS[i % FALLBACK_ICONS.length];
          const gradient = FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length];
          const active = i === index;
          return (
            <div
              key={slide.caption}
              className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
              style={{ opacity: active ? 1 : 0 }}
              aria-hidden={!active}
            >
              {!errored[i] ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`h-full w-full object-cover ${active ? 'animate-kenburns' : ''}`}
                  onError={() => setErrored((prev) => ({ ...prev, [i]: true }))}
                />
              ) : (
                <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
                  <Icon className="h-16 w-16 text-white/40" strokeWidth={1.25} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
            </div>
          );
        })}

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
          <div className="glass-strong inline-flex max-w-full flex-col gap-1 rounded-2xl px-5 py-3 sm:px-6 sm:py-4">
            <span className="eyebrow text-dawn">{slides[index].tag}</span>
            <span className="font-display text-lg sm:text-2xl font-medium text-white">
              {slides[index].caption}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute right-4 top-4 sm:right-6 sm:top-6 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="glass-strong flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:scale-105"
            aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 sm:flex glass-strong h-10 w-10 items-center justify-center rounded-full text-white transition hover:scale-105"
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 sm:flex glass-strong h-10 w-10 items-center justify-center rounded-full text-white transition hover:scale-105"
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 py-4">
        {slides.map((slide, i) => (
          <button
            key={slide.caption}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show ${slide.caption}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-8 bg-dawn' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
