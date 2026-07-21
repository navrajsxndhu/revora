import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Search, Code, Terminal, KeyRound, Webhook, FileText, ChevronRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DeveloperDocumentation() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/developer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Developer Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Developer Documentation</h1>
            <p className="text-slate-400">Premium documentation center covering APIs, SDKs, CLI usage, and platform governance requirements.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Documentation..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-96 transition-colors" />
             </div>
          </div>
        </header>

        <div className="flex flex-1 min-h-0 gap-8">
          {/* Sidebar Menu */}
          <div className="w-64 shrink-0 flex flex-col overflow-y-auto pr-4 space-y-6">
             <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Getting Started</h3>
                <ul className="space-y-1">
                   <li><Link href="#" className="text-sm text-blue-400 hover:text-blue-300 py-1.5 flex items-center justify-between group">Quickstart Guide <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">Authentication <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">Constitutional Governance <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                </ul>
             </div>
             
             <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Platform Integrations</h3>
                <ul className="space-y-1">
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">REST API Reference <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">SDK Guides (Node, Python...) <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">CLI Manual <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">Webhooks & AsyncAPI <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                </ul>
             </div>

             <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Use Cases & Examples</h3>
                <ul className="space-y-1">
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">Building an Extension <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">Human Approval Flows <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                   <li><Link href="#" className="text-sm text-slate-400 hover:text-slate-200 py-1.5 flex items-center justify-between group">Custom Reporting <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></Link></li>
                </ul>
             </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-2xl p-8 overflow-y-auto">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold text-white">Quickstart Guide</h2>
               <EvidenceBadge evidenceId="DOC-EV-801" timestamp="v4.2.0" />
             </div>
             
             <div className="prose prose-invert prose-slate max-w-none">
                <p className="text-slate-300 text-lg">
                  Welcome to the Revora Enterprise Developer Platform. Every interaction with our platform is constitutionally governed by the <code>EvidenceLedger</code>. 
                  This ensures that all integrations are secure, auditable, and compliant with enterprise policies.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4 border-b border-slate-800 pb-2">1. Obtain Credentials</h3>
                <p className="text-slate-400 mb-4">
                  Navigate to the <Link href="/developer/keys" className="text-blue-400 hover:underline">API Keys Center</Link> to generate an access token.
                  Remember that zero plaintext secrets are displayed after creation. Store it securely.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4 border-b border-slate-800 pb-2">2. Install the SDK</h3>
                <p className="text-slate-400 mb-4">
                  For Node.js environments, install the official SDK:
                </p>
                <div className="bg-black border border-slate-800 rounded-md p-4 font-mono text-sm text-blue-300 mb-4">
                   npm install @revora/sdk
                </div>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4 border-b border-slate-800 pb-2">3. Initialize Client</h3>
                <p className="text-slate-400 mb-4">
                   Configure the client with your token. The client automatically handles policy handshakes and evidence generation.
                </p>
<pre className="bg-black border border-slate-800 rounded-md p-4 font-mono text-sm text-slate-300 overflow-x-auto"><code className="language-typescript">{`import { RevoraClient } from '@revora/sdk';

const client = new RevoraClient({
  token: process.env.REVORA_API_KEY,
  environment: 'production'
});

// Fetch current user context
const me = await client.identity.whoami();
console.log(me.role); // e.g. "Developer"
`}</code></pre>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4 border-b border-slate-800 pb-2">Understanding Human Approval</h3>
                <div className="bg-amber-950/20 border border-amber-900/50 rounded-lg p-4 mb-4">
                   <p className="text-amber-300 text-sm m-0">
                     <strong>Important:</strong> If you attempt an API operation that mutates critical enterprise state (e.g., executing a financial transaction or altering production configurations), the API will return a <code>403 Forbidden</code> or a <code>202 Accepted (Pending Signature)</code> if your client is configured for async approvals. You must route these requests through the Constitutional Approval Flow.
                   </p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
