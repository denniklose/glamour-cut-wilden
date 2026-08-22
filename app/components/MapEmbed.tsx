"use client";
import { useState } from "react";
import { salonConfig, site } from "../site-data";

type MapEmbedProps = { directionsUrl: string; embedUrl: string; title: string };

export default function MapEmbed({ directionsUrl, embedUrl, title }: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const canLoadMap = Boolean(embedUrl);
  if (isLoaded && canLoadMap) return <div className="map-embed map-embed-loaded"><iframe title={title} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={directionsUrl || "#kartenhinweis"} target={directionsUrl ? "_blank" : undefined} rel={directionsUrl ? "noreferrer" : undefined}>{salonConfig.map.routeLabel} <span aria-hidden="true">↗</span></a></div>;
  return <div className="map-consent-card" id="kartenhinweis"><div className="map-consent-content"><span className="map-pin" aria-hidden="true">⌖</span><p className="section-kicker">Karte erst nach Zustimmung laden</p><strong>{site.name} in Wilnsdorf-Wilden</strong><p className="map-consent-address">{site.address[0]}<br />{site.address[1]}</p><p>{salonConfig.map.consentCopy}</p></div><div className="map-consent-actions"><button className="button button-light" type="button" disabled={!canLoadMap} onClick={() => setIsLoaded(true)}>{canLoadMap ? salonConfig.map.consentLabel : "Karte folgt nach Freigabe"}</button>{directionsUrl ? <a className="map-route-link" href={directionsUrl} target="_blank" rel="noreferrer">Route direkt öffnen <span aria-hidden="true">↗</span></a> : null}</div></div>;
}
