import { NextResponse } from "next/server";
import { validate, type Form } from "@/lib/validate";
const KEYS = ["name", "email", "phone", "company", "service", "budget", "timeline", "message"] as const;
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (body.website) return NextResponse.json({ ok: true });
  const f = Object.fromEntries(KEYS.map((k) => [k, String(body[k] ?? "").slice(0, 3000)])) as Form;
  const errors = validate(f);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });
  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ error: "Messages are not being received yet. The site owner must set CONTACT_WEBHOOK_URL." }, { status: 503 });
  try {
    const r = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...f, _subject: `New enquiry: ${f.service} from ${f.name}` }) });
    if (!r.ok) throw new Error("bad status");
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "We could not send your message. Please try again shortly." }, { status: 502 }); }
}
