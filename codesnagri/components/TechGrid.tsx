import { Code2, Globe, Layers, Database, Smartphone, Cloud, Brain, Shield } from "lucide-react";
const T = [[Code2, "React", "from-cyan-500 to-blue-500"], [Globe, "Next.js", "from-slate-500 to-slate-700"], [Layers, "Tailwind CSS", "from-sky-400 to-blue-500"], [Database, "Supabase", "from-emerald-500 to-green-700"], [Smartphone, "Mobile apps", "from-pink-500 to-purple-500"], [Cloud, "Vercel", "from-amber-400 to-orange-500"], [Brain, "AI tools", "from-violet-500 to-fuchsia-500"], [Shield, "Secure by default", "from-teal-500 to-emerald-600"]] as const;
export default function TechGrid() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-[#0b1330] p-5 sm:p-8">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">{T.map(([I, n, g]) => (
        <li key={n} className={`flex items-center gap-2 rounded-xl bg-gradient-to-br ${g} px-4 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg`}><I aria-hidden size={18} />{n}</li>))}</ul>
    </div>
  );
}
