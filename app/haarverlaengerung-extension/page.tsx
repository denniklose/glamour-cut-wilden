import Image from "next/image";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("extensions");

export default function ExtensionPage() {
  return <main className="inner-page extension-page"><SiteHeader inner /><InnerPageHero eyebrow={pageCopy.pages.extensions.eyebrow} title={<>Mehr <em className="heading-accent">Länge.</em> Mehr Möglichkeiten.</>} intro={pageCopy.pages.extensions.intro} ctaLabel={bookingLabel} ctaHref={bookingHref} /><section className="inner-feature-section"><div className="inner-feature-copy"><p className="section-kicker">Extension-Inspiration</p><h2>Ihr neuer <em className="heading-accent">Look</em> beginnt mit Beratung.</h2><p>{salonConfig.claims.extensions}</p><p>Ob mehr Länge, mehr Fülle oder einfach eine neue Silhouette: Die passende Methode entsteht aus Haar, Wunsch und einer ehrlichen Beratung.</p></div><figure className="inner-feature-media extension-feature-media"><Image src={salonConfig.media.extension.src} alt={salonConfig.media.extension.alt} fill sizes="(max-width: 760px) 94vw, 58vw" /></figure></section><CallToAction kicker="Termin" title={<>Alle Möglichkeiten auf einen <em className="heading-accent">Blick.</em></>} copy="Im Gespräch lässt sich klären, welche Länge, Fülle und Pflege zum eigenen Alltag passen." dark /><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
