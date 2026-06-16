interface AuroraBackgroundProps {
  className?: string;
}

/**
 * Three slowly-drifting blurred light orbs in the signature
 * dawn / ember / sage palette. Purely decorative — sits behind
 * content with pointer-events disabled.
 */
export default function AuroraBackground({ className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`aurora ${className}`} aria-hidden="true">
      <div className="aurora__orb aurora__orb--dawn w-[60vw] h-[60vw] -top-1/4 -left-1/4" />
      <div className="aurora__orb aurora__orb--ember w-[55vw] h-[55vw] top-1/3 -right-1/4" />
      <div className="aurora__orb aurora__orb--sage w-[45vw] h-[45vw] bottom-[-15%] left-1/4" />
    </div>
  );
}
