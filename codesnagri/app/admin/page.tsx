import type { Metadata } from "next";
import AdminGate from "@/components/AdminGate";
import AdminTable from "@/components/AdminTable";
export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };
export default function Page() {
  return (<div className="mx-auto max-w-3xl px-4 py-10"><h1 className="mb-6 font-display text-3xl font-bold">Admin</h1>
    <AdminGate>
      <AdminTable table="products" title="Products" fields={[{ k: "name", label: "Name", req: true }, { k: "text", label: "Description", kind: "area", req: true }, { k: "price", label: "Price (e.g. PKR 25,000)" }, { k: "image", label: "Image path (e.g. /laptop.jpg)" }, { k: "tag", label: "Tag (optional)" }, { k: "active", label: "Show on website", kind: "check" }]} />
      <AdminTable table="plans" title="Plans" fields={[{ k: "name", label: "Name", req: true }, { k: "text", label: "Description", kind: "area", req: true }, { k: "price", label: "Price" }, { k: "period", label: "Period (e.g. / month)" }, { k: "pay_link", label: "Payment link (optional)" }, { k: "features", label: "Features (one per line)", kind: "lines" }, { k: "active", label: "Show on website", kind: "check" }]} />
    </AdminGate></div>);
}
