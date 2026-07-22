"use client";

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { Search, Shield, Users, Server, Activity, Settings, BookOpen, Layers, Zap, Cloud, Sparkles, Network, ShieldAlert, Share2, Brain, Cpu, DatabaseZap, Database, Code, Bell, Box, Monitor, GitCompare, DollarSign, TrendingUp, CreditCard, FileWarning, Target, ShieldCheck, Scale, FileSignature, Landmark, Briefcase, FileCheck2, GraduationCap, HeartHandshake, PackageCheck, Truck, Building2, Factory, Cog, ClipboardList, Lightbulb, Rocket, LayoutDashboard, CalendarSync, Map, Leaf, TreePine, Droplets, BarChart, Globe, Presentation, Workflow, Hexagon, Undo, PlayCircle, History, RefreshCw, BrainCircuit, Bot, KeyRound, FileKey2, Fingerprint, Lock, CloudCog, Thermometer, ShoppingCart, Store, Tag, Puzzle, DownloadCloud, Blocks, Code2, BarChart2, TerminalSquare, GitMerge, LineChart, MapPin, AlertTriangle, Gavel, FileCode2, Eye, Smile, Move, Languages, Accessibility, Waypoints, Radar, Telescope, BarChart3, MonitorPlay, Columns, Menu, Save, Layout, SearchCode, UsersRound, PenTool, GitPullRequest, UserCheck, Library, Plug, ListChecks, RadioTower, HeartPulse, Siren, HardDrive, Flame, Crosshair, LayoutTemplate, Compass, FileText, Paintbrush, Component, Wand2, Palette, Type, Sparkle, Clock, ActivitySquare, CheckSquare, AlertOctagon, Navigation, Smartphone, Tablet, WifiOff, Keyboard, UserCircle2, Star, MessageSquare, Unlock, FileCode, Terminal, Gauge, Wind, Loader2, MousePointerClick, Maximize, Users2, Inbox, Megaphone, Calendar, Tags, FolderHeart, Award, MonitorSmartphone } from "lucide-react";

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

            <Command.Group heading="EDSMLMGP" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/ml-platform')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-purple-400" />
                Enterprise ML Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/models')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-purple-400" />
                Enterprise Model Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/features')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-blue-400" />
                Feature Store Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/training')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-emerald-400" />
                Training Pipeline Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/experiments')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Brain className="w-4 h-4 text-purple-400" />
                Experiment Tracking Workspace
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Building2 className="w-4 h-4 text-emerald-400" />
                Enterprise Architecture Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/capabilities')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Map className="w-4 h-4 text-blue-400" />
                Business Capability Map
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/applications')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Box className="w-4 h-4 text-amber-400" />
                Enterprise Application Portfolio
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/standards')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileCode2 className="w-4 h-4 text-purple-400" />
                Technology Standards & Reference
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/transformation')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Rocket className="w-4 h-4 text-rose-400" />
                Strategic Transformation Portfolio
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/roadmaps')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MapPin className="w-4 h-4 text-blue-400" />
                Enterprise Roadmap Planner
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/debt')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Technical Debt Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/reviews')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Gavel className="w-4 h-4 text-emerald-500" />
                Architecture Review Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-purple-400" />
                Architecture Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/architecture/audit')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Enterprise Architecture Audit Ledger
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/deployments')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GitMerge className="w-4 h-4 text-blue-400" />
                Model Deployment Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/inference')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cpu className="w-4 h-4 text-slate-400" />
                Inference Monitoring Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/monitoring')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-rose-400" />
                Model Monitoring & Drift Detection
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/datasets')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Database className="w-4 h-4 text-slate-400" />
                Dataset Governance Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-amber-400" />
                MLOps Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/ml-platform/audit')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                ML Audit Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="REIF" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/intelligence-fabric')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Share2 className="w-4 h-4 text-teal-500" />
                Enterprise Intelligence Fabric
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/relationships')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Share2 className="w-4 h-4 text-teal-400" />
                Relationship Graph
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/correlations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GitMerge className="w-4 h-4 text-cyan-400" />
                Correlation Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/dependencies')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Waypoints className="w-4 h-4 text-emerald-400" />
                Dependency Explorer
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/context')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-blue-400" />
                Business Context
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/impact')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Radar className="w-4 h-4 text-rose-400" />
                Impact Analyzer
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/decisions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-purple-400" />
                Decision Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/insights')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Telescope className="w-4 h-4 text-fuchsia-400" />
                Insight Discovery
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart3 className="w-4 h-4 text-yellow-400" />
                Intelligence Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Intelligence Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence-fabric/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="REDWS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/digital-workspace')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MonitorPlay className="w-4 h-4 text-indigo-400" />
                Enterprise Workspace Hub
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/panels')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Columns className="w-4 h-4 text-indigo-400" />
                Multi-Panel Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/dock')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Menu className="w-4 h-4 text-cyan-400" />
                Universal Dock
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/memory')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Save className="w-4 h-4 text-emerald-400" />
                Memory Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/compare')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GitCompare className="w-4 h-4 text-blue-400" />
                Comparison Studio
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/canvas')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layout className="w-4 h-4 text-rose-400" />
                Canvas Manager
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/search')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <SearchCode className="w-4 h-4 text-purple-400" />
                Universal Search
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-fuchsia-400" />
                Workspace Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/collaboration')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <UsersRound className="w-4 h-4 text-yellow-400" />
                Collaboration Layer
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Scale className="w-4 h-4 text-emerald-500" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/digital-workspace/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RAEOP" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/orchestration')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Workflow className="w-4 h-4 text-indigo-400" />
                Enterprise Orchestration
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/designer')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <PenTool className="w-4 h-4 text-indigo-400" />
                Workflow Designer
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/workflows')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GitPullRequest className="w-4 h-4 text-cyan-400" />
                Workflow Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/approvals')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                Human Approvals
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/library')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Library className="w-4 h-4 text-blue-400" />
                Process Library
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/integrations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Plug className="w-4 h-4 text-rose-400" />
                Integration Hub
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/simulation')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <PlayCircle className="w-4 h-4 text-purple-400" />
                Simulation Studio
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-fuchsia-400" />
                Execution Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Scale className="w-4 h-4 text-yellow-400" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/registry')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ListChecks className="w-4 h-4 text-emerald-500" />
                Automation Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/orchestration/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="REOROIP" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/observability')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-indigo-400" />
                Enterprise Observability
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/telemetry')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <RadioTower className="w-4 h-4 text-indigo-400" />
                Telemetry Explorer
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/services')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <HeartPulse className="w-4 h-4 text-cyan-400" />
                Service Health
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/incidents')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Siren className="w-4 h-4 text-rose-400" />
                Incident Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/reliability')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Reliability Engineering
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/capacity')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <HardDrive className="w-4 h-4 text-blue-400" />
                Capacity Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/dependencies')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-purple-400" />
                Dependency Map
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-fuchsia-400" />
                Operational Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Scale className="w-4 h-4 text-yellow-400" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/resilience')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Flame className="w-4 h-4 text-orange-400" />
                Resilience Simulator
              </Command.Item>
              <Command.Item onSelect={() => navigate('/observability/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="REBIKEDP" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/business-intelligence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Presentation className="w-4 h-4 text-indigo-400" />
                Executive Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/kpis')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Target className="w-4 h-4 text-indigo-400" />
                KPI Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/objectives')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Crosshair className="w-4 h-4 text-cyan-400" />
                Strategic Objectives
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/scorecards')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LayoutTemplate className="w-4 h-4 text-emerald-400" />
                Executive Scorecards
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/forecasting')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Forecasting
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/balanced-scorecard')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Compass className="w-4 h-4 text-purple-400" />
                Balanced Scorecard
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/decisions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Decision Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart3 className="w-4 h-4 text-rose-400" />
                BI Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Scale className="w-4 h-4 text-fuchsia-400" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/reports')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileText className="w-4 h-4 text-orange-400" />
                Reporting Studio
              </Command.Item>
              <Command.Item onSelect={() => navigate('/business-intelligence/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="REDL" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/design-language')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Paintbrush className="w-4 h-4 text-orange-500" />
                Design Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/tokens')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-indigo-400" />
                Token Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/components')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Component className="w-4 h-4 text-cyan-400" />
                Component Library
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/motion')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Wand2 className="w-4 h-4 text-emerald-400" />
                Motion Studio
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/themes')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Palette className="w-4 h-4 text-rose-400" />
                Theme System
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/typography')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Type className="w-4 h-4 text-pink-400" />
                Typography
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/icons')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Sparkle className="w-4 h-4 text-purple-400" />
                Iconography
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/polish')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Experience Polish
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-blue-500" />
                Design Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/design-language/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RECCOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/workspace')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LayoutDashboard className="w-4 h-4 text-fuchsia-500" />
                Enterprise Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/timeline')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Clock className="w-4 h-4 text-indigo-400" />
                Unified Timeline
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/activity')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ActivitySquare className="w-4 h-4 text-cyan-400" />
                Enterprise Activity Feed
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/approvals')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
                Unified Human Approvals
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/situation')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                Executive Situation Room
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/health')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <HeartPulse className="w-4 h-4 text-pink-400" />
                Organizational Health
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/assistant')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Bot className="w-4 h-4 text-purple-400" />
                Enterprise Assistant
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/navigation')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Navigation className="w-4 h-4 text-blue-400" />
                Navigation Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart3 className="w-4 h-4 text-yellow-500" />
                Workspace Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Workspace Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/workspace/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RMDCOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/continuity')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <RefreshCw className="w-4 h-4 text-indigo-500" />
                Continuity Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/sessions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <RefreshCw className="w-4 h-4 text-indigo-400" />
                Cross-Device Sessions
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/mobile')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                Mobile Experience
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/tablets')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Tablet className="w-4 h-4 text-blue-400" />
                Tablet Productivity
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/offline')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <WifiOff className="w-4 h-4 text-amber-400" />
                Offline Operations
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/devices')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Monitor className="w-4 h-4 text-emerald-400" />
                Device Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/notifications')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Bell className="w-4 h-4 text-rose-400" />
                Smart Notifications
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/input')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Keyboard className="w-4 h-4 text-purple-400" />
                Universal Input
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-yellow-500" />
                Continuity Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/continuity/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RPAWPOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/personalization')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <UserCircle2 className="w-4 h-4 text-cyan-500" />
                Personalization Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/workspaces')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                Adaptive Workspaces
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/widgets')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Box className="w-4 h-4 text-blue-400" />
                Smart Widgets
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/favorites')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Star className="w-4 h-4 text-amber-400" />
                Intelligent Favorites
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/focus')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Target className="w-4 h-4 text-purple-400" />
                Productivity Focus
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/notifications')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Bell className="w-4 h-4 text-rose-400" />
                Adaptive Notifications
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/insights')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-emerald-400" />
                Productivity Insights
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/templates')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-indigo-400" />
                Workspace Templates
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-yellow-500" />
                Personalization Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/personalization/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RTSTOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/trust')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                Trust Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/explanations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Explainable Decisions
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/permissions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Unlock className="w-4 h-4 text-blue-400" />
                Permission Transparency
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/privacy')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Eye className="w-4 h-4 text-amber-400" />
                Privacy & Data Transparency
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/policies')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileCode className="w-4 h-4 text-purple-400" />
                Policy Intelligence Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/timeline')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-rose-400" />
                Security Activity Timeline
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/confidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                Confidence Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-yellow-500" />
                Transparency Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Trust Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/simulator')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Terminal className="w-4 h-4 text-blue-500" />
                Confidence Simulator
              </Command.Item>
              <Command.Item onSelect={() => navigate('/trust/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Trust Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RPMDOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/performance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Gauge className="w-4 h-4 text-cyan-500" />
                Performance Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/motion')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Wind className="w-4 h-4 text-cyan-400" />
                Motion Design System
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/loading')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Loader2 className="w-4 h-4 text-blue-400" />
                Intelligent Loading
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/feedback')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MousePointerClick className="w-4 h-4 text-amber-400" />
                Interaction Feedback Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/responsive')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Maximize className="w-4 h-4 text-purple-400" />
                Enterprise Responsiveness
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/stability')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-rose-400" />
                Visual Stability
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/resources')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Cpu className="w-4 h-4 text-emerald-400" />
                Resource Optimization
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/delight')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                Delight Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-indigo-400" />
                Performance Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/performance/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RCCOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/collaboration')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Users2 className="w-4 h-4 text-cyan-500" />
                Collaboration Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/presence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Activity className="w-4 h-4 text-cyan-400" />
                Presence Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/spaces')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Layers className="w-4 h-4 text-blue-400" />
                Contextual Workspaces
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/decisions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileSignature className="w-4 h-4 text-amber-400" />
                Collaborative Decisions
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/async')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Inbox className="w-4 h-4 text-purple-400" />
                Async Alignment
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/broadcast')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Megaphone className="w-4 h-4 text-rose-400" />
                Enterprise Broadcast
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/meetings')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Calendar className="w-4 h-4 text-emerald-400" />
                Meeting Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/external')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Globe className="w-4 h-4 text-yellow-500" />
                Secure External Ops
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-indigo-400" />
                Collaboration Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/reviews')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/collaboration/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RSKIOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/search')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Search className="w-4 h-4 text-cyan-500" />
                Universal Search Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/knowledge')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-cyan-400" />
                Enterprise Knowledge Graph
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/natural')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Natural Language Search
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/actions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MousePointerClick className="w-4 h-4 text-amber-400" />
                Universal Command Search
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/explorer')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Compass className="w-4 h-4 text-purple-400" />
                Enterprise Knowledge Explorer
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/context')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Tags className="w-4 h-4 text-rose-400" />
                Smart Filters & Context Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/recommendations')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Recommendation & Similarity Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/collections')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FolderHeart className="w-4 h-4 text-yellow-500" />
                Saved Searches & Collections
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-indigo-400" />
                Enterprise Search Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/governance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Search Governance Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/search/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Search Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RAOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/adoption')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                Adoption Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/welcome')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Smile className="w-4 h-4 text-cyan-400" />
                First-Run Experience
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/workflows')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Map className="w-4 h-4 text-blue-400" />
                Guided Workflow Assistant
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/learning')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Contextual Learning Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/discovery')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Feature Discovery Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/help')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <HeartHandshake className="w-4 h-4 text-rose-400" />
                Enterprise Help Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/journeys')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-emerald-400" />
                User Journey Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/achievements')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Award className="w-4 h-4 text-yellow-500" />
                Personal Achievement Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-indigo-400" />
                Adoption Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/reviews')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileSignature className="w-4 h-4 text-blue-500" />
                Adoption Review Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/adoption/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Adoption Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RIOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/intelligence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-cyan-500" />
                Intelligence Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/workspace')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                Adaptive Workspace
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/guidance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Map className="w-4 h-4 text-blue-400" />
                Predictive Guidance Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/briefing')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BookOpen className="w-4 h-4 text-purple-400" />
                Executive Daily Briefing
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/work')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ClipboardList className="w-4 h-4 text-indigo-400" />
                Smart Work Queue
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/context')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-rose-400" />
                Enterprise Context Engine
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/decisions')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Brain className="w-4 h-4 text-emerald-400" />
                Decision Intelligence
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/learning')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                Personalized Learning Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/focus')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Target className="w-4 h-4 text-red-500" />
                Enterprise Focus Mode
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BarChart2 className="w-4 h-4 text-emerald-500" />
                Intelligence Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/intelligence/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Intelligence Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="RXOS" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/experience')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-cyan-500" />
                Experience Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/cognition')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <BrainCircuit className="w-4 h-4 text-cyan-400" />
                Cognitive Architecture
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/disclosure')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Eye className="w-4 h-4 text-blue-400" />
                Progressive Disclosure
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/feedback')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Smile className="w-4 h-4 text-purple-400" />
                Dopamine & Feedback
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/motion')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Move className="w-4 h-4 text-indigo-400" />
                Motion Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/language')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Languages className="w-4 h-4 text-rose-400" />
                Universal Language
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/accessibility')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Accessibility className="w-4 h-4 text-emerald-400" />
                Accessibility Experience
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/executive')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Briefcase className="w-4 h-4 text-amber-400" />
                Executive Psychology
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/trust')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Lock className="w-4 h-4 text-blue-500" />
                Trust & Transparency
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-emerald-500" />
                Emotional UX Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/experience/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Experience Evidence
              </Command.Item>
            </Command.Group>
            <Command.Group heading="EACDSUGP" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/engineering/design')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Palette className="w-4 h-4 text-indigo-500" />
                Design Governance Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/system')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Palette className="w-4 h-4 text-rose-400" />
                Design System Registry
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/components')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Box className="w-4 h-4 text-blue-400" />
                Component Standardization
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/layouts')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LayoutTemplate className="w-4 h-4 text-purple-400" />
                Layout & Navigation
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/patterns')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MousePointerClick className="w-4 h-4 text-emerald-400" />
                UX Pattern Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/accessibility')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Accessibility className="w-4 h-4 text-amber-400" />
                Accessibility Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/motion')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Move className="w-4 h-4 text-indigo-400" />
                Motion & Animation
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/responsive')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <MonitorSmartphone className="w-4 h-4 text-yellow-400" />
                Responsive Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-emerald-500" />
                Visual Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/reviews')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileSignature className="w-4 h-4 text-blue-500" />
                Design Review Board
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/design/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Design Evidence Ledger
              </Command.Item>
            </Command.Group>
            <Command.Group heading="ECARGQAP" className="px-2 py-2 text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">
              <Command.Item onSelect={() => navigate('/engineering/audit')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Enterprise Repository Command Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/dead-code')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <FileCode2 className="w-4 h-4 text-rose-400" />
                Dead Code Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/imports')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Network className="w-4 h-4 text-blue-400" />
                Import & Dependency Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/routes')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LayoutDashboard className="w-4 h-4 text-purple-400" />
                Route & Navigation Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/components')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Box className="w-4 h-4 text-emerald-400" />
                Component Quality Governance
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/types')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Code2 className="w-4 h-4 text-amber-400" />
                TypeScript Governance Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/prisma')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Database className="w-4 h-4 text-indigo-400" />
                Prisma & Data Layer Audit
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/performance')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <Zap className="w-4 h-4 text-yellow-400" />
                Performance Optimization Center
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/security')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Security & Compliance Audit
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/analytics')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <LineChart className="w-4 h-4 text-blue-500" />
                Enterprise Engineering Analytics
              </Command.Item>
              <Command.Item onSelect={() => navigate('/engineering/audit/evidence')} className="flex items-center gap-2 px-3 py-3 text-sm text-slate-200 rounded-md hover:bg-slate-800 cursor-pointer aria-selected:bg-slate-800 aria-selected:text-white transition-colors">
                <History className="w-4 h-4 text-slate-400" />
                Repository Evidence Ledger
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
