import Link from 'next/link';
import { churchInfo, navigationLinks } from '@/lib/data';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import HillDivider from '@/components/hill-divider';
import AuroraBackground from '@/components/aurora-background';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1KZH1iVEfX/?mibextid=wwXIfr',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCRv0JKLgsiaunzmfNHjmAcw',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@hilltopcockwabenya?is_from_webapp=1&sender_device=pc',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16.6 5.82a4.28 4.28 0 0 1-3.1-1.31V14.5a4.85 4.85 0 1 1-4.85-4.85c.27 0 .53.02.78.06v2.4a2.45 2.45 0 1 0 1.71 2.39V2h2.36a4.28 4.28 0 0 0 3.1 3.82v2Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <HillDivider fill="var(--night)" flip />
      <div className="relative">
        <AuroraBackground className="opacity-40" />
        <div className="relative z-10 container mx-auto px-4 pb-10 pt-4">
          <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Church Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/10">
                  <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
                    <circle cx="22" cy="14" r="9" fill="var(--dawn)" opacity="0.9" />
                    <path d="M0,30 C8,18 16,32 24,20 C30,12 36,24 40,18 L40,40 L0,40 Z" fill="var(--night-deep)" />
                  </svg>
                </span>
                <span className="font-display text-lg font-semibold">{churchInfo.name}</span>
              </div>
              <p className="mt-4 text-sm text-white/60">{churchInfo.tagline}</p>
              <p className="mt-4 font-display italic text-white/70 text-sm leading-relaxed">
                &ldquo;And ye shall know the truth, and the truth shall make you free.&rdquo;
                <span className="block mt-1 not-italic eyebrow text-dawn/80 text-[0.65rem]">John 8:32</span>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="eyebrow text-dawn-soft mb-4">Explore</h4>
              <ul className="space-y-2.5 text-sm">
                {navigationLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 transition hover:text-dawn">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="eyebrow text-dawn-soft mb-4">Connect</h4>
              <ul className="space-y-2.5 text-sm">
                {navigationLinks.slice(5).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 transition hover:text-dawn">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="eyebrow text-dawn-soft mb-4">Reach Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-dawn" />
                  <a href={`tel:${churchInfo.phone.split(' / ')[0]}`} className="text-white/70 transition hover:text-dawn">
                    {churchInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-dawn" />
                  <a href={`mailto:${churchInfo.email}`} className="text-white/70 transition hover:text-dawn break-all">
                    {churchInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-dawn" />
                  <span className="text-white/70">Kwabenya, Accra · {churchInfo.address}</span>
                </li>
              </ul>

              <div className="mt-5 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="glass flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:text-dawn hover:scale-105"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-sm text-white/50 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} {churchInfo.name}. All rights reserved.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-1 text-dawn hover:text-dawn-soft">
              Plan your visit
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
