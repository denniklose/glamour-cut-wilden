# Wiederverwendbare Friseursalon-Website-Vorlage

Diese neutrale Next.js-Vorlage bewahrt die Charm-artige Editorial-Optik des Ausgangsprojekts: helle Flächen, große typografische Überschriften, eine geschwungene Akzentschrift mit unregelmäßiger Unterstreichung, Bento-Bildkarten und weinrote Akzentflächen. Alle sichtbaren Inhaltsbildflächen starten mit fotorealistischen, original KI-generierten Haarmotiven statt mit Grafiken oder Illustrationen. Sie enthält keine Kundendaten, Bewertungen, Social-Links oder Produktions-URLs.

Der gewünschte Repository-Name für diese geprüfte Vorlage ist `salon-chaarisma-daaden-charm-2026`. Der Name ist nur eine technische Vorlagenkennung; im Website-Quelltext werden keine Kundennamen verwendet.

## Schnellstart

```bash
npm ci
npm run dev
```

Danach ist die Vorschau unter `http://localhost:3000` erreichbar.

## Zentral konfigurieren

Alle salonabhängigen Angaben liegen in [`config/salon.ts`](./config/salon.ts): Identität, Logo, Akzentfarben, Adresse, Kontakt, Öffnungszeiten, Leistungen, Team, Geschichte, Claims, Social-Links, SEO, Canonicals, Kartenmodus und Rechtstexte. Komponenten lesen diese Konfiguration über [`app/site-data.ts`](./app/site-data.ts); Kundendaten gehören nicht in einzelne Seiten.

Die Vorlage ist für einen zweistufigen Kundenprozess eingerichtet. Im Modus `preview.enabled: true` zeigt sie bereits eine vollständig gefüllte, hochwertige Vorschau: bestätigte öffentliche Fakten werden zentral eingetragen, fehlende Fakten erhalten neutrale Formulierungen ohne Tatsachenbehauptung. So kann der Kunde die gesamte Website vor dem ersten Anruf durchsehen, kommentieren und Änderungswünsche besprechen.

### Vor dem ersten Kundengespräch

1. [`SALON_INTAKE.md`](./SALON_INTAKE.md) öffnen und den Salon über eindeutig zuordenbare öffentliche Quellen recherchieren. Jede Angabe erhält Status, URL, Prüfdatum und eine kurze Notiz.
2. Bestätigte Fakten in `config/salon.ts` übernehmen. Für offene Punkte bleibt die neutrale Preview-Copy bestehen; niemals Preise, Bewertungen, Teammitglieder, Leistungen, Marken, Öffnungszeiten oder Rechtstexte erfinden.
3. `config/asset-manifest.json` und [`ASSET_MANIFEST.md`](./ASSET_MANIFEST.md) je Bild aktualisieren. Sichtbare Bildflächen verwenden nur klar lizenzierte Fotos oder originale, fotorealistische KI-Haarmotive.
4. `npm run check:client-preview` ausführen und alle Routen auf Desktop, Tablet und Mobil zeigen. Der Hinweis `Vorab-Entwurf` macht transparent, dass der Kunde Inhalte noch freigeben kann.

### Nach dem Kundengespräch

1. Besprochene Wünsche und freigegebene Fakten wieder zentral in `config/salon.ts` eintragen.
2. `preview.enabled` auf `false` setzen, das Preview-Label entfernen und Impressum, Datenschutz, Claims sowie Asset-Rechte prüfen lassen.
3. Erst danach `npm run check:template:strict`, `npm run lint`, `npx tsc --noEmit` und `npm run build` ausführen. Die Produktionskopie darf keine offenen Platzhalter oder unbestätigten Aussagen enthalten.

## Routen

`/`, `/team/`, `/salon/`, `/haarverlaengerung-extension/`, `/ueber-uns/`, `/termin-buchen/`, `/oeffnungszeiten/`, `/impressum/`, `/datenschutz/`.

Die Metadaten sind pro Route in `config/salon.ts` hinterlegt. Google Maps wird ausschließlich in `MapEmbed` nach einem bewussten Klick geladen; Adresse und Routenlink bleiben vorher sichtbar. Im Starter ist die Karten-URL leer, daher entsteht standardmäßig keine Google-Anfrage.

## Checks

```bash
npm run check:template
npm run check:client-preview
npm run check:template:strict
npm run lint
npx tsc --noEmit
npm run build
npm audit
```

Der Client-Preview-Check prüft, dass jede Route gefüllt ist, der Vorab-Entwurf sichtbar markiert bleibt, keine leeren Standard-Platzhalter erscheinen und die fünf generischen Haarmotive vollständig dokumentiert sind. Der normale Template-Check blockiert alte Marken, alte URLs, sichtbare Platzhalter, Secrets, fehlende Assets, fehlende SEO-Felder und fehlende Komponenten. Der Strict-Check behandelt offene rechtliche/Claim-Freigaben als Fehler.

## Assets und Datenschutz

Die Vorlage enthält fünf originale, fotorealistische KI-Haarmotive im WebP-Format. Sie sind bewusst gesichtsneutral und als generische Inspiration dokumentiert: Sie zeigen weder den Kundensalon noch dessen Team, Kundschaft oder Leistungen. Für einen Kundeneinsatz müssen sie korrekt gekennzeichnet und freigegeben oder durch passende, klar lizenzierte Fotos beziehungsweise originale KI-Haarmotive ersetzt werden. Sichtbare Illustrationen, Vektor-Platzhalter und abstrakte Ersatzgrafiken gehören nicht in die Inhaltsflächen. Logo und Favicon bleiben als originale Vektordateien zulässig.

Kundenspezifische Fotos, Logos und Bewertungen müssen vor der Übernahme mit Quelle, Lizenz, Alt-Text und Freigabestatus in den beiden Asset-Manifesten eingetragen werden. `.env*`, `.vercel`, `node_modules`, Build-Ausgaben und private Schlüssel gehören nicht in das Repository. Für diese Vorlage wird kein Vercel-Projekt angelegt.
