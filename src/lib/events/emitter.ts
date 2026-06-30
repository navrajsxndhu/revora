import { EventEmitter } from 'events';

// Global singleton for Next.js dev environment to preserve emitter across HMR
const globalForEmitter = globalThis as unknown as {
  emitter: EventEmitter | undefined;
};

export const sseEmitter = globalForEmitter.emitter ?? new EventEmitter();

if (process.env.NODE_ENV !== 'production') {
  globalForEmitter.emitter = sseEmitter;
}

export function broadcastEvent(type: string, payload: any) {
  sseEmitter.emit('broadcast', { type, payload });
}
