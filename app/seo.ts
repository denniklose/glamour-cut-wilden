import type { Metadata } from "next";
import { salonConfig, type RouteKey } from "../config/salon";

export function pageMetadata(route: RouteKey): Metadata {
  const page = salonConfig.seo.pages[route];
  const canonical = page.canonical || undefined;
  return {
    title: page.title,
    description: page.description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: page.title,
      description: page.description,
      ...(canonical ? { url: canonical } : {}),
      type: "website",
      locale: salonConfig.identity.locale.replace("-", "_"),
    },
  };
}
