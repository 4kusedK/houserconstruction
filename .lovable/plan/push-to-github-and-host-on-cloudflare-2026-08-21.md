# Push to GitHub and host on Cloudflare

Two separate jobs: getting the code into your GitHub, and making that repo deployable on Cloudflare. Only the second one needs any code change.

## 1. GitHub (no code change)

In the Lovable editor: the **+** menu in the chat box → GitHub → Connect project → authorize → pick the account/org → Create Repository. After that, Lovable and GitHub stay in two-way sync: edits here push automatically, and pushes from your machine or the GitHub UI come back into Lovable.

## 2. Cloudflare: Workers, not Pages

Important correction to the plan you had in mind: this site is server-rendered (TanStack Start), so it is not a static folder Pages can serve. The right Cloudflare product is **Workers with static assets** — the build already targets Cloudflare's Worker runtime, so nothing has to be rewritten. In the Cloudflare dashboard you'd use **Workers & Pages → Create → Import a repository** (the Workers option, not Pages).

Cloudflare will then rebuild from GitHub on every push, exactly like Lovable does.

## What I'll change in the repo

1. **Pin the Cloudflare build output** in `vite.config.ts` so a build outside Lovable lands in predictable folders (`dist/server`, `dist/client`) with Node compatibility on. Without this, a build on Cloudflare's runners can silently pick a different target.
2. **Add `wrangler.jsonc`** declaring the Worker entry, the static assets folder, the compatibility date, and the `nodejs_compat` flag — this is the file Cloudflare reads to know how to run the site.
3. **Add a `deploy` script** to `package.json` (`wrangler deploy`) and `wrangler` as a dev dependency, so you can also deploy manually from your machine if you ever want to.
4. **Update `HANDOFF.md`** with the Cloudflare deploy settings (build command, output dir) and the DNS steps to point `houserconstruction.net` at the Worker.

Nothing about the site's design, copy, routes or SEO changes.

## Settings you'll enter in Cloudflare

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: repository root

## Things to know before you switch

- **Publish in Lovable and Cloudflare are independent.** Once Cloudflare serves the domain, clicking Publish here no longer updates the live site — pushes to GitHub do.
- **Point the domain at one host only.** Right now `houserconstruction.net` resolves to Lovable. Move it in Cloudflare (Workers → your worker → Settings → Domains & Routes) and remove the Lovable custom-domain records, or the two will fight.
- **Cost:** Cloudflare's free Workers tier covers a brochure site comfortably. This route also means the client doesn't need a paid Lovable plan to keep the site live — though they'd still need one to keep editing in Lovable.

## Technical notes

- Runtime target stays `cloudflare-module` via the existing nitro plugin; `src/server.ts` remains the Worker fetch entry.
- `compatibility_flags: ["nodejs_compat"]` is required — the SSR entry uses Node built-ins.
- No secrets, no database, no environment variables to move; the site is fully static-content-driven.
- `@lovable.dev/vite-tanstack-config` is a public npm package, so Cloudflare's build runner installs it fine.
