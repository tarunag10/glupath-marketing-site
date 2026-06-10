import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const PRIVACY_URL = "https://tarunag10.github.io/glupath-privacy-policy/";
const SUPPORT_URL = "https://tarunag10.github.io/glupath-privacy-policy/#support";
const APP_STORE_URL = "{{APP_STORE_URL}}";

const features = [
  {
    title: "Dose logs you enter",
    body: "Record GLP-1 medication doses you have already taken, including dose details, date, time, injection site, and notes.",
  },
  {
    title: "Symptom check-ins",
    body: "Keep recent symptoms and notes in the same calm journal so your personal history is easier to review.",
  },
  {
    title: "Weight entries",
    body: "Add weight logs and notes over time, with optional Apple Health weight import and export where available.",
  },
  {
    title: "Weekly local reminders",
    body: "Use device-based local notifications for reminder workflows without sending your logs to a GluPath server.",
  },
  {
    title: "Appointment summaries",
    body: "Export a plain-text summary from your user-entered logs for appointment preparation and personal review.",
  },
  {
    title: "Local-first privacy boundary",
    body: "The current native iOS build has no account system, analytics SDK, advertising tracking, or cloud sync.",
  },
];

const screenshots = [
  ["Today dashboard", "/assets/screenshot-today.png"],
  ["Trends", "/assets/screenshot-trends.png"],
  ["Weekly plan", "/assets/screenshot-plan.png"],
  ["Profile and privacy", "/assets/screenshot-profile.png"],
  ["Appointment summary", "/assets/screenshot-report.png"],
  ["Log dose", "/assets/screenshot-log-dose.png"],
];

const integrations = [
  "Siri Shortcuts and App Intents for common GluPath actions",
  "Optional Apple Health weight import and export",
  "Discreet home screen widget",
  "Local notifications for reminders",
  "Face ID and local authentication where available",
];

function AppleLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="apple-mark">
      <path
        fill="currentColor"
        d="M17.02 12.37c-.02-2.03 1.66-3 1.74-3.05-.96-1.4-2.43-1.59-2.94-1.61-1.24-.13-2.44.74-3.07.74-.65 0-1.63-.72-2.69-.7-1.37.02-2.65.82-3.36 2.07-1.43 2.48-.36 6.12 1.01 8.12.69.98 1.49 2.08 2.54 2.04 1.03-.04 1.41-.65 2.65-.65 1.23 0 1.58.65 2.66.63 1.1-.02 1.79-.98 2.45-1.97.79-1.12 1.11-2.22 1.12-2.28-.03-.01-2.09-.8-2.11-3.34ZM15.01 6.4c.56-.7.94-1.65.83-2.6-.81.04-1.83.56-2.41 1.24-.52.61-.98 1.6-.86 2.53.92.07 1.85-.47 2.44-1.17Z"
      />
    </svg>
  );
}

function AppStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`app-store-button ${compact ? "compact" : ""}`}
      href={APP_STORE_URL}
      aria-label="Download GluPath on the App Store"
    >
      <AppleLogo />
      <span>Download on the App Store</span>
    </a>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="GluPath home">
          <img src="/assets/app-icon.png" alt="" />
          <span>GluPath</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href={SUPPORT_URL}>Support</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <img className="hero-icon" src="/assets/app-icon.png" alt="GluPath app icon" />
          <h1>Private GLP-1 medication journaling, built for clarity.</h1>
          <p className="lede">
            Track user-entered medication logs, symptoms, weight, reminders, and appointment summaries in a calm native iOS journal.
          </p>
          <div className="hero-actions">
            <AppStoreButton />
            <a className="privacy-link" href={PRIVACY_URL}>Read Privacy Policy</a>
          </div>
        </div>
        <div className="hero-media" aria-label="GluPath app preview">
          <div className="hero-panel">
            <img src="/assets/hero.png" alt="GluPath promotional app preview" />
          </div>
        </div>
      </section>

      <section className="section intro-band">
        <p>
          GluPath is a private, local-first journal for user-entered GLP-1 medication logs. Record doses you have already taken,
          injection sites, symptom check-ins, and weight entries, then review your own log history and export a plain-text appointment summary.
        </p>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <p>What GluPath helps you keep together</p>
          <h2>A calm journal for personal medication tracking</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="card feature-card" key={feature.title}>
              <div className="feature-dot" aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section screenshots" aria-labelledby="screenshots-title">
        <div className="section-heading">
          <p>Real app screens</p>
          <h2 id="screenshots-title">Designed for quick review and careful logging</h2>
        </div>
        <div className="screenshot-row">
          {screenshots.map(([label, src]) => (
            <figure className="phone-frame" key={label}>
              <img src={src} alt={`GluPath ${label} screenshot`} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section split">
        <div className="section-heading">
          <p>Native iOS details</p>
          <h2>Conveniences that stay inside the privacy boundary</h2>
        </div>
        <div className="card integration-card">
          <p>
            GluPath supports native iOS conveniences for faster personal logging while keeping the app’s local-first privacy boundary clear.
          </p>
          <ul>
            {integrations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-copy">
          <p>Privacy</p>
          <h2>Privacy-first by design</h2>
          <p>
            GluPath stores care data locally on device in the current native iOS build. It does not include advertising tracking,
            analytics SDKs, sign-in, or cloud sync.
          </p>
          <p className="policy-note">
            Use this GitHub Pages privacy policy URL as the App Store privacy policy URL.
          </p>
          <a className="secondary-button" href={PRIVACY_URL}>Read Privacy Policy</a>
        </div>
      </section>

      <section className="section disclaimer">
        <h2>Medical disclaimer</h2>
        <p>
          GluPath is a personal tracking tool. It does not provide medical advice, diagnosis, dose recommendations, treatment recommendations,
          or emergency support. Always speak with a qualified clinician before making medication or care decisions.
        </p>
      </section>

      <section className="section final-cta">
        <h2>Keep your GLP-1 journal clear, private, and ready to review.</h2>
        <AppStoreButton />
      </section>

      <footer className="footer">
        <div>
          <strong>GluPath</strong>
          <p>Private GLP-1 journal</p>
        </div>
        <div className="footer-links">
          <a href={PRIVACY_URL}>Privacy Policy</a>
          <a href={SUPPORT_URL}>Support</a>
          <a href={APP_STORE_URL}>App Store</a>
        </div>
        <p className="copyright">© {year} GluPath. Personal tracking only; not medical advice.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
