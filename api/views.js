import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const TOTAL_KEY = "views:total";
const UNIQUE_KEY = "views:unique";

export default async function handler(req, res) {
  // Never cache — the count must be fresh
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    // GET = read only (no increment). Used if you just want to display.
    if (req.method === "GET") {
      const [total, unique] = await Promise.all([
        redis.get(TOTAL_KEY),
        redis.scard(UNIQUE_KEY),
      ]);
      return res.json({ total: total ?? 0, unique: unique ?? 0 });
    }

    // POST = register a visit
    if (req.method === "POST") {
      // Every hit bumps the total page-view count
      const total = await redis.incr(TOTAL_KEY);

      // Unique visitors: hash the IP so we never store raw IPs
      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.headers["x-real-ip"] ||
        "unknown";
      const visitorId = await hashVisitor(ip);

      // sadd returns 1 if this visitor is new, 0 if already counted
      await redis.sadd(UNIQUE_KEY, visitorId);
      const unique = await redis.scard(UNIQUE_KEY);

      return res.json({ total, unique });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

// SHA-256 hash of the IP so raw addresses are never persisted
async function hashVisitor(ip) {
  const data = new TextEncoder().encode(ip + (process.env.VIEWS_SALT || ""));
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
