import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default function SetupWorkspacePage() {
  async function createWorkspace(formData: FormData) {
    "use server";
    const name = formData.get("workspaceName") as string;
    
    // In a real app, tie this to the signed-up user.
    const org = await prisma.organization.create({
      data: { name: `${name} Org` }
    });
    
    const workspace = await prisma.workspace.create({
      data: {
        name,
        organizationId: org.id
      }
    });

    redirect('/setup/integrations');
  }

  return (
    <div>
      <h3 className="text-xl font-medium text-slate-900 mb-4">Create your Workspace</h3>
      <p className="text-sm text-slate-600 mb-6">
        A workspace is your team's operational center. It houses all incidents, deployments, and integrations.
      </p>
      
      <form action={createWorkspace} className="space-y-4">
        <div>
          <label htmlFor="workspaceName" className="block text-sm font-medium text-slate-700">Workspace Name</label>
          <input
            type="text"
            id="workspaceName"
            name="workspaceName"
            required
            placeholder="e.g., Acme Corp Engineering"
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
