/** @type {import('tailwindcss').Config}
 *
 * MANCOCO — Tailwind config ( Fase 2: port Next.js / React )
 * ----------------------------------------------------------
 * Token ini dipetakan 1:1 dari single-file build `index.html`.
 * Tinggal drop ke project Next.js + Tailwind, lalu port section per section.
 *
 * Aturan palet dari PRD:
 *  - `accent` (#D4972F)  : HANYA untuk aksen non-teks (gagal kontras sebagai teks).
 *  - `whatsapp` (#25D366): HANYA untuk ikon/label kanal WhatsApp.
 *  - Nol klaim kesehatan di semua copy publik.
 */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1F6B3C",      // emerald — CTA utama
                dark: "#164D2B",         // hijau pekat — teks di atas krem, footer
                secondary: "#2E8B57",    // hijau lembut — hover, focus ring
                accent: "#D4972F",       // ochre — aksen NON-TEKS saja
                badge: "#E6B45A",        // ochre lembut — badge/highlight
                "bg-main": "#F7F3EA",    // krem — latar utama
                "bg-surface": "#EFE7D6", // cream-2 — permukaan sekunder
                "bg-paper": "#FFFDF8",   // paper — kartu
                "text-main": "#22271F",  // ink — teks utama
                "text-muted": "#5A6152", // muted — teks sekunder
                whatsapp: "#25D366",     // khusus ikon/label WA
                "muted-on-dark": "#BCC9B3",
            },
            fontFamily: {
                display: ["Rockwell", "Roboto Slab", "Iowan Old Style", "Georgia", "Times New Roman", "serif"],
                body: ["ui-rounded", "Segoe UI", "system-ui", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
                hand: ["Segoe Print", "Bradley Hand", "Chalkboard SE", "cursive"],
            },
            boxShadow: {
                soft: "0 8px 24px rgba(34,39,31,.08)",
                lift: "0 18px 40px rgba(22,77,43,.14)",
            },
            borderRadius: {
                card: "14px",
                panel: "20px",
            },
            backgroundImage: {
                // tekstur tenun Mandar (belah ketupat) — pakai sebagai utility bg-weave
                "weave-light":
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cpath d='M13 0 26 13 13 26 0 13Z' fill='none' stroke='%23164D2B' stroke-opacity='.07'/%3E%3C/svg%3E\")",
                "weave-dark":
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cpath d='M13 0 26 13 13 26 0 13Z' fill='none' stroke='%23F7F3EA' stroke-opacity='.08'/%3E%3C/svg%3E\")",
            },
            keyframes: {
                tick: { to: { transform: "translateX(-50%)" } },
                bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
                spinSlow: { to: { transform: "rotate(360deg)" } },
                pulseDot: {
                    "0%,100%": { boxShadow: "0 0 0 0 rgba(46,139,87,.45)" },
                    "55%": { boxShadow: "0 0 0 8px rgba(46,139,87,0)" },
                },
            },
            animation: {
                tick: "tick 30s linear infinite",
                bob: "bob 6s ease-in-out infinite",
                "spin-slow": "spinSlow 26s linear infinite",
                "pulse-dot": "pulseDot 2.2s ease infinite",
            },
        },
    },
    plugins: [],
};