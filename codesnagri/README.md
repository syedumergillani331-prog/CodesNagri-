# CodesNagri website
Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Setup
    npm install
    cp .env.example .env.local   # fill in values
    npm run dev                  # http://localhost:3000
    npm run lint && npm run build

## Edit content
All copy lives in `lib/data.ts` (services, courses, team, FAQs, testimonials).
Add real testimonials to `TESTIMONIALS` and the section appears automatically.

## Contact form
`CONTACT_WEBHOOK_URL` receives a JSON POST (Formspree, Make, Zapier, Slack, etc.).
Until set, the form shows an honest "not receiving messages yet" error.

## Deploy (Vercel)
1. Push to GitHub, import the repo at vercel.com, add the env vars, deploy.
2. Project > Settings > Domains > add your domain.
3. At your registrar: apex domain -> A record `76.76.21.21`; `www` -> CNAME `cname.vercel-dns.com` (confirm current values in Vercel's dashboard).
4. Set `NEXT_PUBLIC_SITE_URL` to the live URL and redeploy.
