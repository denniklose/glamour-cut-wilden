import Image from "next/image";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import InnerPageHero from "../components/InnerPageHero";
import ServiceCard from "../components/ServiceCard";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("cutColor");

export default function CutColorPage() {
  return (
    <main className="inner-page extension-page">
      <SiteHeader inner />
      <InnerPageHero
        eyebrow={pageCopy.pages.cutColor.eyebrow}
        title={<>Schnitt. Farbe. <em className="heading-accent">Neue Ideen.</em></>}
        intro={pageCopy.pages.cutColor.intro}
        ctaLabel={bookingLabel}
        ctaHref={bookingHref}
      />
      <section className="inner-feature-section">
        <div className="inner-feature-copy">
          <p className="section-kicker">Persönlich geplant</p>
          <h2>Ihr neuer <em className="heading-accent">Look</em> beginnt mit Beratung.</h2>
          <p>{salonConfig.claims.cutColor}</p>
          <p>Öffentliche Einblicke von Glamour Cut zeigen Schnitte, Farbveränderungen sowie Kurzhaar- und Flechtfrisuren. Was für Ihr Haar passend ist, klären Sie direkt im Salon.</p>
        </div>
        <figure className="inner-feature-media extension-feature-media">
          <Image src={salonConfig.media.color.src} alt={salonConfig.media.color.alt} fill loading="eager" sizes="(max-width: 760px) 94vw, 58vw" />
          <figcaption className="image-note">{salonConfig.media.color.caption} · Symbolbild</figcaption>
        </figure>
      </section>
      <section className="services-section booking-services" aria-labelledby="cut-color-services-title">
        <div className="section-heading section-heading-light">
          <p className="section-kicker">Öffentlich gezeigte Bereiche</p>
          <h2 id="cut-color-services-title">Inspiration für Ihren <em className="heading-accent">Termin.</em></h2>
          <p>Die Auswahl beschreibt öffentlich sichtbare Themen, keine vollständige Preisliste. Den konkreten Umfang bitte telefonisch abstimmen.</p>
        </div>
        <div className="service-list">{salonConfig.services.map((service) => <ServiceCard key={service.number} {...service} href={bookingHref} />)}</div>
      </section>
      <CallToAction kicker="Termin" title={<>Ihre Idee persönlich <em className="heading-accent">besprechen.</em></>} copy="Rufen Sie Glamour Cut an und stimmen Sie Wunsch, Umfang und Termin direkt ab." dark />
      <SiteFooter />
      <a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a>
    </main>
  );
}
