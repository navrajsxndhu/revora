"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function DemoGeneratorButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      await fetch('/api/demo/generate', { method: 'POST' });
      if (pathname.includes('/onboarding')) {
        router.push('/mission-control');
      } else {
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleGenerate}
      disabled={loading}
      className="px-5 py-2.5 bg-blue-900/40 hover:bg-blue-800 border border-blue-800 rounded text-blue-100 font-medium text-sm transition-colors disabled:opacity-50"
    >
      {loading ? "Generating Outage..." : "Generate Demo Environment"}
    </button>
  );
}
