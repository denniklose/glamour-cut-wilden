# Handover Checklist

## Inhalt

- [ ] `SALON_INTAKE.md` vollständig und mit Quellen belegt
- [ ] Quellenledger mit URL, Prüfdatum, Status und Unsicherheiten gepflegt
- [ ] Öffentliche Identität des Salons eindeutig aufgelöst
- [ ] Jede Route ist vor dem Erstgespräch mit bestätigter oder neutraler Preview-Copy gefüllt
- [ ] `npm run check:client-preview` erfolgreich ausgeführt
- [ ] Vor dem Erstgespräch ist `preview.enabled: true` und der Hinweis `Vorab-Entwurf` sichtbar
- [ ] Keine alten Marken, URLs, Logos, Fotos, Bewertungen oder Testdaten
- [ ] Leistungen, Team und Geschichte schriftlich freigegeben
- [ ] Claims je Route bestätigt
- [ ] Jede sichtbare Inhalts-Bildfläche nutzt ein klar lizenziertes Foto oder ein freigegebenes, originales fotorealistisches KI-Haarmotiv
- [ ] Keine Illustrationen, Vektor-Platzhalter oder abstrakten Ersatzgrafiken als sichtbare Inhaltsbilder
- [ ] Generische KI-Motive sind nicht fälschlich als Salon, Team, Kundschaft oder Leistung dargestellt

## Technik

- [ ] `npm ci`
- [ ] `npm run check:template` ohne Fehler
- [ ] Nach Kundenfreigabe: `preview.enabled: false`
- [ ] Nach Kundenfreigabe: `npm run check:template:strict`
- [ ] `npm run lint`
- [ ] `npx tsc --noEmit`
- [ ] `npm run build`
- [ ] `npm audit` geprüft und dokumentiert
- [ ] Keine `.env*`, privaten Schlüssel, `node_modules`, `.next`, `.vercel` oder Cache-Dateien

## Qualitätssicherung

- [ ] Desktop, Tablet und Mobil geprüft
- [ ] Kein horizontaler Overflow oder abgeschnittener Text
- [ ] Genau eine H1 pro Route
- [ ] Keine Console-Fehler
- [ ] Navigation, CTAs, Telefon, E-Mail und Terminlink getestet
- [ ] Vor dem Map-Klick kein iframe/keine Google-Anfrage; nach dem Klick nur bei freigegebener URL
- [ ] Route-spezifische Title, Description und Canonical verifiziert

## Recht und Übergabe

- [ ] Impressum geprüft
- [ ] Datenschutz geprüft
- [ ] Externe Dienste und Einwilligungen dokumentiert
- [ ] Asset-Quellen, Lizenzen, Alt-Texte und Freigaben vollständig
- [ ] Je KI-Motiv ist der Erstellungsnachweis, der generische oder kundenbezogene Status und die Freigabe im Asset-Manifest dokumentiert
- [ ] GitHub-Ziel, Sichtbarkeit, Branch und Template-Status verifiziert
- [ ] Kein Vercel-Projekt aus der Vorlage angelegt oder überschrieben

## Ablauf der Kundenvorschau

- [ ] Der Kunde kann Startseite und alle Unterseiten vor dem ersten Anruf öffnen.
- [ ] Neutrale Texte sind hochwertig formuliert, aber nicht als Salonfakten ausgegeben.
- [ ] Offene Punkte sind im Quellenledger für das Gespräch notiert.
- [ ] Änderungswünsche werden nach dem Gespräch wieder zentral in `config/salon.ts` eingepflegt.
