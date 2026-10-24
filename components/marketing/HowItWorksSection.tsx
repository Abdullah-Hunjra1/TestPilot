import React from 'react';
import { GitBranch, Sparkles, Play, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Connect a repository',
    description:
      'Authorize TestPilot securely through GitHub OAuth. Choose any repository and branch, and configure your target domain (localhost or staging environment).',
    icon: GitBranch,
    badge: '1-Click GitHub Sync',
  },
  {
    step: '02',
    title: 'Generate AI test cases',
    description:
      'Our AI analyzes your pages, routing structure, and components to generate contextual test cases covering happy paths, edge cases, and critical user journeys.',
    icon: Sparkles,
    badge: 'Gemini Code Analysis',
  },
  {
    step: '03',
    title: 'Execute tests in the cloud',
    description:
      'Tests run inside dedicated, headless cloud Chromium browsers managed by Playwright and Browserbase. Zero local setup or machine lag.',
    icon: Play,
    badge: 'Playwright & Browserbase',
  },
  {
    step: '04',
    title: 'Review results & logs',
    description:
      'View step-by-step console logs, error traces, and pass rates in real time. Validate fixes instantly before merging your pull requests.',
    icon: CheckCircle2,
    badge: 'Detailed Diagnostics',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F6F5F2] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Workflow Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
            How TestPilot works, from code to confidence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Eliminate manual test authoring. Connect your repo and let automated cloud browsers verify your user flows.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-violet-700 bg-violet-50 border border-violet-200/60 px-2.5 py-1 rounded-md">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700">
                      <Icon className="w-5 h-5 text-violet-700" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-stone-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-stone-700">{item.badge}</span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 hidden lg:inline" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
