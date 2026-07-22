import { NextRequest } from "next/server";
import { sseEmitter } from "@/lib/events/emitter";

export const dynamic = "force-dynamic";

export async function GET() {
  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  const onEvent = (data: { type: string; payload: unknown }) => {
    writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
  };

  sseEmitter.on('broadcast', onEvent);

  req.signal.addEventListener('abort', () => {
    sseEmitter.off('broadcast', onEvent);
    writer.close();
  });

  return new Response(responseStream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}
