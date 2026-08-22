# Glamour Cut · Kundenvorschau

Kundenspezifische Next.js-Website für **Glamour Cut** in Wilnsdorf-Wilden. Die Umsetzung übernimmt die helle Editorial-Struktur der freigegebenen Designvorlage und passt Marke, Inhalte, Kontaktwege und Akzentfarbe eigenständig an.

## Lokal starten

```bash
npm ci
npm run dev
```

Die lokale Vorschau ist danach standardmäßig unter `http://localhost:3000` erreichbar.

## Zentrale Konfiguration

Alle salonabhängigen Inhalte liegen in [`config/salon.ts`](./config/salon.ts): Identität, Akzentfarbe `#70344C`, Navigation, Kontakt, Öffnungszeiten, bestätigte Leistungsbereiche, Team, SEO, Kartenmodus und rechtliche Vorschauhinweise. Komponenten lesen diese Daten über [`app/site-data.ts`](./app/site-data.ts).

Die Recherche-Nachweise und offenen Punkte stehen in [`SALON_INTAKE.md`](./SALON_INTAKE.md). Bildherkunft und Einordnung stehen in [`ASSET_MANIFEST.md`](./ASSET_MANIFEST.md) sowie maschinenlesbar in [`config/asset-manifest.json`](./config/asset-manifest.json).

## Routen

`/`, `/team/`, `/salon/`, `/schnitt-farbe/`, `/ueber-uns/`, `/termin-buchen/`, `/oeffnungszeiten/`, `/impressum/`, `/datenschutz/`.

Die Vorschau hat bewusst keinen Online-Buchungsfluss: Termine werden über den bestätigten Telefonkontakt abgestimmt. Google Maps wird erst nach einem bewussten Klick geladen. Das bestätigte Instagram-Profil wird nur extern verlinkt und nicht eingebettet.

## Prüfungen

```bash
npm run check:template
npm run check:client-preview
npm run check:template:strict
npm run lint
npx tsc --noEmit
npm run build
npm audit --audit-level=high
```

Der Strict-Check bleibt bis zur fachlichen Bestätigung der Claims und zur juristischen Prüfung von Impressum und Datenschutz absichtlich rot. `preview.enabled: true` setzt `noindex, nofollow` und sperrt Crawler zusätzlich über `robots.txt`.

## Vorschaugrenze

Die fünf sichtbaren Haarmotive sind originale, generische KI-Symbolbilder aus der Website-Vorlage. Sie zeigen weder den Salon noch Elena Schefer oder Kundinnen und Kunden. Vor einem regulären Livegang müssen Leistungen, Rechtstexte und gegebenenfalls neue Salonfotos gemeinsam freigegeben werden.
