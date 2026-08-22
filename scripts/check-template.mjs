import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const strict = process.env.TEMPLATE_STRICT === "1";
const errors = [];
const warnings = [];
const manifestPaths = new Set();
const photoExtension = /\.(?:avif|jpe?g|png|webp)$/i;

const requiredFiles = [
  "config/salon.ts",
  "config/asset-manifest.json",
  "app/site-data.ts",
  "app/seo.ts",
  "app/components/SiteHeader.tsx",
  "app/components/SiteFooter.tsx",
  "app/components/MapEmbed.tsx",
  "app/components/ConsentMap.tsx",
  "app/components/Hero.tsx",
  "app/components/BentoCard.tsx",
  "app/components/ImageCard.tsx",
  "app/components/ServiceCard.tsx",
  "app/components/HoursCard.tsx",
  "app/components/ContactCard.tsx",
  "app/components/CallToAction.tsx",
  "scripts/check-client-preview.mjs",
  "SALON_INTAKE.md",
  "CODEX_PROMPT.md",
  "ASSET_MANIFEST.md",
  "HANDOVER_CHECKLIST.md",
  "README.md",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Pflichtdatei fehlt: ${file}`);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`Ungültiges JSON: ${relative(root, path)} (${error.message})`);
    return null;
  }
}

const manifest = readJson(join(root, "config/asset-manifest.json"));
if (manifest) {
  for (const asset of manifest.assets ?? []) {
    manifestPaths.add(asset.path);
    if (!asset.path || !asset.source || !asset.license || !asset.alt || !asset.releaseStatus) {
      errors.push(`Asset-Metadaten unvollständig: ${asset.path ?? "(ohne Pfad)"}`);
    }
    if (!existsSync(join(root, "public", asset.path.replace(/^\//, "")))) errors.push(`Assetdatei fehlt: ${asset.path}`);
    if (asset.approved !== true) warnings.push(`Asset noch nicht freigegeben: ${asset.path}`);
  }

  const visibleHairAssets = (manifest.assets ?? []).filter((asset) => asset.usage === "visible-hair-motif");
  if (visibleHairAssets.length < 5) errors.push("Mindestens fünf dokumentierte Haarmotive für sichtbare Inhaltsbildflächen fehlen.");
  for (const asset of visibleHairAssets) {
    if (!photoExtension.test(asset.path)) errors.push(`Sichtbares Haarmotiv muss ein Fotoformat nutzen: ${asset.path}`);
    if (asset.assetType !== "photorealistic-hair") errors.push(`Sichtbares Haarmotiv ist nicht als fotorealistisches Haarmotiv gekennzeichnet: ${asset.path}`);
  }
}

const sourceRoots = ["app", "config", "public", "package.json"];
const textFiles = [];
function collect(path) {
  if (!existsSync(path)) return;
  if (statSync(path).isFile()) {
    if (/\.(ts|tsx|css|json|mjs|svg|html)$/i.test(path) || path.endsWith("package.json")) textFiles.push(path);
    return;
  }
  const stat = readdirSync(path, { withFileTypes: true });
  for (const entry of stat) {
    const child = join(path, entry.name);
    if (entry.isDirectory()) collect(child);
    else if (/\.(ts|tsx|css|json|mjs|svg|html)$/i.test(entry.name) || entry.name === "package.json") textFiles.push(child);
  }
}
for (const rootPath of sourceRoots) collect(join(root, rootPath));

const forbiddenTokens = [
  "chaar" + "isma",
  "daa" + "den",
  "sayn" + "ische",
  "ste" + "ffi",
  "dn" + "fk",
  "great" + "lengths",
  "facebook" + ".com",
];
const forbidden = new RegExp(forbiddenTokens.join("|"), "i");
for (const file of textFiles) {
  const content = readFileSync(file, "utf8");
  if (forbidden.test(content)) errors.push(`Alte Marke/Kundenquelle im Quelltext: ${relative(root, file)}`);
}

const visiblePlaceholder = /(?:eintragen|example\.invalid|Platzhaltergrafik)/i;
for (const file of textFiles.filter((path) => relative(root, path).startsWith("app/"))) {
  if (visiblePlaceholder.test(readFileSync(file, "utf8"))) {
    errors.push(`Sichtbarer Platzhalter im Frontend: ${relative(root, file)}`);
  }
}

const configText = existsSync(join(root, "config/salon.ts")) ? readFileSync(join(root, "config/salon.ts"), "utf8") : "";
const placeholders = (configText.match(/eintragen|example\.invalid|Platzhalter|Verantwortliche Person/gi) ?? []).length;
if (placeholders) {
  const message = `${placeholders} neutrale Platzhalter gefunden; vor einem Kundeneinsatz zentral ersetzen.`;
  if (strict) errors.push(message); else warnings.push(message);
}
if (!/mode:\s*"(?:consent|link-only)"/.test(configText)) errors.push("Kartenmodus muss consent oder link-only sein.");
if (!/canonical:/.test(configText) || !/description:/.test(configText)) errors.push("Route-spezifische SEO-Felder fehlen.");

const salonConfigText = configText.slice(configText.indexOf("export const salonConfig ="));
const mediaBlock = salonConfigText.match(/\n  media:\s*\{([\s\S]*?)\n  \},\n  history:/)?.[1] ?? "";
if (!mediaBlock) {
  errors.push("Der zentrale Medienblock fehlt.");
} else {
  if (/\.svg["')]/i.test(mediaBlock)) errors.push("Sichtbare Inhaltsbilder dürfen keine SVG- oder Illustrations-Platzhalter sein.");
  const mediaPhotoPaths = [...mediaBlock.matchAll(/["'](\/images\/[^"']+\.(?:avif|jpe?g|png|webp))["']/gi)].map((match) => match[1]);
  if (mediaPhotoPaths.length < 5) errors.push("Der zentrale Medienblock enthält zu wenige sichtbare Haarmotive im Fotoformat.");
  for (const assetPath of mediaPhotoPaths) {
    if (!manifestPaths.has(assetPath)) errors.push(`Sichtbares Haarmotiv fehlt im Asset-Manifest: ${assetPath}`);
  }
}
if (/placeholderImage|Platzhaltergrafik/i.test(configText)) errors.push("Sichtbare Medien dürfen keine Platzhaltergrafiken verwenden.");

const forbiddenEntries = [".env", ".env.local", ".vercel", "node_modules", ".next", "tsconfig.tsbuildinfo"];
for (const entry of forbiddenEntries) {
  if (!existsSync(join(root, entry))) continue;
  if (["node_modules", ".next", ".vercel", "tsconfig.tsbuildinfo"].includes(entry)) warnings.push(`${entry} ist lokal vorhanden und muss vor dem Commit ignoriert bleiben.`);
  else errors.push(`Nicht ins Template gehört: ${entry}`);
}
for (const file of ["README.md", "SALON_INTAKE.md", "CODEX_PROMPT.md", "HANDOVER_CHECKLIST.md"]) {
  if (existsSync(join(root, file)) && /private key|BEGIN (RSA|OPENSSH) PRIVATE KEY/i.test(readFileSync(join(root, file), "utf8"))) errors.push(`Möglicher privater Schlüssel in ${file}`);
}

const approvals = /legalReviewed:\s*true/.test(configText) && /claimsConfirmed:\s*true/.test(configText);
if (!approvals) {
  const message = "Rechtliche Freigaben und Claims sind für die Kundenvorschau noch offen.";
  if (strict) errors.push(message); else warnings.push(message);
}
if (!/assetRightsConfirmed:\s*true/.test(configText)) {
  const message = "Asset-Rechte sind für die Kundenvorschau noch offen.";
  if (strict) errors.push(message); else warnings.push(message);
}

if (warnings.length) {
  console.log("Hinweise:");
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (errors.length) {
  console.error("Template-Check nicht bestanden:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Template-Check bestanden${strict ? " (strict)" : ""}: ${textFiles.length} Quelltextdateien, Map-Consent und Asset-Metadaten geprüft.`);
}
