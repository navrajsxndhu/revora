"use client";

import { useMemo } from "react";

export function PostMortemViewer({ 
  incidentId,
  resolutionNotes, 
  createdAt, 
  resolvedAt 
}: { 
  incidentId: string;
  resolutionNotes: string;
  createdAt: Date;
  resolvedAt: Date | null;
}) {
  
  const parseSections = (markdown: string) => {
    const sections: Record<string, string> = {};
    const lines = markdown.split("\n");
    let currentHeader = "summary";
    sections[currentHeader] = "";

    lines.forEach(line => {
      if (line.startsWith("**") && line.endsWith("**:")) {
        currentHeader = line.replace(/\*\*/g, "").replace(":", "").trim().toLowerCase();
        sections[currentHeader] = "";
      } else if (line.startsWith("**") && line.includes("**")) {
         // handle "**Resolved by...**"
         sections[currentHeader] += line + "\n";
      } else {
        sections[currentHeader] += line + "\n";
      }
    });
    
    return sections;
  };

  const sections = useMemo(() => parseSections(resolutionNotes), [resolutionNotes]);

  const exportMarkdown = () => {
    let md = `# Post-Mortem: Incident ${incidentId}\n\n`;
    if (resolvedAt) {
      const duration = Math.round((new Date(resolvedAt).getTime() - new Date(createdAt).getTime()) / 60000);
      md += `**Time to Resolution:** ${duration} minutes\n\n`;
    }
    md += resolutionNotes;
    
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `post-mortem-${incidentId}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg mb-8 overflow-hidden">
      <div className="bg-emerald-950/40 border-b border-emerald-900/50 p-4 flex justify-between items-center">
        <h2 className="text-emerald-400 font-semibold text-lg flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Incident Post-Mortem
        </h2>
        <button 
          onClick={exportMarkdown}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded transition-colors"
        >
          Export Markdown
        </button>
      </div>

      <div className="p-6 space-y-6">
        {resolvedAt && (
          <div className="flex space-x-8 text-sm">
            <div>
              <span className="text-slate-500 block mb-1">Time to Resolution (MTTR)</span>
              <span className="text-slate-200 font-mono">{Math.round((new Date(resolvedAt).getTime() - new Date(createdAt).getTime()) / 60000)} minutes</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">Resolved At</span>
              <span className="text-slate-200 font-mono">{new Date(resolvedAt).toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {sections['root cause'] && (
            <div className="bg-slate-950/50 p-4 rounded border border-slate-800/50">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Root Cause</h3>
              <p className="text-slate-300 text-sm whitespace-pre-wrap">{sections['root cause'].trim()}</p>
            </div>
          )}
          
          {sections['mitigation'] && (
            <div className="bg-slate-950/50 p-4 rounded border border-slate-800/50">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Mitigation Actions</h3>
              <p className="text-slate-300 text-sm whitespace-pre-wrap">{sections['mitigation'].trim()}</p>
            </div>
          )}

          {sections['future notes'] && (
            <div className="bg-slate-950/50 p-4 rounded border border-slate-800/50">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Future Notes & Next Steps</h3>
              <p className="text-slate-300 text-sm whitespace-pre-wrap">{sections['future notes'].trim()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
