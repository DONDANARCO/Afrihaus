# AfriHaus Smart Living — Website

## Deploying to Vercel

### Option A: Vercel Dashboard (No CLI needed)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Click **"Upload"** (or drag and drop this folder)
4. Upload the entire `afrihaus-vercel` folder
5. Vercel will detect the config automatically
6. Click **"Deploy"**
7. Your site will be live in under 60 seconds

---

### Option B: Vercel CLI

```bash
# Install Vercel CLI (once)
npm install -g vercel

# Inside this folder
cd afrihaus-vercel
vercel

# Follow the prompts — select your team/account
# For production:
vercel --prod
```

---

### Connecting Your Custom Domain

1. In the Vercel dashboard, go to your project
2. Click **Settings > Domains**
3. Add `afrihaus.co.za` and `www.afrihaus.co.za`
4. Update your DNS at your registrar:
   - **A record:** `@` → `76.76.21.21`
   - **CNAME record:** `www` → `cname.vercel-dns.com`
5. Vercel issues a free SSL certificate automatically

---

### Files in this package

| File | Purpose |
|------|---------|
| `index.html` | Complete AfriHaus website (all pages, styles, and logo embedded) |
| `vercel.json` | Vercel routing, caching, and security headers |
| `README.md` | This file |

---

### Notes

- The site is fully self-contained — no build step required
- The AfriHaus logo is embedded directly (no external image dependencies)
- Google Fonts are loaded from Google CDN (requires internet)
- Update the canonical URL in `index.html` `<head>` once your domain is confirmed
