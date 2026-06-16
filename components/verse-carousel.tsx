'use client';

import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

export interface Verse {
  text: string;
  reference: string;
}

export default function VerseCarousel({ verses, interval = 6000 }: { verses: Verse[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % verses.length);
        setVisible(true);
      }, 400);
    }, interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [interval, verses.length]);

  const verse = verses[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote className="mx-auto mb-6 h-10 w-10 text-dawn/70" strokeWidth={1.25} />
      <div
        className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <p className="font-display text-2xl sm:text-3xl md:text-4xl font-medium leading-snug text-foreground">
          &ldquo;{verse.text}&rdquo;
        </p>
        <p className="mt-6 eyebrow text-dawn">{verse.reference}</p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-2">
        {verses.map((v, i) => (
          <button
            key={v.reference}
            type="button"
            aria-label={`Show verse ${v.reference}`}
            onClick={() => {
              setVisible(false);
              window.setTimeout(() => {
                setIndex(i);
                setVisible(true);
              }, 300);
            }}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-8 bg-dawn' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
