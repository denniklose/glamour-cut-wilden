# Codex Prompt für einen neuen Salon

Erstelle aus dieser Vorlage eine kundenspezifische Website. Lies zuerst `AGENTS.md` (falls vorhanden), `README.md`, `SALON_INTAKE.md`, `ASSET_MANIFEST.md` und `HANDOVER_CHECKLIST.md`.

## Regeln

- Arbeite in einer frischen Kopie und ändere die Vorlage nicht direkt.
- Beginne mit einer öffentlichen Quellenrecherche und einem Quellenledger: Quelle, URL, Prüfdatum, Status (`confirmed`, `likely`, `open`) und kurze Begründung je Angabe.
- Prüfe jede Angabe gegen eine bestätigte Quelle; erfinde keine Leistungen, Preise, Teamdaten, Öffnungszeiten, Bewertungen oder rechtlichen Aussagen.
- Bereite vor dem ersten Kundengespräch eine vollständig gefüllte Vorschau vor. Bestätigte Fakten werden konkret formuliert, offene Punkte bekommen neutrale, nicht-faktische Texte aus der Vorlage. Der Kunde muss jede Route wie eine fast fertige Website ansehen können.
- Pflege Salonname, Logo, Akzent, Kontakt, Öffnungszeiten, Leistungen, Team, Geschichte, Claims, Social-Links, SEO, Canonicals, Kartenmodus und Rechtstexte ausschließlich in `config/salon.ts`.
- Nutze nur freigegebene Assets und dokumentiere Quelle, Lizenz, Alt-Text und Freigabestatus in `config/asset-manifest.json` und `ASSET_MANIFEST.md`.
- Verwende in jeder sichtbaren Inhalts-Bildfläche echte, klar lizenzierte Salonfotos oder originale, fotorealistische KI-Haarmotive. Keine Illustrationen, Vektor-Platzhalter oder abstrakten Ersatzgrafiken als sichtbare Standardbilder verwenden.
- Die mitgelieferten KI-Haarmotive sind generische Inspiration, keine Salon-, Team-, Kunden- oder Leistungsaufnahmen. Vor Kundeneinsatz nur mit korrekter Kennzeichnung und dokumentierter Freigabe behalten oder durch passende freigegebene Motive ersetzen.
- Lade externe Karten erst nach einem bewussten Klick. Adresse und Routenlink müssen vorher verfügbar bleiben.
- Zeige keine Google-Bewertungen ohne bestätigte Quelle.
- Bewahre Layout, Typografie, Abstände, Akzent-Unterstreichung, CTA-Logik und responsive Verhalten der Charm-Optik.
- Lass `preview.enabled: true`, solange der Entwurf mit dem Kunden besprochen wird. Der sichtbare Hinweis `Vorab-Entwurf` verhindert, dass neutrale Texte mit bestätigten Salonfakten verwechselt werden.

## Abschluss

Führe vor dem Erstgespräch `npm ci`, `npm run check:client-preview`, `npm run lint`, `npx tsc --noEmit` und `npm run build` aus. Prüfe Desktop, Tablet und Mobil auf Overflow, abgeschnittene Texte, genau eine H1 pro Seite, Console-Fehler, route-spezifische SEO-Metadaten und den Map-Consent vor und nach dem Klick. Nach der Kundenfreigabe `preview.enabled` deaktivieren, offene Fakten ersetzen, `npm run check:template:strict` und die übrigen Handover-Checks ausführen. Erst dann ist die Website eine Produktionsübergabe.
