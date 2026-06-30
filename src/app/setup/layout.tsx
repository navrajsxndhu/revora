export default function SetupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-light text-slate-900">
            Revora
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Operational Intelligence Platform
          </p>
        </div>
        <div className="bg-white p-8 border rounded-lg shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
