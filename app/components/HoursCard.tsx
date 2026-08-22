import { hours, site } from "../site-data";

export default function HoursCard() {
  return <div className="hours-panel" aria-label="Öffnungszeiten"><div className="hours-title"><span>Öffnungszeiten</span><small>{site.name}</small></div><dl>{hours.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.time}</dd></div>)}</dl><p className="hours-note">{site.name} · {site.address[1]}<br />{site.phoneDisplay || "Telefonkontakt wird ergänzt"}<br />{site.email || "E-Mail auf Wunsch ergänzen"}</p></div>;
}
