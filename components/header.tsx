'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigationLinks, churchInfo } from '@/lib/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Church Name */}
        <Link href="/" className="font-bold text-xl hover:opacity-90 transition">
          {churchInfo.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-80 transition text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Info - Desktop */}
        <div className="hidden lg:flex items-center ml-5">
          <a href={`tel:${churchInfo.phone}`} className="text-sm hover:opacity-80 transition">
            {churchInfo.phone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-primary-foreground hover:text-primary rounded transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:opacity-80 transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-primary-foreground/20">
              <a href={`tel:${churchInfo.phone}`} className="block hover:opacity-80 transition">
                {churchInfo.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
