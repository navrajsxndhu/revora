import { NextRequest } from "next/server";
import { osEventStream } from "@/lib/os/event-stream";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const workspaceId = url.searchParams.get("workspaceId");

  if (!workspaceId) {
    return new Response("Missing workspaceId", { status: 400 });
  }

  const stream = new ReadableStream({
    start(controller) {
      const listener = (data: unknown) => {
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
      };

      osEventStream.on(`workspace:${workspaceId}`, listener);

      // Keepalive ping
      const interval = setInterval(() => {
        controller.enqueue(`: ping\n\n`);
      }, 30000);

      req.signal.addEventListener("abort", () => {
        osEventStream.off(`workspace:${workspaceId}`, listener);
        clearInterval(interval);
        controller.close();
      });
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    }
  });
}
