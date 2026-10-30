import { supabase } from "./supabase";
import { PRODUCT_LIST, PLANS } from "./data";
const on = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
export async function getProducts() {
  if (on) { try {
    const { data, error } = await supabase.from("products").select("*").eq("active", true).order("created_at");
    if (!error && data && data.length) return data.map((r) => ({ name: r.name as string, text: r.text as string, price: (r.price ?? undefined) as string | undefined, image: (r.image ?? undefined) as string | undefined, tag: (r.tag ?? undefined) as string | undefined }));
  } catch {} }
  return PRODUCT_LIST;
}
export async function getPlans() {
  if (on) { try {
    const { data, error } = await supabase.from("plans").select("*").eq("active", true).order("created_at");
    if (!error && data && data.length) return data.map((r) => ({ name: r.name as string, text: r.text as string, price: (r.price ?? undefined) as string | undefined, period: (r.period ?? undefined) as string | undefined, payLink: (r.pay_link ?? undefined) as string | undefined, badge: undefined as string | undefined, features: (r.features ?? []) as string[] }));
  } catch {} }
  return PLANS;
}
