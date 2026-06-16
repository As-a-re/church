import type { ReactNode } from 'react';
import AuroraBackground from '@/components/aurora-background';
import HillDivider from '@/components/hill-divider';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-night text-primary-foreground dark:text-foreground">
      <AuroraBackground />
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-24 md:pt-36 md:pb-32 text-center">
        <p className="eyebrow text-dawn mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-white/75 max-w-2xl mx-auto">{subtitle}</p>
        )}
        {children}
      </div>
      <HillDivider fill="var(--background)" backFill="var(--night)" />
    </section>
  );
}
