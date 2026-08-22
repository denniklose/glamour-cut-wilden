# Salon Intake

Dieses Formular ist die einzige Quelle für die spätere Befüllung. Unbestätigte Angaben werden intern als offen markiert. In der Kundenvorschau erscheinen dafür neutrale, nicht-faktische Formulierungen, damit jede Seite vor dem ersten Gespräch vollständig und professionell wirkt. Eine Produktionskopie darf offene Angaben nicht als Fakten ausgeben.

## Identität und Kontakt

- Öffentlicher Salonname:
- Rechtlicher Betreibername:
- Verantwortliche Person:
- Descriptor / Ort:
- Adresse (Straße, Hausnummer):
- PLZ und Ort:
- Telefon und `tel:`-Link:
- E-Mail und `mailto:`-Link:
- Website:
- Terminlink:
- Routenlink:

## Quellenledger

Für jede öffentliche Angabe eine Zeile führen. Nur eindeutig zuordenbare Quellen verwenden.

| Feld / Aussage | Status (`confirmed` / `likely` / `open`) | URL oder Nachweis | Geprüft am | Notiz / Unsicherheit |
| --- | --- | --- | --- | --- |
| Beispiel: Salonname |  |  |  |  |

`confirmed` darf konkret auf der Website stehen. `likely` bleibt bis zur Freigabe neutral. `open` erhält Preview-Copy und wird im Kundengespräch geklärt.

## Gestaltung

- Freigegebenes Logo (Datei und Quelle):
- Akzentfarbe (HEX/RGB und Freigabe):
- Helle/dunkle Akzentvarianten:
- Favicon-Freigabe:
- Bildkonzept: Alle sichtbaren Bildflächen verwenden echte, klar lizenzierte Fotos oder originale, fotorealistische KI-Haarmotive. Keine sichtbaren Illustrationen, Vektor-Platzhalter oder abstrakten Ersatzgrafiken.
- Bildliste je Motiv (Datei, Quelle/Erstellungsnachweis, Lizenz, Alt-Text, Freigabe, Kennzeichnung als Salonaufnahme oder generische KI-Inspiration):

## Inhalt

- Hero-Claim (schriftlich freigegeben):
- Intro- und Abschnitts-Claims:
- Leistungen mit Beschreibung und Quelle:
- Team (Name, Rolle, Bio, Einverständnis, Bildfreigabe):
- Geschichte / Über Uns (Quelle):
- Öffnungszeiten (Quelle und Aktualitätsdatum):
- FAQ-Antworten (Quelle):
- Social-Links (offizielle Profile):

## Vorschau-Copy für das Erstgespräch

- Sind alle Routen mit sinnvoller, neutraler oder bestätigter Copy gefüllt?
- Ist jede offene Aussage als Gesprächspunkt erkennbar, ohne einen Platzhalter auf der Seite zu zeigen?
- Ist `preview.enabled` in `config/salon.ts` auf `true` und der Hinweis `Vorab-Entwurf` sichtbar?
- Wurde `npm run check:client-preview` erfolgreich ausgeführt?

## SEO und Recht

- SEO-Titel und Beschreibung je Route:
- Canonical-Basis und finale URLs:
- Impressum durch zuständige Stelle geprüft:
- Datenschutz durch zuständige Stelle geprüft:
- Externe Dienste und Datenschutz bewertet:
- Kartenmodus bestätigt (`consent` oder `link-only`):

## Nachweise

Zu jeder Angabe einen nachvollziehbaren Nachweis ablegen (offizielle Website, schriftliche Freigabe oder Originaldatei). Google-Bewertungen, Sterne und Anzahl der Rezensionen werden nur nach expliziter Quellenbestätigung ergänzt; im Starter sind sie nicht enthalten.

Die fünf mitgelieferten KI-Haarmotive sind ausschließlich generische, gesichtsneutrale Vorlagenbilder. Sie belegen weder Salonräume noch Team, Kundschaft oder Leistungen und müssen beim Kundeneinsatz entweder eindeutig als generische Inspiration gekennzeichnet oder durch freigegebene Motive ersetzt werden.
