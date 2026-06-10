'use client';

import Link from 'next/link';
import { churchInfo, navigationLinks } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{churchInfo.name}</h3>
            <p className="text-sm opacity-90 mb-4">{churchInfo.tagline}</p>
            <div className="space-y-2 text-sm">
              <p className="opacity-80">{churchInfo.service}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navigationLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-80 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              {navigationLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-80 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href={`tel:${churchInfo.phone}`} className="hover:opacity-80 transition">
                  {churchInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href={`mailto:${churchInfo.email}`} className="hover:opacity-80 transition">
                  {churchInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">{churchInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {new Date().getFullYear()} {churchInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    <div className="text-center pb-6"><a href="https://www.facebook.com/share/1KZH1iVEfX/?mibextid=wwXIfr">Facebook</a> | <a href="https://www.youtube.com/channel/UCRv0JKLgsiaunzmfNHjmAcw">YouTube</a> | <a href="https://www.tiktok.com/@hilltopcockwabenya?is_from_webapp=1&sender_device=pc">TikTok</a></div></footer>
  );
}
