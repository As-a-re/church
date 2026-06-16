'use client';

import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigationLinks, churchInfo } from '@/lib/data';
import ThemeToggle from '@/components/theme-toggle';
import SoundToggle from '@/components/sound-toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tone = scrolled || isOpen ? 'text-foreground' : 'text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'glass-strong shadow-lg shadow-black/5' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / Wordmark */}
        <Link href="/" className={`group flex items-center gap-3 ${tone}`}>
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-night ring-1 ring-white/10">
            <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
              <circle cx="22" cy="14" r="9" fill="var(--dawn)" opacity="0.9" />
              <path d="M0,30 C8,18 16,32 24,20 C30,12 36,24 40,18 L40,40 L0,40 Z" fill="var(--night-deep)" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide">Hilltop</span>
            <span className="eyebrow text-[0.6rem] opacity-60">Church of Christ</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium ${tone} transition-opacity hover:opacity-80`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-dawn transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1.5">
          <div className={`hidden sm:flex items-center gap-1 ${tone}`}>
            <SoundToggle className="hover:bg-white/10" />
            <ThemeToggle className="hover:bg-white/10" />
          </div>

          <Link
            href="/giving"
            className="ml-2 hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-dawn to-ember px-5 py-2 text-sm font-semibold text-night shadow-lg shadow-dawn/20 transition hover:shadow-dawn/40 hover:scale-105"
          >
            Give
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`ml-1 flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${tone}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong border-t border-border/50">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navigationLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${i * 30}ms` }}
                className={`rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-dawn/10 hover:text-dawn ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-4">
              <a href={`tel:${churchInfo.phone.split(' / ')[0]}`} className="text-sm text-muted-foreground hover:text-dawn">
                {churchInfo.phone}
              </a>
              <div className="flex items-center gap-1 text-foreground">
                <SoundToggle />
                <ThemeToggle />
              </div>
            </div>
            <Link
              href="/giving"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-dawn to-ember px-5 py-2.5 text-sm font-semibold text-night"
            >
              Give Online
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
