# Glamour Cut · Handover Checklist

## Inhalt

- [x] `SALON_INTAKE.md` vollständig und mit Quellen belegt
- [x] Quellenledger mit URL, Prüfdatum, Status und Unsicherheiten gepflegt
- [x] Öffentliche Identität des Salons eindeutig aufgelöst
- [x] Jede Route ist vor dem Erstgespräch mit bestätigter oder neutraler Preview-Copy gefüllt
- [x] `npm run check:client-preview` erfolgreich ausgeführt
- [x] `preview.enabled: true` und der Hinweis `Kundenvorschau` sichtbar
- [x] Keine alten Marken, URLs, Logos, Fotos, Bewertungen oder Testdaten im Frontend
- [ ] Leistungen, Team und Geschichte schriftlich freigegeben
- [ ] Claims je Route bestätigt
- [x] Jede sichtbare Inhalts-Bildfläche nutzt ein dokumentiertes originales fotorealistisches KI-Haarmotiv
- [x] Keine Illustrationen, Vektor-Platzhalter oder abstrakten Ersatzgrafiken als sichtbare Inhaltsbilder
- [x] Generische KI-Motive sind sichtbar und in Alt-Texten als Symbolbilder eingeordnet

## Technik

- [x] `npm ci`
- [x] `npm run check:template` ohne Fehler
- [ ] Nach Kundenfreigabe: `preview.enabled: false`
- [ ] Nach Kundenfreigabe: `npm run check:template:strict`
- [x] `npm run lint`
- [x] `npx tsc --noEmit`
- [x] `npm run build`
- [x] `npm audit --audit-level=high` · 0 Schwachstellen
- [x] Keine `.env*`, privaten Schlüssel, `node_modules`, `.next`, `.vercel` oder Cache-Dateien im Git-Stand

## Qualitätssicherung

- [x] Desktop 1280×720, Tablet 768×1024 und Mobil 390×844 geprüft
- [x] Kein horizontaler Overflow oder abgeschnittener Text in 27 Routen-/Viewport-Prüfungen
- [x] Genau eine H1 pro Route
- [x] Keine Console- oder Page-Fehler
- [x] Navigation, Mobile-Menü, CTAs, Telefon, E-Mail und Terminweg getestet
- [x] Vor dem Map-Klick 0 iframe und 0 Google-Anfragen; nach dem Klick 1 iframe
- [x] Route-spezifische Title, Description, Canonical sowie `noindex, nofollow` verifiziert

## Recht und Übergabe

- [ ] Impressum geprüft
- [ ] Datenschutz geprüft
- [x] Externe Dienste und Einwilligungen dokumentiert
- [x] Asset-Quellen, Lizenzen, Alt-Texte und Freigaben vollständig
- [x] Je KI-Motiv ist der Erstellungsnachweis, der generische Status und die Freigabe im Asset-Manifest dokumentiert
- [x] Privates GitHub-Ziel `denniklose/glamour-cut-wilden`, Branch `main`, getrennt von der Vorlage
- [x] Neues separates Vercel-Projekt `timmachtsachen/glamour-cut-wilden`; Vorlage nicht überschrieben
- [x] GitHub-Repository mit genau diesem Vercel-Projekt verbunden
- [x] Produktion `READY`, Alias `https://glamour-cut-wilden.vercel.app`, anonym HTTP 200

## Ablauf der Kundenvorschau

- [x] Der Kunde kann Startseite und alle Unterseiten vor dem ersten Anruf öffnen.
- [x] Vorsichtige Texte sind hochwertig formuliert, ohne unbestätigte Salonfakten auszugeben.
- [x] Offene Punkte sind im Quellenledger für das Gespräch notiert.
- [ ] Änderungswünsche werden nach dem Gespräch wieder zentral in `config/salon.ts` eingepflegt.
