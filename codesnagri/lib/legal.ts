export type LegalDoc = { title: string; intro: string; sections: { h: string; p: string[] }[] };
const UPDATED = "Last updated: October 2026.";
export const LEGAL: Record<string, LegalDoc> = {
  "privacy-policy": { title: "Privacy Policy", intro: UPDATED + " How CodesNagri handles your information.", sections: [
    { h: "Information we collect", p: ["Contact forms: your name, email, topic and message.", "Accounts: your name, email and a password, which is handled by our authentication provider.", "Orders, if you place one: your name, phone number, address and order notes.", "Technical data such as browser type and pages visited, which our hosting provider records in standard logs."] },
    { h: "How we use it", p: ["We use your information to reply to enquiries, run your account, deliver orders and keep the site secure. We do not sell your personal information."] },
    { h: "Service providers", p: ["We use providers for hosting, database and sign-in, and for delivering form messages. They process data only to provide those services."] },
    { h: "Your choices", p: ["You can ask to see, correct or delete your information at any time by contacting us through the contact page."] },
    { h: "Keeping information", p: ["We keep information only as long as needed for the purposes above or as the law requires."] },
    { h: "Changes", p: ["We may update this policy and will change the date above when we do."] } ] },
  "terms-of-service": { title: "Terms of Service", intro: UPDATED + " The rules for using this website and our services.", sections: [
    { h: "Using the site", p: ["Use the website lawfully and do not try to disrupt it or access areas you are not permitted to use."] },
    { h: "Accounts", p: ["Give accurate details and keep your password private. You are responsible for activity on your account."] },
    { h: "Quotes and prices", p: ["Prices shown on the site are a guide. The price, scope and timeline for a project are agreed in writing before work starts."] },
    { h: "Our content", p: ["The text, design and code of this site belong to CodesNagri unless stated otherwise. Do not copy them without permission."] },
    { h: "Liability", p: ["To the extent the law allows, we are not liable for indirect or consequential losses from using this site. Nothing here limits rights you have by law."] },
    { h: "Governing law", p: ["These terms are governed by the laws of Pakistan."] },
    { h: "Changes", p: ["We may update these terms and will change the date above when we do."] } ] },
  "refund-policy": { title: "Refund Policy", intro: UPDATED + " What to expect if something goes wrong.", sections: [
    { h: "Projects and services", p: ["Payment terms and refunds for projects are stated in your written quote or agreement."] },
    { h: "Courses", p: ["Course fees and any refund conditions are stated when you enrol."] },
    { h: "Products and orders", p: ["If an order is wrong or faulty, contact us promptly with your order details. We review each case and will tell you what we can do."] },
    { h: "How to ask", p: ["Use the contact page and include your name, what you bought and what the problem is."] } ] },
  "cookie-policy": { title: "Cookie Policy", intro: UPDATED + " How this site uses cookies and similar storage.", sections: [
    { h: "What we use", p: ["Essential storage that keeps you signed in and the site working. We do not use advertising cookies."] },
    { h: "Analytics", p: ["If we add analytics, we will describe it here and, where required, ask for your consent first."] },
    { h: "Your controls", p: ["You can clear or block cookies in your browser settings, but signing in may stop working."] } ] },
};
