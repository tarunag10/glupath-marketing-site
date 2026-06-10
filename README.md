# GluPath

Standalone GTM marketing website for GluPath, a private GLP-1 journal for user-entered medication logs, symptoms, weight, reminders, and appointment summaries.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Verified Links

- Privacy Policy: https://tarunag10.github.io/glupath-privacy-policy/
- Support: https://tarunag10.github.io/glupath-privacy-policy/#support
- Proposed Vercel URL: https://GluPath.vercel.app

## App Store URL TODO

The App Store CTA currently uses `{{APP_STORE_URL}}`.

Replace it in `src/main.tsx` with the verified Apple App Store listing URL before launch. Do not guess or construct the URL without verifying the live App Store listing.

## App Store Privacy URL

Update App Store Connect privacy policy URL to https://tarunag10.github.io/glupath-privacy-policy/

## Assets

The site uses verified GluPath assets copied from the native iOS repo into `public/assets/`:

- `app-icon.png`
- `hero.png`
- `screenshot-today.png`
- `screenshot-trends.png`
- `screenshot-plan.png`
- `screenshot-profile.png`
- `screenshot-report.png`
- `screenshot-log-dose.png`

## GitHub Repository Setup

Create a separate GitHub repository for this website:

```bash
git init
git add .
git commit -m "Build GluPath marketing site"
gh repo create glupath-marketing-site --public --source=. --remote=origin --push
```

Record the final GitHub repository URL here after creation:

```text
https://github.com/tarunag10/glupath-marketing-site
```

## Vercel Deployment

Deploy as a separate Vercel project:

```bash
vercel --prod
```

During setup:

- Project/site name: `GluPath`
- Production URL target: `https://GluPath.vercel.app`
- GitHub repository: `glupath-marketing-site`

After deployment, verify:

- The site loads at `https://GluPath.vercel.app`.
- All privacy links point to `https://tarunag10.github.io/glupath-privacy-policy/`.
- The support link points to `https://tarunag10.github.io/glupath-privacy-policy/#support`.
- The App Store button points to the verified App Store URL.
- The medical disclaimer is visible.
