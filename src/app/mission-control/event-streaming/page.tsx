import React from "react";
import { ExecutiveStreamingDashboard } from "@/components/mission-control/event-streaming/executive-streaming-dashboard";

export const metadata = {
  title: "Enterprise Event Streaming & Messaging | Revora Mission Control",
};

export default function EventStreamingPage() {
  return (
    <div className="h-full bg-slate-950">
      <ExecutiveStreamingDashboard />
    </div>
  );
}
