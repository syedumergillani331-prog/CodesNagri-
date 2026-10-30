export const SITE = {
  name: "CodesNagri",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  tagline: "Software, training and technology products, built with care.",
};
export const NAV = [
  { href: "/", label: "Home" }, { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" }, { href: "/courses", label: "IT Courses" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" }, { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
];
export type Item = { icon: string; title: string; text: string; tag?: string; href?: string; points?: string[] };
export const SERVICES: Item[] = [
  { icon: "Globe", href: "/services/web-development", title: "Web development", points: ["React and Next.js", "Responsive design", "SEO-friendly pages", "Fast performance"], text: "Fast, accessible websites and web apps built on modern frameworks." },
  { icon: "Smartphone", title: "Mobile apps", points: ["iOS and Android", "React Native or Flutter", "Store publishing help", "Ongoing updates"], text: "iOS and Android apps with a focus on smooth everyday use." },
  { icon: "Brain", title: "AI and ML integration", points: ["Search and chatbots", "Document processing", "Workflow automation", "Model evaluation"], text: "Add search, classification or automation to the tools you already use." },
  { icon: "Palette", title: "UI/UX design", points: ["User research", "Wireframes and prototypes", "Design systems", "Usability testing"], text: "Clear interfaces, tested with real users before development starts." },
  { icon: "Cloud", title: "Cloud and DevOps", points: ["Hosting setup", "Automated deployment", "Monitoring", "Backups"], text: "Reliable hosting, deployment pipelines and monitoring." },
  { icon: "LifeBuoy", title: "Maintenance and support", points: ["Updates and fixes", "Security checks", "Performance tuning", "Content changes"], text: "Updates, fixes and improvements after launch." },
];
export const PROJECTS: Item[] = [
  { icon: "ShoppingCart", tag: "Sample concept", title: "Online store", text: "Catalogue, cart and checkout with inventory sync." },
  { icon: "BarChart3", tag: "Sample concept", title: "Business dashboard", text: "Live reports for sales, stock and team activity." },
  { icon: "GraduationCap", tag: "Sample concept", title: "Learning platform", text: "Courses, progress tracking and certificates." },
];
export const COURSES: Item[] = [
  { icon: "Code2", href: "/services/web-development", title: "Web development", text: "HTML, CSS, JavaScript, React and Next.js, taught through projects.", tag: "Beginner to intermediate" },
  { icon: "Terminal", title: "Python programming", text: "Fundamentals, automation and an introduction to data work.", tag: "Beginner" },
  { icon: "Brain", title: "Intro to AI and ML", text: "Core ideas and hands-on models using common libraries.", tag: "Intermediate" },
  { icon: "Palette", title: "UI/UX basics", text: "Layout, typography, prototyping and usability testing.", tag: "Beginner" },
];
export const PRODUCTS: Item[] = [
  { icon: "Package", title: "Business management software", text: "Invoicing, inventory and reporting in one place.", tag: "Planned" },
  { icon: "Cpu", title: "Computer hardware and accessories", text: "Peripherals and components, with setup advice.", tag: "Planned" },
  { icon: "Boxes", title: "Ready-made website templates", text: "Starter sites you can launch and customise.", tag: "Planned" },
];
export const TEAM = [
  { role: "Founder and engineering lead", note: "Add name and bio" },
  { role: "Frontend developer", note: "Add name and bio" },
  { role: "Backend developer", note: "Add name and bio" },
  { role: "UI/UX designer", note: "Add name and bio" },
  { role: "Course instructor", note: "Add name and bio" },
  { role: "Project coordinator", note: "Add name and bio" },
];
export const VALUES: Item[] = [
  { icon: "MessageSquare", title: "Plain communication", text: "Clear scope, honest timelines and regular updates." },
  { icon: "ShieldCheck", title: "Quality by default", text: "Accessible, secure and tested before it ships." },
  { icon: "Sprout", title: "Teach as we build", text: "We share what we learn through our courses." },
];
export const FAQS = [
  { q: "What kinds of projects do you take on?", a: "Websites, web and mobile apps, AI integrations and ongoing support. Send us a brief and we will tell you honestly if it is a fit." },
  { q: "How does pricing work?", a: "We scope each project first, then quote a fixed price or a monthly rate. Use the contact form to start." },
  { q: "Do you offer courses for complete beginners?", a: "Yes. Our beginner tracks assume no prior experience." },
  { q: "Can you maintain a site someone else built?", a: "Usually, yes. We review the code first and then agree on support." },
  { q: "How do I get started?", a: "Send a message from the contact page with your goals and timeline." },
];
// Add real, permitted client reviews here. The section stays hidden while empty.
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];
export const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// EDIT YOUR PLANS. Set price (e.g. "PKR 5,000"), period (e.g. "/ month") and payLink (a Stripe or local payment link). Empty price shows "Contact for price".
export const PLANS: { name: string; text: string; price?: string; period?: string; payLink?: string; badge?: string; features: string[] }[] = [
  { name: "Starter care", text: "Keep a small website healthy.", features: ["Security and software updates", "Monthly backups", "Small content changes"] },
  { name: "Growth care", text: "For sites that change often.", features: ["Everything in Starter care", "Regular content updates", "Performance checks"] },
  { name: "Business care", text: "Ongoing help for web apps.", features: ["Everything in Growth care", "Priority support", "Monthly improvement time"] },
];
// EDIT THESE CHOICES to match how you really price and schedule work.
export const TOPICS = [...SERVICES.map((s) => s.title), "IT courses", "Products", "Something else"];
export const BUDGETS = ["Not sure yet", "Under PKR 50,000", "PKR 50,000 to 150,000", "PKR 150,000 to 500,000", "Over PKR 500,000"];
export const TIMELINES = ["As soon as possible", "Within 1 month", "1 to 3 months", "Flexible"];

export const PRODUCT_LIST: { name: string; text: string; price?: string; image?: string; tag?: string }[] = [
  { name: "Business management software", text: "Invoicing, inventory and reporting in one place.", tag: "Planned" },
  { name: "Computer hardware and accessories", text: "Peripherals and components, with setup advice.", tag: "Planned" },
  { name: "Ready-made website templates", text: "Starter sites you can launch and customise.", tag: "Planned" },
];

export const PRICES: Record<string, { pkr?: string; usd?: string; from?: boolean }> = {
  "Web development": { pkr: "", usd: "" },
  "Mobile apps": { pkr: "", usd: "" },
  "AI and ML integration": { pkr: "", usd: "" },
  "UI/UX design": { pkr: "", usd: "" },
  "Cloud and DevOps": { pkr: "", usd: "" },
  "Maintenance and support": { pkr: "", usd: "" },
  "Online store": { pkr: "", usd: "" },
  "Business dashboard": { pkr: "", usd: "" },
  "Learning platform": { pkr: "", usd: "" },
  "Python programming": { pkr: "", usd: "" },
  "Intro to AI and ML": { pkr: "", usd: "" },
  "UI/UX basics": { pkr: "", usd: "" },
};

export function priceText(title: string): string | undefined {
  const p = PRICES[title];
  if (!p || (!p.pkr && !p.usd)) return undefined;
  return (p.from ? "From " : "") + [p.pkr, p.usd].filter(Boolean).join(" / ");
}
