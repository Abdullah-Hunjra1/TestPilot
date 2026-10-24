'use client';

import React from 'react';
import Link from 'next/link';
import { Show } from '@clerk/nextjs';
import { Github, ArrowDown, Sparkles, Check, ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DashboardPreview } from './DashboardPreview';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-900 border border-violet-200/80 text-xs sm:text-sm font-medium mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-violet-700" />
          <span>AI-powered software testing</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 max-w-4xl mx-auto leading-[1.12]">
          Test your app smarter. <br className="hidden sm:inline" />
          <span className="text-stone-900">Ship with confidence.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Connect your GitHub repository, let AI create relevant test cases, and run them in a cloud browser — all from one workspace.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          {/* Primary CTA */}
          <Show when="signed-out">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'w-full sm:w-auto bg-violet-700 hover:bg-violet-800 text-white font-medium text-base px-6 py-3 h-12 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-violet-600'
              )}
            >
              <Github className="w-5 h-5" />
              <span>Connect GitHub</span>
            </Link>
          </Show>

          <Show when="signed-in">
            <Link
              href="/api/github"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'w-full sm:w-auto bg-violet-700 hover:bg-violet-800 text-white font-medium text-base px-6 py-3 h-12 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-violet-600'
              )}
            >
              <Github className="w-5 h-5" />
              <span>Connect GitHub</span>
            </Link>
            <Link
              href="/workspace"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-auto border-stone-300 text-stone-800 hover:bg-stone-100 font-medium text-base px-6 py-3 h-12 rounded-xl inline-flex items-center justify-center gap-2'
              )}
            >
              <span>Go to Workspace</span>
              <ArrowRight className="w-4 h-4 text-stone-500" />
            </Link>
          </Show>

          {/* Secondary CTA */}
          <a
            href="#how-it-works"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'w-full sm:w-auto bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 border-stone-200 font-medium text-base px-6 py-3 h-12 rounded-xl shadow-xs transition-all inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-violet-600'
            )}
          >
            <span>See how it works</span>
            <ArrowDown className="w-4 h-4 text-stone-400" />
          </a>
        </div>

        {/* Reassurance Micro-Copy */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            1,000 free credits included
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            No browser install required
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            Seamless GitHub OAuth
          </span>
        </div>

        {/* Polished Software-Testing Dashboard Preview */}
        <div className="mt-14 sm:mt-18 lg:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
