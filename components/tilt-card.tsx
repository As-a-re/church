'use client';

import { useRef, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees */
  max?: number;
}

/**
 * Wraps content in a subtle, pointer-driven 3D tilt. On touch devices
 * (no fine pointer) the effect simply doesn't engage, so nothing feels
 * janky on mobile.
 */
export default function TiltCard({ children, className = '', max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const node = ref.current;
    const inner = innerRef.current;
    if (!node || !inner) return;

    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      inner.style.transform = `translateZ(28px) translate(${(px - 0.5) * -6}px, ${(py - 0.5) * -6}px)`;
    });
  };

  const handleLeave = () => {
    const node = ref.current;
    const inner = innerRef.current;
    if (!node || !inner) return;
    node.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    inner.style.transform = 'translateZ(0px)';
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`tilt ${className}`}
    >
      <div ref={innerRef} className="tilt__inner h-full transition-transform duration-500">
        {children}
      </div>
    </div>
  );
}
