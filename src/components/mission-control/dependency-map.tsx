import React from 'react';
import { SERVICE_DEPENDENCIES } from '@/lib/services/dependencies';

export function DependencyMap({ rootService }: { rootService: string }) {
  // Find all direct downstreams for this root service
  const downstreams = Object.keys(SERVICE_DEPENDENCIES).filter(service => 
    SERVICE_DEPENDENCIES[service].includes(rootService)
  );

  return (
    <div className="bg-slate-900 rounded-lg p-5 border border-slate-800">
      <h3 className="text-slate-300 font-semibold text-sm mb-4">Topology</h3>
      <div className="font-mono text-xs text-emerald-400">
        <div>{rootService}</div>
        {downstreams.map((service, index) => {
          const isLast = index === downstreams.length - 1;
          const prefix = isLast ? ' └── ' : ' ├── ';
          return (
            <div key={service} className="text-slate-400">
              {prefix}{service}
            </div>
          );
        })}
        {downstreams.length === 0 && (
          <div className="text-slate-500 italic mt-2">No known downstream dependencies.</div>
        )}
      </div>
    </div>
  );
}
