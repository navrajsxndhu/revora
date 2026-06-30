import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PIRData {
  id: string;
  title: string;
  status: string;
  summary: string;
  rootCause: string;
  impact: string;
  timelineMarkdown: string;
  resolutionMarkdown: string;
  preventativeActions: string;
  generatedAt: Date;
  approvedBy?: string;
}

export function PirViewer({ pir }: { pir: PIRData }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-10 max-w-4xl mx-auto font-sans leading-relaxed text-slate-800">
      <div className="flex justify-between items-start mb-12 border-b pb-6">
        <div>
          <h1 className="text-3xl font-light mb-2">{pir.title}</h1>
          <div className="text-sm text-slate-500">Generated: {new Date(pir.generatedAt).toLocaleString()}</div>
        </div>
        <div>
          <span className={`px-3 py-1 rounded text-xs font-semibold tracking-wide ${
            pir.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
          }`}>
            {pir.status}
          </span>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-4 text-slate-900 border-b pb-2">Executive Summary</h2>
        <p>{pir.summary}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-4 text-slate-900 border-b pb-2">Impact Analysis</h2>
        <div className="prose prose-sm prose-slate max-w-none">
          <ReactMarkdown>{pir.impact}</ReactMarkdown>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-4 text-slate-900 border-b pb-2">Root Cause</h2>
        <p>{pir.rootCause}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-4 text-slate-900 border-b pb-2">Timeline Construction</h2>
        <div className="bg-slate-50 p-6 rounded-md font-mono text-sm overflow-x-auto whitespace-pre">
          {pir.timelineMarkdown.replace('### Incident Timeline\n\n', '')}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-4 text-slate-900 border-b pb-2">Resolution</h2>
        <div className="prose prose-sm prose-slate max-w-none">
          <ReactMarkdown>{pir.resolutionMarkdown}</ReactMarkdown>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-4 text-slate-900 border-b pb-2">Preventative Actions</h2>
        <div className="prose prose-sm prose-slate max-w-none bg-blue-50 p-6 rounded-md border border-blue-100">
          <ReactMarkdown>{pir.preventativeActions}</ReactMarkdown>
        </div>
      </section>
      
      {pir.status === 'APPROVED' && pir.approvedBy && (
        <div className="mt-12 pt-6 border-t text-sm text-slate-500 text-right">
          Approved by {pir.approvedBy}
        </div>
      )}
    </div>
  );
}
