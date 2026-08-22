# Zentrale Salon-Konfiguration

`salon.ts` ist die einzige Stelle für kundenspezifische Daten. Die Typen verhindern, dass einzelne Seiten eigene Varianten von Kontakt, Öffnungszeiten, Links oder SEO anlegen.

Die Vorlage hat zwei Zustände: Mit `preview.enabled: true` entsteht eine vorzeigbare Kundenvorschau. Öffentliche Fakten werden konkret eingetragen; offene Punkte bleiben als neutrale, nicht-faktische Preview-Copy sichtbar und werden im Quellenledger geführt. Nach dem Gespräch `preview.enabled` auf `false` setzen, alle offenen Felder ersetzen und erst danach `legal.approvals` freigeben. Rechtliche Nachweise und Asset-Rechte müssen in `SALON_INTAKE.md` und `ASSET_MANIFEST.md` dokumentiert sein.
