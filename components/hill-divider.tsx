interface HillDividerProps {
  /** Fill color for the foreground ridge — usually the *next* section's background */
  fill?: string;
  /** Fill color for the softer back ridge */
  backFill?: string;
  /** Flip vertically, for use at the top of a section instead of the bottom */
  flip?: boolean;
  className?: string;
}

/**
 * A two-layer ridge silhouette echoing "Hilltop" — used between sections
 * to smooth the transition from one background color to the next.
 */
export default function HillDivider({
  fill = 'var(--background)',
  backFill,
  flip = false,
  className = '',
}: HillDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="hill-divider"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,90 C 160,30 320,110 520,70 C 720,30 880,100 1080,55 C 1240,20 1360,60 1440,40 L1440,120 L0,120 Z"
          fill={backFill ?? fill}
          opacity={backFill ? 0.45 : 1}
        />
        <path
          d="M0,110 C 180,60 360,120 560,90 C 760,60 940,118 1140,85 C 1300,60 1380,90 1440,80 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
