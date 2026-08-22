import { site } from "../site-data";

export default function ContactCard() {
  return <article className="contact-page-card"><p className="section-kicker">Kontakt</p><h2>{site.name}.</h2><p className="inner-address">{site.owner}<br />{site.address[0]}<br />{site.address[1]}</p><a className="button button-primary" href={site.phoneHref}>{site.phoneDisplay} anrufen</a><a className="text-link" href={site.emailHref}>{site.email}</a></article>;
}
