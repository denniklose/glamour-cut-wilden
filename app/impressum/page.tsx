import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { salonConfig, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("imprint");

export default function ImpressumPage() {
  return <main className="inner-page legal-page"><SiteHeader inner /><section className="legal-page-content"><p className="eyebrow">Rechtstexte · Kundenvorschau</p><h1>Impressum</h1><p>Die öffentlich recherchierten Kontaktangaben sind eingetragen. Diese Vorschau ist noch keine rechtlich freigegebene Endfassung.</p><h2>Angaben gemäß § 5 DDG</h2><p>{salonConfig.legal.imprint.owner}<br />{site.name}<br />{salonConfig.legal.imprint.address.map((line) => <span key={line}>{line}<br /></span>)}{salonConfig.legal.imprint.contact}</p>{salonConfig.legal.imprint.paragraphs.map((item) => <div className="legal-copy-block" key={item.title}><h2>{item.title}</h2><p>{item.copy}</p></div>)}</section><SiteFooter /></main>;
}
