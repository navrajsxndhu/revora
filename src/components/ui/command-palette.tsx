"use client";

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { 
  Search, Shield, Users, Server, Activity, 
  Settings, BookOpen, Layers, Zap, Cloud, Sparkles, Network, ShieldAlert, Share2, Brain, Cpu, DatabaseZap, Database, Code, Bell, Box, Monitor, GitCompare, DollarSign, TrendingUp, CreditCard, FileWarning, Target, ShieldCheck, Scale, FileSignature, Landmark, Briefcase, FileCheck2, GraduationCap, HeartHandshake, PackageCheck, Truck, Building2, Factory, Cog, ClipboardList, Lightbulb, Rocket, LayoutDashboard, CalendarSync, Map, Leaf, TreePine, Droplets, BarChart, Globe, Presentation, Workflow, Hexagon, Undo, PlayCircle, History, RefreshCw, BrainCircuit, Bot, KeyRound, FileKey2, Fingerprint, Lock, CloudCog, Thermometer, ShoppingCart, Store, Tag, Puzzle, DownloadCloud, Blocks, Code2, BarChart2
} from 'lucide-react';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  if (!open) return null;

  const navigate = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        <Command label="Global Command Palette" className="flex flex-col h-full bg-transparent" onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}>
          <div className="flex items-center px-4 border-b border-slate-800">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <Command.Input 
              autoFocus
              placeholder="Search organizations, execute policies, or navigate (Ctrl+K)..." 
              className="flex-1 h-14 bg-transparent text-slate-200 placeholder:text-slate-500 focus:outline-none font-sans text-lg"
            />
          </div>
          
          <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-700">
            <Command.Empty className="py-6 text-center text-sm text-slate-400">
              No deterministic evidence found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
              <Command.Item onSelect={() => navigate('/workspace')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-emerald-400" />
                My Workspace
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-purple-400" />
                Executive Dashboard
              </Command.Item>
              <Command.Item onSelect={() => navigate('/mission-control')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Shield className="w-4 h-4 text-blue-400" />
                Global Mission Control
              </Command.Item>
              <Command.Item onSelect={() => navigate('/cryptography')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Lock className="w-4 h-4 text-emerald-400" />
                Cryptography Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/cryptography/certificates')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileKey2 className="w-4 h-4 text-blue-400" />
                Certificate Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/cryptography/secrets')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <KeyRound className="w-4 h-4 text-amber-400" />
                Secrets & Key Management
              </Command.Item>
              <Command.Item onSelect={() => navigate('/cryptography/post-quantum')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Fingerprint className="w-4 h-4 text-indigo-400" />
                Post-Quantum Readiness
              </Command.Item>
              <Command.Item onSelect={() => navigate('/cryptography/policies')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                Cryptographic Policies
              </Command.Item>
              <Command.Item onSelect={() => navigate('/cryptography/encryption')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Lock className="w-4 h-4 text-emerald-400" />
                Encryption Coverage
              </Command.Item>
              <Command.Item onSelect={() => navigate('/cryptography/audit')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-slate-400" />
                Cryptographic Audit Ledger
              </Command.Item>
              <Command.Item onSelect={() => navigate('/edge')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-emerald-400" />
                Edge Operations Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/edge/devices')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cpu className="w-4 h-4 text-blue-400" />
                Device & Gateway Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/edge/operations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Factory className="w-4 h-4 text-emerald-400" />
                Industrial Operations
              </Command.Item>
              <Command.Item onSelect={() => navigate('/edge/deployments')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <CloudCog className="w-4 h-4 text-indigo-400" />
                Edge Fleet Deployments
              </Command.Item>
              <Command.Item onSelect={() => navigate('/edge/telemetry')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Thermometer className="w-4 h-4 text-amber-400" />
                Telemetry Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/edge/security')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Device Security Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/edge/synchronization')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-slate-400" />
                Edge Synchronization
              </Command.Item>
              <Command.Item onSelect={() => navigate('/commerce')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                Commerce Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/commerce/catalog')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Store className="w-4 h-4 text-blue-400" />
                Product Catalog
              </Command.Item>
              <Command.Item onSelect={() => navigate('/commerce/channels')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Globe className="w-4 h-4 text-emerald-400" />
                Omnichannel Operations
              </Command.Item>
              <Command.Item onSelect={() => navigate('/commerce/orders')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShoppingCart className="w-4 h-4 text-indigo-400" />
                Order & Fulfillment Hub
              </Command.Item>
              <Command.Item onSelect={() => navigate('/commerce/pricing')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Tag className="w-4 h-4 text-purple-400" />
                Pricing & Promotions
              </Command.Item>
              <Command.Item onSelect={() => navigate('/commerce/marketplaces')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                Marketplace Integrations
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Puzzle className="w-4 h-4 text-blue-400" />
                Marketplace Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/catalog')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                Extension Catalog
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/installed')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <DownloadCloud className="w-4 h-4 text-blue-400" />
                Installed Extensions
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/low-code')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Blocks className="w-4 h-4 text-indigo-400" />
                Low-Code Builder
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/sdk')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Code2 className="w-4 h-4 text-purple-400" />
                Plugin SDK Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/permissions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <KeyRound className="w-4 h-4 text-amber-400" />
                Extension Permissions
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/packages')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Box className="w-4 h-4 text-emerald-400" />
                Package Repository
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/certification')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Certification Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/templates')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Workflow className="w-4 h-4 text-purple-400" />
                Automation Templates
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/runtime')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <PlayCircle className="w-4 h-4 text-indigo-400" />
                Extension Runtime Monitor
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/audit')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-amber-400" />
                Marketplace Audit Ledger
              </Command.Item>
              <Command.Item onSelect={() => navigate('/marketplace/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-emerald-400" />
                Ecosystem Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/commerce/customers')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Users className="w-4 h-4 text-slate-400" />
                Customer Experience
              </Command.Item>
              <Command.Item onSelect={() => navigate('/agents')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Bot className="w-4 h-4 text-blue-400" />
                Autonomous Agent Command
              </Command.Item>
              <Command.Item onSelect={() => navigate('/agents/registry')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-blue-400" />
                Enterprise Agent Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/agents/capabilities')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Agent Capabilities
              </Command.Item>
              <Command.Item onSelect={() => navigate('/agents/executions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-emerald-400" />
                Execution Ledger
              </Command.Item>
              <Command.Item onSelect={() => navigate('/agents/approvals')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileSignature className="w-4 h-4 text-rose-400" />
                Human Approval Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/agents/policies')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                Agent Policy Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/agents/audit')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                Audit & Compliance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-twin')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Hexagon className="w-4 h-4 text-indigo-400" />
                Enterprise Digital Twin
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-twin/models')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Database className="w-4 h-4 text-blue-400" />
                Enterprise Digital Models
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-twin/scenarios')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-indigo-400" />
                Strategic Scenario Simulator
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-twin/dependencies')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-purple-400" />
                Enterprise Dependency Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-twin/history')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-amber-400" />
                Time Travel & Historical Replay
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-twin/capacity')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Predictive Capacity Planning
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-twin/sync')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <RefreshCw className="w-4 h-4 text-purple-500" />
                Twin Synchronization Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/situation-room')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Globe className="w-4 h-4 text-emerald-500" />
                Executive Situation Room
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/decisions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Briefcase className="w-4 h-4 text-blue-500" />
                Enterprise Decision Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/simulator')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Workflow className="w-4 h-4 text-purple-400" />
                Cross-Platform Impact Simulator
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/priorities')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Target className="w-4 h-4 text-rose-500" />
                Enterprise Priority Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/board')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Presentation className="w-4 h-4 text-amber-500" />
                Board Meeting Workspace
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/esg')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Leaf className="w-4 h-4 text-emerald-500" />
                Executive ESG Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/esg')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Globe className="w-4 h-4 text-blue-400" />
                Sustainability Operations Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/esg/registry')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <TreePine className="w-4 h-4 text-purple-400" />
                Enterprise ESG Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/esg/reports')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart className="w-4 h-4 text-amber-400" />
                ESG Reporting Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/products')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Target className="w-4 h-4 text-blue-500" />
                Executive Product Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/products')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Box className="w-4 h-4 text-emerald-400" />
                Product Portfolio Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/products/portfolio')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LayoutDashboard className="w-4 h-4 text-purple-400" />
                Enterprise Product Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/products/roadmaps')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-amber-400" />
                Roadmap & Release Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/manufacturing')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Factory className="w-4 h-4 text-emerald-500" />
                Executive Manufacturing Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/manufacturing')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cog className="w-4 h-4 text-blue-400" />
                Manufacturing Operations Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/manufacturing/production')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ClipboardList className="w-4 h-4 text-purple-400" />
                Production Order Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/manufacturing/quality')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileCheck2 className="w-4 h-4 text-amber-400" />
                Quality Assurance Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/supply-chain')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <PackageCheck className="w-4 h-4 text-blue-500" />
                Executive Supply Chain Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/supply-chain')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Truck className="w-4 h-4 text-emerald-400" />
                Supply Chain Operations Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/supply-chain/vendors')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Building2 className="w-4 h-4 text-purple-400" />
                Enterprise Vendor Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/supply-chain/procurement')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileCheck2 className="w-4 h-4 text-amber-400" />
                Procurement & Inventory Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/customers')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <HeartHandshake className="w-4 h-4 text-emerald-500" />
                Executive Customer Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/customers')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Customer Operations Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/customers/accounts')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Users className="w-4 h-4 text-blue-400" />
                Enterprise Customer Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/customers/revenue')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <DollarSign className="w-4 h-4 text-amber-400" />
                Revenue Operations & Sales
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/workforce')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Users className="w-4 h-4 text-blue-500" />
                Executive Workforce Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workforce')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Human Capital Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workforce/employees')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Users className="w-4 h-4 text-blue-400" />
                Enterprise Employee Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workforce/talent')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                Talent & Performance Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/legal')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Scale className="w-4 h-4 text-amber-500" />
                Executive Legal Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/legal')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Briefcase className="w-4 h-4 text-blue-400" />
                Legal Operations Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/legal/contracts')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileSignature className="w-4 h-4 text-emerald-400" />
                Enterprise Contract Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/legal/regulations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Landmark className="w-4 h-4 text-amber-400" />
                Regulatory Compliance Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/risk')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Target className="w-4 h-4 text-rose-500" />
                Executive Risk Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/risk')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                Enterprise Risk Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/risk/register')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileWarning className="w-4 h-4 text-amber-400" />
                Enterprise Risk Register
              </Command.Item>
              <Command.Item onSelect={() => navigate('/risk/compliance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Compliance & Control Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/executive/finance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                Executive Finance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/finops')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cloud className="w-4 h-4 text-blue-400" />
                FinOps Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/finops/budgets')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                Budget Optimization
              </Command.Item>
              <Command.Item onSelect={() => navigate('/finops/licenses')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <CreditCard className="w-4 h-4 text-purple-400" />
                SaaS License Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/assets')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-blue-400" />
                Enterprise Asset & CMDB
              </Command.Item>
              <Command.Item onSelect={() => navigate('/assets/inventory')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Box className="w-4 h-4 text-emerald-400" />
                Global Asset Inventory
              </Command.Item>
              <Command.Item onSelect={() => navigate('/assets/drift')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GitCompare className="w-4 h-4 text-rose-400" />
                Configuration Drift Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/assets/dependencies')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Monitor className="w-4 h-4 text-purple-400" />
                Dependency Explorer
              </Command.Item>
              <Command.Item onSelect={() => navigate('/operations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-emerald-400" />
                Enterprise Operations Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/operations/incidents')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                Incident Management
              </Command.Item>
              <Command.Item onSelect={() => navigate('/operations/alerts')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Bell className="w-4 h-4 text-amber-400" />
                Enterprise Alerts
              </Command.Item>
              <Command.Item onSelect={() => navigate('/operations/topology')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Share2 className="w-4 h-4 text-emerald-500" />
                Infrastructure Topology
              </Command.Item>
              <Command.Item onSelect={() => navigate('/api-platform')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-purple-400" />
                Enterprise API Platform
              </Command.Item>
              <Command.Item onSelect={() => navigate('/api-platform/catalog')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Server className="w-4 h-4 text-blue-400" />
                Enterprise API Catalog
              </Command.Item>
              <Command.Item onSelect={() => navigate('/api-platform/developers')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Code className="w-4 h-4 text-emerald-400" />
                Developer Portal
              </Command.Item>
              <Command.Item onSelect={() => navigate('/data-platform')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <DatabaseZap className="w-4 h-4 text-blue-500" />
                Enterprise Data Platform
              </Command.Item>
              <Command.Item onSelect={() => navigate('/data-platform/catalog')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Database className="w-4 h-4 text-slate-400" />
                Enterprise Data Catalog
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ai-governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Brain className="w-4 h-4 text-purple-400" />
                AI Governance Authority
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ai-governance/models')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cpu className="w-4 h-4 text-slate-400" />
                Enterprise Model Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/knowledge')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Share2 className="w-4 h-4 text-emerald-400" />
                Enterprise Knowledge Graph
              </Command.Item>
              <Command.Item onSelect={() => navigate('/knowledge/explorer')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Search className="w-4 h-4 text-slate-400" />
                Global Search (Explorer)
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workflows')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-emerald-400" />
                Workflow Orchestration
              </Command.Item>
              <Command.Item onSelect={() => navigate('/approvals')} className="flex items-center gap-2 px-3 py-3 text-sm text-amber-400 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-amber-300 transition-colors bg-amber-500/5">
                <ShieldAlert className="w-4 h-4" />
                Pending Approvals (3)
              </Command.Item>
              <Command.Item onSelect={() => navigate('/copilot')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Sparkles className="w-4 h-4 text-blue-300" />
                Constitutional Copilot
              </Command.Item>
              <Command.Item onSelect={() => navigate('/identity')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Users className="w-4 h-4 text-purple-400" />
                Identity & Access Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-rose-400" />
                Analytics Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/integrations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cloud className="w-4 h-4 text-emerald-400" />
                Integration Marketplace
              </Command.Item>
              <Command.Item onSelect={() => navigate('/analytics/explorer')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Server className="w-4 h-4 text-amber-400" />
                Evidence Explorer
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Quick Actions" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/workspace/projects/prj-101')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Zap className="w-4 h-4 text-amber-400" />
                Create New Project
              </Command.Item>
              <Command.Item onSelect={() => navigate('/onboarding/wizard')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Zap className="w-4 h-4 text-blue-400" />
                Setup Guided Experience
              </Command.Item>
              <Command.Item onSelect={() => navigate('/mission-control/runtime')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Server className="w-4 h-4 text-rose-400" />
                Search Evidence Ledgers
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="System" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/settings')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Settings className="w-4 h-4 text-slate-400" />
                Platform Settings
              </Command.Item>
              <Command.Item onSelect={() => window.open('https://revora.io/docs')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BookOpen className="w-4 h-4 text-slate-400" />
                Documentation
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
