export function logAI(tag: string, reqId: string, msg: string) {
  try {
    console.log(`[AI][${tag}] req=${reqId} time=${new Date().toISOString()} - ${msg}`);
  } catch (e) {
    // ignore logging errors
  }
}
