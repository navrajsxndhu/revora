import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-slate-950 text-slate-50 font-sans">
      <main className="flex flex-col items-center gap-6 p-8 border border-slate-800 rounded bg-slate-900 shadow-xl max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">Revora Enterprise OS</h1>
        <p className="text-slate-400">
          Deterministic Constitutional Governance Platform v1.0
        </p>
        <Link
          href="/mission-control"
          className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded bg-emerald-600 px-5 text-white transition-colors hover:bg-emerald-700 font-semibold"
        >
          Enter Mission Control
        </Link>
      </main>
    </div>
  );
}
