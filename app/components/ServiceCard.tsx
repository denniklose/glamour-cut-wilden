type ServiceCardProps = { number: string; title: string; copy: string; href: string };

export default function ServiceCard({ number, title, copy, href }: ServiceCardProps) {
  return <article className="service-row"><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href={href}>Auswählen <span aria-hidden="true">↗</span></a></article>;
}
