import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { salonConfig, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("privacy");

export default function DatenschutzPage() {
  return <main className="inner-page legal-page"><SiteHeader inner /><section className="legal-page-content"><p className="eyebrow">Rechtstexte · Kundenvorschau</p><h1>Datenschutz</h1><p>Diese Vorschau beschreibt die aktuellen technischen Grundzüge. Hosting-Details, Rechtsgrundlagen und Speicherfristen müssen vor dem regulären Livegang anhand der finalen Konfiguration rechtlich geprüft werden.</p><h2>Verantwortliche Stelle</h2><p>{salonConfig.legal.privacy.responsible}<br />{site.name}<br />{site.address.map((line) => <span key={line}>{line}<br /></span>)}</p>{salonConfig.legal.privacy.paragraphs.map((item) => <div className="legal-copy-block" key={item.title}><h2>{item.title}</h2><p>{item.copy}</p></div>)}</section><SiteFooter /></main>;
}
