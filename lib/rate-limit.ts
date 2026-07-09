const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const requestLog = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    requestLog.set(key, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}
