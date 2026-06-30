import Link from "next/link";

export default function SetupFinishPage() {
  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 mb-4">
        <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h3 className="text-xl font-medium text-slate-900 mb-2">Workspace Ready</h3>
      <p className="text-sm text-slate-600 mb-8">
        Your Revora operational workspace is initialized and ready to ingest telemetry.
      </p>
      
      <Link
        href="/mission-control"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800"
      >
        Go to Mission Control
      </Link>
    </div>
  );
}
