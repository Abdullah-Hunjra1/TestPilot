import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Mail, Shield, CheckCircle2 } from 'lucide-react';

export function MarketingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F5F2] border-t border-stone-200/90 text-stone-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand info (2 cols on lg) */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="TestPilot Home">
              <Image
                src="/logo.png"
                alt="TestPilot Logo"
                width={130}
                height={34}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-stone-600 max-w-sm leading-relaxed">
              AI-powered software testing platform for modern web applications. Connect your GitHub repository, generate intelligent test suites, and execute in cloud browsers with zero local configuration.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>All systems operational • Public Beta</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-stone-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-stone-900 transition-colors">
                  Pricing & Credits
                </a>
              </li>
              <li>
                <Link href="/workspace" className="hover:text-stone-900 transition-colors">
                  Workspace
                </Link>
              </li>
            </ul>
          </div>

          {/* Authentication & Access */}
          <div>
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              Access
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/sign-in" className="hover:text-stone-900 transition-colors">
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="hover:text-stone-900 transition-colors">
                  Create account
                </Link>
              </li>
              <li>
                <Link href="/api/github" className="hover:text-stone-900 transition-colors">
                  GitHub OAuth
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              Help & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#support" className="hover:text-stone-900 transition-colors">
                  Support & FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@testpilot.dev"
                  className="hover:text-stone-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>support@testpilot.dev</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} TestPilot. AI-powered software testing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Powered by Gemini, Next.js & Playwright</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
