export type Form = { name: string; email: string; phone: string; company: string; service: string; budget: string; timeline: string; message: string };
export type Errors = Partial<Record<keyof Form, string>>;
export function validate(f: Form): Errors {
  const e: Errors = {};
  const digits = f.phone.replace(/\D/g, "");
  if (f.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Enter a valid email address, like name@example.com.";
  if (digits.length < 10 || digits.length > 15) e.phone = "Enter a phone number with 10 to 15 digits, like +92 300 1234567.";
  if (!f.service) e.service = "Choose what you need.";
  if (!f.budget) e.budget = "Choose a budget range.";
  if (!f.timeline) e.timeline = "Choose a timeline.";
  if (f.message.trim().length < 20) e.message = "Write at least 20 characters so we can help.";
  if (f.message.length > 3000) e.message = "Keep the message under 3000 characters.";
  return e;
}
