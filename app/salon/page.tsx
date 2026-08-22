import Image from "next/image";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("salon");

export default function SalonPage() {
  return <main className="inner-page"><SiteHeader inner /><InnerPageHero eyebrow={pageCopy.pages.salon.eyebrow} title={<>Raum für <em className="heading-accent">Ihren Stil.</em></>} intro={pageCopy.pages.salon.intro} ctaLabel={bookingLabel} ctaHref={bookingHref} /><section className="inner-feature-section inner-feature-section-reverse"><figure className="inner-feature-media"><Image src={salonConfig.media.salon.src} alt={salonConfig.media.salon.alt} fill sizes="(max-width: 760px) 94vw, 58vw" /><figcaption className="image-note">{salonConfig.media.salon.caption} · Symbolbild</figcaption></figure><div className="inner-feature-copy"><p className="section-kicker">Glamour Cut in Wilden</p><h2>Persönliche Beratung und <em className="heading-accent">neue Ideen.</em></h2><p>Glamour Cut finden Sie Auf dem Bruch 1 in Wilnsdorf-Wilden. Ihren Wunsch und den passenden Termin stimmen Sie direkt telefonisch ab.</p><p>{salonConfig.history.paragraphs[1]}</p><a className="button button-primary" href="/oeffnungszeiten/">Öffnungszeiten &amp; Kontakt</a></div></section><CallToAction kicker="Schnitt & Farbe" title={<>Inspiration für den <em className="heading-accent">nächsten Look.</em></>} copy="Entdecken Sie die öffentlich gezeigten Bereiche und besprechen Sie Ihre Idee persönlich mit dem Salon." /><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
