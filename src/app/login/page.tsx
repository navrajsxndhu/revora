"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next-navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = typeof window !== 'undefined' ? require("next/navigation").useRouter() : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
    if (res?.ok && router) {
      router.push("/mission-control/executions");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-sm p-8 bg-slate-900 border border-slate-800 rounded-lg shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 tracking-tight">Revora</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-white text-black font-semibold rounded py-2 mt-4 hover:bg-slate-200 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
