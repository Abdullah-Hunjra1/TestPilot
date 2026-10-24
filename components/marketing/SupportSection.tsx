'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, HelpCircle, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'How does TestPilot generate test cases from my repository?',
    answer:
      'TestPilot uses Gemini AI models to analyze your codebase structure, routing files, and UI components. It identifies key user workflows (like authentication, navigation, forms, and transactions) and writes runnable, automated end-to-end test specifications with explicit assertions.',
  },
  {
    id: 'faq-2',
    question: 'Do I need to install Playwright or browsers on my local computer?',
    answer:
      'No local installation or browser driver configuration is necessary. TestPilot executes tests in isolated, cloud-hosted Chromium browser sandboxes powered by Playwright and Browserbase. Everything runs seamlessly in the cloud and streams logs directly to your dashboard.',
  },
  {
    id: 'faq-3',
    question: 'Can I test local development servers or only deployed URLs?',
    answer:
      'You can test both! In your TestPilot workspace settings, you can configure the target domain for any repository. By default it is set to http://localhost:3000, and you can easily update it to staging environments or production URLs.',
  },
  {
    id: 'faq-4',
    question: 'How do the 1,000 free starting credits work?',
    answer:
      'Every new account automatically receives 1,000 complimentary credits upon signing up. Generating test cases and running cloud browser sessions consume credits from this balance. You can view your live credit tally at the top of your workspace anytime.',
  },
  {
    id: 'faq-5',
    question: 'Is my repository code kept private and secure?',
    answer:
      'Yes. TestPilot connects via standard GitHub OAuth with read access to the repositories you select. Your source code is strictly used to evaluate structure and test routes. It is never sold or used for public model training.',
  },
];

export function SupportSection() {
  return (
    <section id="support" className="py-20 sm:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-800 border border-violet-200/80 text-xs font-semibold tracking-wide uppercase mb-3">
            Support & FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
            Frequently asked questions & direct assistance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Need help connecting a repository, configuring target domains, or understanding test results? We are here to support your workflow.
          </p>
        </div>

        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs">
            <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-violet-700" />
              <span>Common Questions</span>
            </h3>

            <Accordion className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-stone-200/80 rounded-xl px-4 py-1"
                >
                  <AccordionTrigger className="text-left font-semibold text-stone-800 hover:text-violet-700 text-sm sm:text-base py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600 text-sm leading-relaxed pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Direct Contact Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-200/60 flex items-center justify-center text-violet-700 mb-4">
                <Mail className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-semibold text-stone-900">
                Contact Product Support
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Have a technical question, feedback on generated test cases, or need extra credits for team evaluation? Reach out directly to our engineering team.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-3">
                <a
                  href="mailto:support@testpilot.dev?subject=TestPilot%20Support%20Inquiry"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'w-full bg-violet-700 hover:bg-violet-800 text-white font-medium text-sm py-2.5 h-11 rounded-xl shadow-xs inline-flex items-center justify-center gap-2'
                  )}
                >
                  <Mail className="w-4 h-4" />
                  <span>Email support@testpilot.dev</span>
                </a>

                <Link
                  href="/workspace"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'w-full border-stone-200 text-stone-700 hover:bg-stone-50 font-medium text-sm py-2.5 h-11 rounded-xl inline-flex items-center justify-center gap-2'
                  )}
                >
                  <span>Manage Settings in Workspace</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </Link>
              </div>
            </div>

            <div className="bg-stone-100/70 rounded-2xl p-5 border border-stone-200/80 flex items-start gap-3 text-xs text-stone-600">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900 block mb-0.5">Enterprise & Security Compliance</span>
                All GitHub OAuth tokens are encrypted and stored in secure HTTP-only cookies. No tokens or codebase contents are exposed to client-side scripts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
