"use client";

import { motion } from "framer-motion";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col">
      <div className="max-w-6xl mx-auto w-full">
        <header className="flex justify-between items-end mb-10 pb-6 border-b border-slate-900">
          <div className="space-y-2">
            <div className="h-8 w-48 bg-slate-900 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-slate-900/50 rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-32 bg-slate-900 rounded animate-pulse"></div>
        </header>
        
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-32 bg-slate-900/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
              <div className="flex justify-between items-start mb-4">
                <div className="w-9 h-9 bg-slate-800 rounded-lg animate-pulse"></div>
                <div className="w-20 h-6 bg-slate-800 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-24 bg-slate-800 rounded mb-2 animate-pulse"></div>
              <div className="h-8 w-16 bg-slate-800 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <div className="h-6 w-48 bg-slate-900 rounded border-b border-slate-800 pb-2 animate-pulse"></div>
            <div className="h-64 bg-slate-900/50 border border-slate-800 rounded-xl animate-pulse"></div>
          </div>
          <div className="space-y-6">
            <div className="h-6 w-32 bg-slate-900 rounded border-b border-slate-800 pb-2 animate-pulse"></div>
            <div className="h-20 w-full bg-slate-900 rounded-lg border border-slate-800 animate-pulse"></div>
            <div className="h-20 w-full bg-slate-900 rounded-lg border border-slate-800 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
