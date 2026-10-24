'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  TrendingUp,
  ListChecks,
  Play,
  Terminal,
  ExternalLink,
  GitBranch,
  Globe,
  Sparkles,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type MockTest = {
  id: string;
  title: string;
  route: string;
  type: string;
  duration: string;
  status: 'passed' | 'failed' | 'running';
  summary: string;
};

const mockTests: MockTest[] = [
  {
    id: 'tc-1',
    title: 'Customer checkout with Stripe card element',
    route: '/checkout/stripe',
    type: 'E2E Flow',
    duration: '2.8s',
    status: 'passed',
    summary: 'Submits payment form, verifies webhook receipt, redirects to /dashboard?success=true',
  },
  {
    id: 'tc-2',
    title: 'OAuth authorization & token refresh handshake',
    route: '/api/github/callback',
    type: 'Auth Security',
    duration: '1.2s',
    status: 'passed',
    summary: 'Validates temporary auth code exchange and sets HTTP-only secure session cookies',
  },
  {
    id: 'tc-3',
    title: 'Cart item count recalculation on quantity change',
    route: '/cart',
    type: 'State Sync',
    duration: '1.9s',
    status: 'passed',
    summary: 'Updates badge counter and line-item totals synchronously without page reload',
  },
  {
    id: 'tc-4',
    title: 'Out-of-stock validation during fast checkout',
    route: '/products/[slug]',
    type: 'Edge Case',
    duration: '3.4s',
    status: 'failed',
    summary: 'Assertion timeout: Expected disabled state on [data-action="purchase"] after zero inventory event',
  },
];

const mockLogs = [
  { time: '00:01.04', tag: 'browserbase', msg: 'Cloud Chromium sandbox session provisioned (region: us-east-1)' },
  { time: '00:01.42', tag: 'playwright', msg: 'Browser context initialized with viewport 1280x800' },
  { time: '00:02.10', tag: 'network', msg: 'GET https://staging.storefront.app/checkout HTTP/2 200 OK' },
  { time: '00:02.85', tag: 'ai-driver', msg: 'Located primary checkout form target: form#payment-form' },
  { time: '00:03.22', tag: 'action', msg: 'Filled mock payment card: [•••• •••• •••• 4242]' },
  { time: '00:03.80', tag: 'assertion', msg: 'Verified URL redirection: /dashboard?success=true (PASS)' },
  { time: '00:03.95', tag: 'session', msg: 'DOM snapshot & network waterfall saved to execution report' },
];

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<'tests' | 'logs'>('tests');

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-white border border-stone-200 shadow-[0_20px_60px_-15px_rgba(28,25,23,0.08)] overflow-hidden transition-all text-left">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-stone-50 border-b border-stone-200/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-stone-300 border border-stone-400/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-stone-300 border border-stone-400/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-stone-300 border border-stone-400/40 inline-block" />
          <span className="ml-3 text-xs font-mono text-stone-500 font-medium hidden sm:inline">
            workspace / storefront-app
          </span>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Cloud Browser Ready
          </span>
          <span className="text-stone-400 hidden sm:inline">|</span>
          <span className="font-mono text-stone-600 hidden sm:inline">Playwright v1.64</span>
        </div>
      </div>

      {/* Repository Context Bar */}
      <div className="px-4 sm:px-6 py-4 bg-white border-b border-stone-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
            <GitBranch className="w-4 h-4 text-violet-700" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-stone-900">acme-corp / storefront-app</h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                main
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
              <Globe className="w-3 h-3 text-stone-400" />
              <span>Target: https://staging.storefront.app</span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center rounded-lg bg-stone-100 p-1 border border-stone-200/80 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('tests')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'tests'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Test Suite (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'logs'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-violet-700" />
            Execution Logs
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-[#FAF9F6] border-b border-stone-200/80">
        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>Total Tests</span>
            <ListChecks className="w-4 h-4 text-stone-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-stone-900">24</div>
          <div className="text-[11px] text-stone-500 mt-0.5">Across 6 user flows</div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>Passed</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-stone-900">22</div>
          <div className="text-[11px] text-emerald-700 font-medium mt-0.5">91.6% passed</div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>Failed</span>
            <XCircle className="w-4 h-4 text-rose-600" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-stone-900">2</div>
          <div className="text-[11px] text-rose-600 font-medium mt-0.5">Requires review</div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>Pass Rate</span>
            <TrendingUp className="w-4 h-4 text-violet-700" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-stone-900">92%</div>
          <div className="text-[11px] text-violet-700 font-medium mt-0.5">+4% from last run</div>
        </div>
      </div>

      {/* Main Content Area: Test Suite or Execution Logs */}
      {activeTab === 'tests' ? (
        <div className="divide-y divide-stone-100 bg-white">
          <div className="px-4 sm:px-6 py-2.5 bg-stone-50/60 flex items-center justify-between text-[13px] font-semibold text-stone-500 uppercase tracking-wider">
            <span>Automated Test Case</span>
            <span className="hidden sm:inline">Execution & Status</span>
          </div>

          {mockTests.map((test) => (
            <div
              key={test.id}
              className="px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-stone-50/70 transition-colors"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-stone-900">{test.title}</span>
                  <Badge variant="secondary" className="text-[10px] bg-stone-100 text-stone-700 font-mono py-0 px-1.5">
                    {test.type}
                  </Badge>
                </div>
                <p className="text-sm text-stone-500 leading-normal">{test.summary}</p>
                <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                  <span>Target: {test.route}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className="text-xs text-stone-500 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-stone-400" />
                  {test.duration}
                </span>

                {test.status === 'passed' && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed
                  </span>
                )}

                {test.status === 'failed' && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200/70 px-2.5 py-0.5 rounded-full">
                    <XCircle className="w-3.5 h-3.5" />
                    Failed
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Action Footer */}
          <div className="px-4 sm:px-6 py-3 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600">
            <span className="flex items-center gap-1.5 text-stone-600">
              <Sparkles className="w-3.5 h-3.5 text-violet-700" />
              AI generated from repository routes and page components
            </span>
            <div className="flex items-center gap-2">
              <span className="text-stone-400 text-[11px] hidden sm:inline">4 tests selected</span>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 bg-violet-700 text-white font-medium px-3 py-1.5 rounded-lg text-xs hover:bg-violet-800 transition-colors shadow-xs"
              >
                <Play className="w-3 h-3" />
                Run Suite
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Logs view */
        <div className="p-4 sm:p-6 bg-stone-900 text-stone-200 font-mono text-xs leading-relaxed space-y-2 overflow-x-auto">
          <div className="text-stone-400 text-[11px] pb-2 border-b border-stone-800 flex items-center justify-between">
            <span>Playwright Cloud Session: #sb_sess_90248a</span>
            <span className="text-emerald-400 font-semibold">● STREAMING LOGS</span>
          </div>
          {mockLogs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-stone-500 shrink-0">[{log.time}]</span>
              <span className="text-violet-400 font-semibold uppercase text-[10px] tracking-wide shrink-0">
                {log.tag}
              </span>
              <span className="text-stone-300">{log.msg}</span>
            </div>
          ))}
          <div className="pt-2 text-stone-500 text-[11px] flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Execution finished in 3.95 seconds. All artifacts committed to session store.</span>
          </div>
        </div>
      )}
    </div>
  );
}
