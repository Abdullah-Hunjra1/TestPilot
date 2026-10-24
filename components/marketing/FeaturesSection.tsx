import React from 'react';
import {
  Sparkles,
  GitPullRequest,
  Globe,
  Terminal,
  CheckCircle,
  Code2,
  Cpu,
  Layers,
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    badge: 'Autonomous AI',
    title: 'AI-generated tests',
    description:
      'Instead of writing hundreds of lines of boilerplate Playwright scripts, TestPilot uses Gemini models to analyze your app architecture and generate relevant, typed end-to-end test cases automatically.',
    highlights: [
      'Identifies critical paths like checkout & login',
      'Generates assertions for expected results',
      'Covers happy paths and boundary conditions',
    ],
  },
  {
    icon: GitPullRequest,
    badge: 'Codebase Aware',
    title: 'Repository context',
    description:
      'Direct integration with GitHub provides TestPilot with awareness of your repository branches, route structures, and target domain configurations (such as local dev ports or staging environments).',
    highlights: [
      'Synchronizes with default or custom branches',
      'Configurable target domains per repository',
      'Preserves repository global testing instructions',
    ],
  },
  {
    icon: Globe,
    badge: 'Zero Configuration',
    title: 'Cloud browser execution',
    description:
      'Run tests inside high-performance, managed Chromium browser sessions powered by Playwright and Browserbase. Free your local computer and CI runners from browser overhead.',
    highlights: [
      'Headless Chromium instances in the cloud',
      'No local browser or driver installations',
      'Parallelized and isolated test environments',
    ],
  },
  {
    icon: Terminal,
    badge: 'Instant Debugging',
    title: 'Execution logs & traces',
    description:
      'Get total visibility into every test run. Inspect live console outputs, step timelines, network status codes, and exact error traces to quickly resolve regressions before releasing to production.',
    highlights: [
      'Detailed per-step action transcripts',
      'Explicit failure points and assertion logs',
      'Direct cloud session URLs for auditability',
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-800 border border-violet-200/80 text-xs font-semibold tracking-wide uppercase mb-3">
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
            Everything you need for automated quality assurance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Engineered to give developers and teams reliable software testing without the maintenance headache of manual scripts.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 sm:p-9 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200/60 flex items-center justify-center text-violet-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-stone-600 bg-stone-100 border border-stone-200 px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-stone-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3.5 text-stone-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                    Capabilities included:
                  </h4>
                  <ul className="space-y-2 text-sm text-stone-700">
                    {feature.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-violet-700 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
