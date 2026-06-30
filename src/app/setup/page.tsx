import { redirect } from 'next/navigation';

export default function SetupIndexPage() {
  // Real app: Check if user already has an org/workspace. If so, redirect to /mission-control.
  // Otherwise start the flow.
  redirect('/setup/workspace');
}
