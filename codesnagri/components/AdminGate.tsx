"use client";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { supabase } from "@/lib/supabase";
const ADMIN = (process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "").toLowerCase();
export default function AdminGate({ children }: { children: ReactNode }) {
  const [who, setWho] = useState<string | null | undefined>(undefined);
  const [f, setF] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setWho(data.session?.user.email?.toLowerCase() ?? null));
    const { data: s } = supabase.auth.onAuthStateChange((_e, ses) => setWho(ses?.user.email?.toLowerCase() ?? null));
    return () => s.subscription.unsubscribe();
  }, []);
  async function login(e: FormEvent) {
    e.preventDefault(); setErr("");
    const { error } = await supabase.auth.signInWithPassword({ email: f.email.trim(), password: f.password });
    if (error) setErr("Wrong email or password.");
  }
  const out = <button className="btn btn-ghost mb-6" onClick={() => supabase.auth.signOut()}>Log out</button>;
  if (who === undefined) return <p>Loading…</p>;
  if (who === null) return (
    <form onSubmit={login} className="max-w-sm space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
      {err && <p role="alert" className="text-red-700">{err}</p>}
      <label className="block font-medium">Email<input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} autoComplete="email" /></label>
      <label className="block font-medium">Password<input type="password" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} autoComplete="current-password" /></label>
      <button className="btn btn-solid w-full">Log in</button></form>);
  if (!ADMIN || who !== ADMIN) return <div><p className="mb-4">This account is not the site admin.</p>{out}</div>;
  return <div>{out}{children}</div>;
}
