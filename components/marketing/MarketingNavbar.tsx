'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Show, UserButton } from '@clerk/nextjs';
import { Menu, X, ArrowRight, Github } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function MarketingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded-lg py-1 px-1.5 -ml-1.5"
            aria-label="TestPilot Home"
          >
            <Image
              src="/logo.png"
              alt="TestPilot Logo"
              width={140}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded-md px-1.5 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Auth & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors px-3 py-2 rounded-lg hover:bg-stone-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
              >
                Sign in
              </Link>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'bg-violet-700 hover:bg-violet-800 text-white font-medium text-sm px-4 py-2 h-9 rounded-lg shadow-xs hover:shadow transition-all inline-flex items-center gap-2'
                )}
              >
                <Github className="w-4 h-4" />
                <span>Connect GitHub</span>
              </Link>
            </Show>

            <Show when="signed-in">
              <Link
                href="/workspace"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'border-stone-200 text-stone-800 hover:bg-stone-100 hover:text-stone-900 text-sm font-medium h-9 rounded-lg inline-flex items-center gap-1.5'
                )}
              >
                <span>Workspace</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
              </Link>
              <div className="pl-1">
                <UserButton />
              </div>
            </Show>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <Show when="signed-in">
              <UserButton />
            </Show>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200/80 bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-stone-200/70 flex flex-col gap-2.5">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-medium text-stone-700 hover:text-stone-900 rounded-lg border border-stone-200 bg-white"
              >
                Sign in
              </Link>
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-full bg-violet-700 hover:bg-violet-800 text-white font-medium text-sm py-2.5 h-10 rounded-lg inline-flex items-center justify-center gap-2'
                )}
              >
                <Github className="w-4 h-4" />
                <span>Connect GitHub</span>
              </Link>
            </Show>

            <Show when="signed-in">
              <Link
                href="/workspace"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-full bg-violet-700 hover:bg-violet-800 text-white font-medium text-sm py-2.5 h-10 rounded-lg inline-flex items-center justify-center gap-2'
                )}
              >
                <span>Go to Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Show>
          </div>
        </div>
      )}
    </header>
  );
}
