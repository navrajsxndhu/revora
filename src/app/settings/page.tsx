import { WorkspaceService } from "@/services/workspace-service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { OrganizationService } from "@/services/organization-service";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    return <div>Unauthorized</div>;
  }

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspace = workspaces.length > 0 ? workspaces[0] : null;

  if (!workspace) return <div>No workspace found.</div>;

  const organization = await OrganizationService.getOrganization(workspace.organizationId);

  return (
    <div className="p-10 max-w-3xl mx-auto font-sans text-slate-900">
      <h1 className="text-3xl font-light mb-8 border-b pb-4">Operational Settings</h1>
      
      <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-medium mb-4">Workspace Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Workspace Name</label>
            <input type="text" defaultValue={workspace.name} className="mt-1 w-full rounded border p-2 text-sm bg-slate-50" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Organization</label>
            <input type="text" defaultValue={organization?.name || "Unknown"} className="mt-1 w-full rounded border p-2 text-sm bg-slate-50" readOnly />
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-medium mb-4">Deployment Gates</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-gray-300 rounded" />
            <span className="text-sm font-medium text-slate-700">Block CRITICAL risk deployments</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-gray-300 rounded" />
            <span className="text-sm font-medium text-slate-700">Block HIGH risk deployments</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-gray-300 rounded" />
            <span className="text-sm font-medium text-slate-700">Require manual approval for overrides</span>
          </label>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-6 shadow-sm border-rose-200">
        <h2 className="text-lg font-medium mb-2 text-rose-700">Danger Zone</h2>
        <p className="text-sm text-slate-600 mb-4">Irreversible operational actions.</p>
        <button className="bg-rose-600 text-white px-4 py-2 rounded text-sm hover:bg-rose-700 font-medium">Delete Workspace</button>
      </div>
    </div>
  );
}
