"use client";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";
export type F = { k: string; label: string; kind?: "area" | "lines" | "check"; req?: boolean };
type Row = Record<string, any>;
export default function AdminTable({ table, title, fields }: { table: string; title: string; fields: F[] }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [form, setForm] = useState<Row>({ active: true });
  const [editId, setEditId] = useState<string | null>(null);
  const [msg, setMsg] = useState("");
  const load = useCallback(async () => {
    const { data, error } = await supabase.from(table).select("*").order("created_at");
    if (error) setMsg(error.message); else setRows(data ?? []);
  }, [table]);
  useEffect(() => { load(); }, [load]);
  const reset = () => { setForm({ active: true }); setEditId(null); };
  const edit = (r: Row) => { const v: Row = { ...r }; fields.forEach((f) => { if (f.kind === "lines") v[f.k] = (r[f.k] ?? []).join("\n"); }); setForm(v); setEditId(r.id); };
  async function save(e: FormEvent) {
    e.preventDefault(); setMsg("");
    const body: Row = {};
    for (const f of fields) {
      const v = form[f.k];
      body[f.k] = f.kind === "check" ? !!v : f.kind === "lines" ? String(v ?? "").split("\n").map((s) => s.trim()).filter(Boolean) : String(v ?? "").trim() || null;
      if (f.req && !body[f.k]) return setMsg(`${f.label} is required.`);
    }
    const { error } = editId ? await supabase.from(table).update(body).eq("id", editId) : await supabase.from(table).insert(body);
    if (error) return setMsg(error.message);
    reset(); setMsg("Saved."); load();
  }
  async function del(r: Row) {
    if (!confirm(`Delete "${r.name}"?`)) return;
    const { error } = await supabase.from(table).delete().eq("id", r.id);
    if (error) setMsg(error.message); else { setMsg("Deleted."); load(); }
  }
  const cls = "mt-1 w-full rounded-xl border border-slate-300 px-4 py-2";
  return (
    <section className="mb-12">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      {msg && <p role="status" className="mt-3 rounded-xl bg-cyan-900/40 p-3 text-cyan-200">{msg}</p>}
      <form onSubmit={save} className="mt-4 space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
        {fields.map((f) => f.kind === "check" ? (
          <label key={f.k} className="flex items-center gap-2"><input type="checkbox" className="!mt-0 !w-auto" checked={!!form[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.checked })} />{f.label}</label>
        ) : (
          <label key={f.k} className="block text-sm font-medium">{f.label}{f.req && " *"}
            {f.kind ? <textarea rows={3} className={cls} value={form[f.k] ?? ""} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} />
              : <input className={cls} value={form[f.k] ?? ""} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} />}</label>
        ))}
        <div className="flex gap-2"><button className="btn btn-solid">{editId ? "Save changes" : "Add"}</button>{editId && <button type="button" className="btn btn-ghost" onClick={reset}>Cancel</button>}</div>
      </form>
      <ul className="mt-4 space-y-2">{rows.map((r) => (
        <li key={r.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3">
          <span><b>{r.name}</b> <span className="text-slate-500">{r.price || "no price"}{r.active ? "" : " (hidden)"}</span></span>
          <span className="flex gap-2"><button className="btn btn-ghost !px-3 !py-1" onClick={() => edit(r)}>Edit</button><button className="btn btn-ghost !px-3 !py-1" onClick={() => del(r)}>Delete</button></span></li>))}</ul>
    </section>
  );
}
