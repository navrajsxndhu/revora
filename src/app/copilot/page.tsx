"use client";

import React, { useState } from "react";
import { Search, Sparkles, Clock, MessageSquare, Shield, CheckCircle2, Pin, ChevronRight, FileText, Activity } from "lucide-react";
import { EvidenceInspector } from "@/components/ui/evidence-inspector";

export default function ConstitutionalCopilot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "I am your Constitutional Copilot. I can search enterprise telemetry, explain active policies, and summarize production incidents using immutable Runtime Evidence.\n\nI cannot execute autonomous actions. How can I assist your investigation today?",
      executionId: "SYS-INIT-01",
      policies: ["POL-001 (Strict Isolation)", "POL-010 (Read-Only AI)"]
    }
  ]);
  
  const [input, setInput] = useState("");
  const [activeInspector, setActiveInspector] = useState(messages[0]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
      executionId: "",
      policies: []
    };

    const simulatedResponse = {
      role: "assistant",
      content: `Based on the latest compliance audit telemetry, the deployment to \`prod-eu-west\` was automatically halted because it violated **Data Residency Policy (POL-099)**. \n\nNo unauthorized changes were made to the state. Would you like me to initiate an emergency deployment override workflow? (This will require Executive Sign-off).`,
      executionId: `COPILOT-EVD-${Math.floor(Math.random() * 10000)}`,
      policies: ["POL-099 (Data Residency)", "POL-042 (Deployment Guardrail)"]
    };

    setMessages([...messages, userMessage, simulatedResponse]);
    setActiveInspector(simulatedResponse);
    setInput("");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white pt-16">
      
      {/* Left Panel: History */}
      <div className="w-80 border-r border-slate-900 bg-slate-950 flex flex-col shrink-0">
        <div className="p-4 border-b border-slate-900 flex items-center justify-between">
          <h2 className="font-semibold flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-slate-500" />
            Intelligence History
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-6">
          
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Pinned Reports</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 rounded-md transition-colors text-left">
                <Pin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">Weekly Compliance Summary</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 rounded-md transition-colors text-left">
                <Pin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">Q3 Identity Access Review</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Recent Investigations</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:bg-slate-900 hover:text-slate-200 rounded-md transition-colors text-left">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Why was deployment rejected?</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:bg-slate-900 hover:text-slate-200 rounded-md transition-colors text-left">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Show production incidents</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:bg-slate-900 hover:text-slate-200 rounded-md transition-colors text-left">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Find SOC2 evidence</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Center Panel: Chat Interface */}
      <div className="flex-1 flex flex-col bg-black min-w-0">
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700 shadow-2xl shadow-blue-900/20">
                <Sparkles className="w-8 h-8 text-blue-300" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight mb-2">Constitutional Copilot</h1>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Secure, deterministic intelligence. No hallucinated metrics. No autonomous mutations.
              </p>
            </div>
          </div>

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-5 ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-slate-900/80 border border-slate-800 text-slate-200 shadow-xl'
              }`}>
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-800/50">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Cryptographically Verified</span>
                  </div>
                )}
                
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {msg.content}
                </div>

                {msg.role === 'assistant' && (
                  <div className="mt-4 flex items-center justify-between">
                    <button 
                      onClick={() => setActiveInspector(msg)}
                      className="text-xs flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                    >
                      <Activity className="w-3 h-3" /> View Source Telemetry
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>

        {/* Input Area */}
        <div className="p-6 bg-black border-t border-slate-900">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSend} className="relative flex items-center">
              <Sparkles className="w-5 h-5 absolute left-4 text-blue-500" />
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about compliance, security alerts, or runtime evidence..." 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-12 py-4 text-white focus:outline-none focus:border-blue-500 transition-all shadow-lg"
              />
              <button type="submit" disabled={!input.trim()} className="absolute right-4 p-2 bg-blue-600 rounded-lg text-white disabled:opacity-50 disabled:bg-slate-700 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
            <div className="flex justify-center gap-4 mt-4">
              <span className="text-xs text-slate-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Strict RBAC Enforced</span>
              <span className="text-xs text-slate-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Tenant Isolation Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Evidence Inspector */}
      <div className="w-80 shrink-0">
        <EvidenceInspector 
          executionId={activeInspector.executionId} 
          policies={activeInspector.policies} 
          timestamp="Just now" 
          confidence={99.9} 
        />
      </div>
      
    </div>
  );
}
