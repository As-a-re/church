'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const CHORD = [130.81, 164.81, 196.0, 246.94, 293.66]; // C3 E3 G3 B3 D4 — soft, open pad

export default function SoundToggle({ className = '' }: { className?: string }) {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const masterRef = useRef<GainNode | null>(null);

  const stop = (immediate = false) => {
    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (!ctx || !master) {
      setPlaying(false);
      return;
    }

    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(0, now + (immediate ? 0.05 : 1.2));

    const oscillators = oscillatorsRef.current;
    const context = ctx;
    window.setTimeout(
      () => {
        oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch {
            /* already stopped */
          }
        });
        context.close().catch(() => {});
      },
      immediate ? 60 : 1300
    );

    ctxRef.current = null;
    oscillatorsRef.current = [];
    masterRef.current = null;
    setPlaying(false);
  };

  const start = () => {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const master = ctx.createGain();
    master.gain.value = 0;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1100;

    master.connect(filter);
    filter.connect(ctx.destination);

    const oscillators: OscillatorNode[] = [];

    CHORD.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      const gain = ctx.createGain();
      const base = 0.12 / (i + 1);
      gain.gain.value = base;

      osc.connect(gain);
      gain.connect(master);
      osc.start();
      oscillators.push(osc);

      // slow "breathing" LFO on each voice's gain
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.04 + i * 0.015;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = base * 0.5;
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      lfo.start();
      oscillators.push(lfo);
    });

    master.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 2.5);

    ctxRef.current = ctx;
    masterRef.current = master;
    oscillatorsRef.current = oscillators;
    setPlaying(true);
  };

  useEffect(() => {
    return () => {
      if (ctxRef.current) stop(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      type="button"
      onClick={() => (playing ? stop() : start())}
      aria-label={playing ? 'Mute ambient worship sound' : 'Play soft ambient worship sound'}
      title={playing ? 'Mute ambience' : 'Play ambience'}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105 ${
        playing ? 'animate-pulse-ring' : ''
      } ${className}`}
      style={playing ? { animation: 'pulse-ring 2.4s ease-out infinite' } : undefined}
    >
      {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
    </button>
  );
}
