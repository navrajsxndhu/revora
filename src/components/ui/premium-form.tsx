"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PremiumFormProps {
  title: string;
  description: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  submitLabel?: string;
  isSubmitting?: boolean;
}

export function PremiumForm({ title, description, onSubmit, children, submitLabel = "Save Changes", isSubmitting }: PremiumFormProps) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-2xl">
      <div className="p-6 border-b border-slate-800 bg-slate-950/50">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      
      <form onSubmit={onSubmit} className="p-6 space-y-6">
        {children}
        
        <div className="pt-6 border-t border-slate-800 flex justify-end">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-medium hover:bg-slate-200 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {submitLabel}
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
