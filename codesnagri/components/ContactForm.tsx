"use client";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { validate, type Errors, type Form } from "@/lib/validate";
import { TOPICS, BUDGETS, TIMELINES } from "@/lib/data";
const empty: Form = { name: "", email: "", phone: "", company: "", service: "", budget: "", timeline: "", message: "" };
type Field = { k: keyof Form; label: string; type?: string; opts?: string[]; auto?: string; ph?: string; req?: boolean };
const FIELDS: Field[] = [
  { k: "name", label: "Full name", auto: "name", ph: "Your name", req: true },
  { k: "email", label: "Email address", type: "email", auto: "email", ph: "name@example.com", req: true },
  { k: "phone", label: "Phone number", type: "tel", auto: "tel", ph: "+92 300 1234567", req: true },
  { k: "company", label: "Company name", auto: "organization", ph: "Optional" },
  { k: "service", label: "What do you need?", opts: TOPICS, req: true },
  { k: "budget", label: "Budget range", opts: BUDGETS, req: true },
  { k: "timeline", label: "Timeline", opts: TIMELINES, req: true },
  { k: "message", label: "Project requirements", type: "textarea", ph: "Describe your goals and any features you need.", req: true },
];
export default function ContactForm() {
  const [f, setF] = useState<Form>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [msg, setMsg] = useState("");
  const set = (k: keyof Form) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(f); setErrors(v);
    if (Object.keys(v).length) { setStatus("idle"); return; }
    setStatus("sending");
    const website = (new FormData(e.currentTarget).get("website") as string) ?? "";
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...f, website }) });
      const d = await r.json();
      if (r.ok) { setStatus("ok"); setF(empty); return; }
      if (d.errors) setErrors(d.errors);
      setMsg(d.error ?? "Please fix the highlighted fields."); setStatus("fail");
    } catch { setMsg("Network problem. Check your connection and try again."); setStatus("fail"); }
  }
  const box = (k: keyof Form) => `mt-1 w-full rounded-xl border px-4 py-3 ${errors[k] ? "border-red-500" : "border-slate-300"}`;
  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6">
      <div aria-live="polite">
        {status === "ok" && <p role="status" className="rounded-xl bg-emerald-50 p-4 text-emerald-800">Thanks, your enquiry was sent. We will reply by email or phone.</p>}
        {status === "fail" && <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">{msg}</p>}
      </div>
      {FIELDS.map((x) => {
        const aria = { "aria-invalid": !!errors[x.k], "aria-describedby": errors[x.k] ? `${x.k}-e` : undefined };
        return (
          <label key={x.k} className="block font-medium">{x.label}{x.req && <span aria-hidden> *</span>}
            {x.type === "textarea" ? <textarea rows={5} placeholder={x.ph} className={box(x.k)} value={f[x.k]} onChange={set(x.k)} {...aria} />
              : x.opts ? <select className={box(x.k)} value={f[x.k]} onChange={set(x.k)} {...aria}><option value="">Select…</option>{x.opts.map((o) => <option key={o}>{o}</option>)}</select>
              : <input type={x.type ?? "text"} placeholder={x.ph} autoComplete={x.auto} className={box(x.k)} value={f[x.k]} onChange={set(x.k)} {...aria} />}
            {errors[x.k] && <span id={`${x.k}-e`} className="mt-1 block text-sm font-normal text-red-700">{errors[x.k]}</span>}
          </label>);
      })}
      <div className="hidden" aria-hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button disabled={status === "sending"} className="btn btn-solid w-full disabled:opacity-60"><Send aria-hidden size={18} />{status === "sending" ? "Sending…" : "Submit enquiry"}</button>
    </form>
  );
}
