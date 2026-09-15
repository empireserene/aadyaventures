# Aadya Ventures Limited

Corporate website for **Aadya Ventures Limited**, a Dubai-based investment company allocating capital into information technology, real estate, and selected adjacent sectors.

Built with Next.js (App Router) and Tailwind CSS, ready for [Vercel](https://vercel.com).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel (Framework Preset: Next.js).
3. Set `NEXT_PUBLIC_SITE_URL` to the live domain (for example `https://aadyaventures.com`).
4. Deploy.

Optional: wire `/api/contact` to an email provider such as Resend before going live.

## Pages

- `/` Home
- `/about` About
- `/sectors` and `/sectors/[slug]` Investment sectors
- `/approach` Framework and partnership process
- `/portfolio` Thematic mandates
- `/insights` Articles
- `/contact` Contact form
- `/privacy` `/terms` `/disclaimer`
