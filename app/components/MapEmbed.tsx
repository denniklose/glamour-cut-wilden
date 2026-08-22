"use client";
import { useState } from "react";

type MapEmbedProps = { directionsUrl: string; embedUrl: string; title: string };

export default function MapEmbed({ directionsUrl, embedUrl, title }: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const canLoadMap = Boolean(embedUrl);
  if (isLoaded && canLoadMap) return <div className="map-embed map-embed-loaded"><iframe title={title} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={directionsUrl || "#kartenhinweis"} target={directionsUrl ? "_blank" : undefined} rel={directionsUrl ? "noreferrer" : undefined}>Route öffnen <span aria-hidden="true">↗</span></a></div>;
  return <div className="map-consent-card" id="kartenhinweis"><div><span className="map-pin" aria-hidden="true">⌖</span><p className="section-kicker">Adresse vor Kartenansicht</p><strong>Anfahrt zum Salon.</strong><p>Adresse und Route bleiben sichtbar. Die Kartenansicht wird erst nach einer bewussten Zustimmung geladen; vorher werden keine Kartendaten angefragt.</p></div><button className="button button-light" type="button" disabled={!canLoadMap} onClick={() => setIsLoaded(true)}>{canLoadMap ? "Karte laden" : "Karte folgt nach Freigabe"}</button></div>;
}
