'use client';

import React from 'react';
import Link from 'next/link';
import { Show } from '@clerk/nextjs';
import { Check, Github, Sparkles, Clock, ArrowRight, Shield } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F6F5F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-800 border border-violet-200/80 text-xs font-semibold tracking-wide uppercase mb-3">
            Pricing & Credits
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
            Transparent pricing, free to test during Beta
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Every new account is provisioned with verified starting credits. No credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card 1: Verified Free Beta Plan */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-violet-600/90 shadow-sm flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 bg-violet-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Active Beta
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">Free Beta Starter</h3>
                  <p className="text-sm text-stone-500 mt-1">Full access to test your repositories</p>
                </div>
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  Active
                </span>
              </div>

              {/* Price / Credit display */}
              <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-stone-900">$0</span>
                  <span className="text-stone-500 text-sm font-medium">/ during public beta</span>
                </div>
                <div className="mt-2 text-xs font-semibold text-violet-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-700" />
                  1,000 starting credits automatically added to your account
                </div>
              </div>

              <div className="mt-6 space-y-3.5">
                <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  What is included in beta:
                </h4>
                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>1,000 complimentary credits</strong> for test generation and execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Connect public and private GitHub repositories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Automated AI test case generation via Gemini</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cloud browser execution powered by Playwright & Browserbase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Execution logs, pass/fail status metrics, and step-by-step traces</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'w-full bg-violet-700 hover:bg-violet-800 text-white font-medium text-base py-3 h-12 rounded-xl shadow-xs inline-flex items-center justify-center gap-2'
                  )}
                >
                  <Github className="w-4 h-4" />
                  <span>Start Free with GitHub</span>
                </Link>
              </Show>

              <Show when="signed-in">
                <Link
                  href="/workspace"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'w-full bg-violet-700 hover:bg-violet-800 text-white font-medium text-base py-3 h-12 rounded-xl shadow-xs inline-flex items-center justify-center gap-2'
                  )}
                >
                  <span>Go to Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Show>

              <p className="text-center text-[11px] text-stone-500 mt-2.5">
                No credit card required. Instant account setup.
              </p>
            </div>
          </div>

          {/* Card 2: Clearly Labelled Placeholder Section */}
          <div className="bg-white/80 rounded-2xl p-8 sm:p-10 border border-stone-200/90 shadow-xs flex flex-col justify-between relative opacity-95">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">Pro & Team Plans</h3>
                  <p className="text-sm text-stone-500 mt-1">For high-frequency CI pipelines & teams</p>
                </div>
                <span className="text-xs font-semibold text-stone-700 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-stone-500" />
                  In Development
                </span>
              </div>

              {/* Placeholder note */}
              <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-dashed border-stone-300">
                <div className="text-sm font-semibold text-stone-800">
                  Tiered pricing coming soon
                </div>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Stripe billing integration is currently being prepared. We do not display unverified prices. Official pricing will be announced prior to general availability.
                </p>
              </div>

              <div className="mt-6 space-y-3.5">
                <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Planned for upcoming release:
                </h4>
                <ul className="space-y-3 text-sm text-stone-600">
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Automated Stripe credit pack top-ups & monthly renewals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Concurrent multi-browser cloud workers for fast test suites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Pull request status checks & GitHub Actions integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>Multi-seat team management & shared organization credits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#support"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'w-full border-stone-200 text-stone-700 hover:bg-stone-50 font-medium text-base py-3 h-12 rounded-xl inline-flex items-center justify-center gap-2'
                )}
              >
                <span>Inquire About High-Volume Quotas</span>
              </a>
              <p className="text-center text-[11px] text-stone-500 mt-2.5">
                Need extra credits for your team now? Reach out via our support section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
