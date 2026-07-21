import Link from "next/link";
import { ArrowRight, Shield, Layers, Activity, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold tracking-tighter text-lg">Revora</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="#product" className="hover:text-white transition-colors">Product</Link>
            <Link href="#architecture" className="hover:text-white transition-colors">Architecture</Link>
            <Link href="#customers" className="hover:text-white transition-colors">Enterprise</Link>
            <Link href="https://revora.io/docs" className="hover:text-white transition-colors">Documentation</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/onboarding/wizard" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Revora Enterprise OS v1.0 is now live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Deterministic governance <br className="hidden md:block"/> for the modern enterprise.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Unify your architecture, automate compliance, and generate immutable runtime evidence without sacrificing developer velocity. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/onboarding/wizard" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-slate-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Start Building
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mission-control" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
              View Mission Control
            </Link>
          </div>
        </div>
      </section>

      {/* Product Preview Visualization */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 md:p-4 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="rounded-xl border border-white/5 bg-black overflow-hidden flex flex-col md:flex-row aspect-video md:aspect-auto md:h-[600px]">
              
              {/* Fake Sidebar */}
              <div className="w-64 border-r border-white/5 p-4 hidden md:flex flex-col gap-6">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-6 h-6 rounded bg-blue-500"></div>
                  <span className="font-semibold text-sm">Acme Corp</span>
                </div>
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-white bg-white/10 rounded-md flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    Mission Control
                  </div>
                  <div className="px-3 py-2 text-sm font-medium text-slate-500 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Execution History
                  </div>
                  <div className="px-3 py-2 text-sm font-medium text-slate-500 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Policies
                  </div>
                </div>
              </div>

              {/* Fake Content */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="h-8 w-48 bg-white/10 rounded mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div className="h-4 w-24 bg-white/10 rounded"></div>
                    <div className="h-8 w-16 bg-blue-500/20 rounded"></div>
                  </div>
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div className="h-4 w-24 bg-white/10 rounded"></div>
                    <div className="h-8 w-16 bg-emerald-500/20 rounded"></div>
                  </div>
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                    <div className="h-4 w-24 bg-white/10 rounded"></div>
                    <div className="h-8 w-16 bg-rose-500/20 rounded"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4">
                  <div className="h-4 w-32 bg-white/10 rounded mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-10 w-full bg-white/5 rounded"></div>
                    <div className="h-10 w-full bg-white/5 rounded"></div>
                    <div className="h-10 w-full bg-white/5 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Zero configuration, infinite control.</h2>
            <p className="text-slate-400 max-w-2xl">Revora removes the cognitive load of enterprise architecture. Everything is automatically governed, logged, and validated by the constitutional engine.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-black border border-white/5">
              <Shield className="w-8 h-8 text-blue-400 mb-6" />
              <h3 className="text-lg font-semibold mb-2">Immutable Evidence</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Every action generates cryptographic proof linked directly to a Runtime Execution ID.</p>
            </div>
            <div className="p-8 rounded-2xl bg-black border border-white/5">
              <Activity className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-lg font-semibold mb-2">Deterministic State</h3>
              <p className="text-slate-400 text-sm leading-relaxed">No AI hallucinations. Complete predictability and compliance across 220 business modules.</p>
            </div>
            <div className="p-8 rounded-2xl bg-black border border-white/5">
              <Layers className="w-8 h-8 text-purple-400 mb-6" />
              <h3 className="text-lg font-semibold mb-2">Progressive Disclosure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A consumer-grade interface that naturally reveals deep enterprise complexity only when required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-slate-500" />
            <span className="font-medium text-slate-400">Revora Enterprise</span>
          </div>
          <div className="text-sm text-slate-600">
            Certified for Production. Built for Scale.
          </div>
        </div>
      </footer>

    </div>
  );
}
