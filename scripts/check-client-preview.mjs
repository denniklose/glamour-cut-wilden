import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const errors = [];
const requiredRoutes = [
  "app/page.tsx",
  "app/team/page.tsx",
  "app/salon/page.tsx",
  "app/haarverlaengerung-extension/page.tsx",
  "app/ueber-uns/page.tsx",
  "app/termin-buchen/page.tsx",
  "app/oeffnungszeiten/page.tsx",
  "app/impressum/page.tsx",
  "app/datenschutz/page.tsx",
];

const read = (path) => readFileSync(join(root, path), "utf8");

for (const route of requiredRoutes) {
  if (!existsSync(join(root, route))) errors.push(`Preview-Route fehlt: ${route}`);
}

const configText = read("config/salon.ts");
if (!/preview:\s*\{[\s\S]*?enabled:\s*true/.test(configText)) {
  errors.push("Der Vorab-Entwurf muss mit preview.enabled = true gekennzeichnet sein.");
}
if (!/label:\s*"[^\"]{4,}"/.test(configText) || !/note:\s*"[^\"]{20,}"/.test(configText)) {
  errors.push("Label und Hinweis für den Kunden-Preview fehlen.");
}
if (!/services:\s*\[[\s\S]*?title:\s*"[^\"]{8,}"/.test(configText)) {
  errors.push("Die Vorschau enthält keine gefüllten, neutralen Leistungsthemen.");
}
if (!/history:\s*\{[\s\S]*?heading:\s*"[^\"]{12,}"/.test(configText)) {
  errors.push("Die Vorschau enthält keinen gefüllten Über-uns-Text.");
}

const sourceFiles = [];
function collect(path) {
  if (!existsSync(path)) return;
  const info = statSync(path);
  if (info.isFile()) {
    if (/\.(ts|tsx|css)$/i.test(path)) sourceFiles.push(path);
    return;
  }
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    collect(join(path, entry.name));
  }
}
collect(join(root, "app"));
sourceFiles.push(join(root, "config/salon.ts"));

const forbiddenVisiblePlaceholders = /(?:eintragen|example\.invalid|Platzhaltergrafik)/i;
for (const path of sourceFiles) {
  const content = readFileSync(path, "utf8");
  if (forbiddenVisiblePlaceholders.test(content)) {
    errors.push(`Sichtbarer Platzhalter im Preview-Frontend: ${relative(root, path)}`);
  }
}

const manifest = JSON.parse(read("config/asset-manifest.json"));
const visibleHairAssets = (manifest.assets ?? []).filter((asset) => asset.usage === "visible-hair-motif");
if (visibleHairAssets.length < 5) errors.push("Für die Preview fehlen mindestens fünf sichtbare Haarmotive.");
for (const asset of visibleHairAssets) {
  if (asset.assetType !== "photorealistic-hair") errors.push(`Kein fotorealistisches Haarmotiv: ${asset.path}`);
  if (asset.approved !== true) errors.push(`Haarmotiv noch nicht freigegeben: ${asset.path}`);
  if (!asset.source || !asset.license || !asset.alt || !asset.releaseStatus) {
    errors.push(`Asset-Metadaten unvollständig: ${asset.path}`);
  }
  if (!existsSync(join(root, "public", asset.path.replace(/^\//, "")))) {
    errors.push(`Assetdatei fehlt: ${asset.path}`);
  }
}

if (errors.length) {
  console.error("Client-Preview-Check nicht bestanden:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Client-Preview-Check bestanden: ${requiredRoutes.length} Routen, neutrale Copy, Quellenhinweise und Bildrechte geprüft.`);
}
