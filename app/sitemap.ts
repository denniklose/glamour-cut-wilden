import type { MetadataRoute } from "next";
import { salonConfig, type RouteKey } from "../config/salon";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.entries(salonConfig.seo.pages) as Array<[RouteKey, (typeof salonConfig.seo.pages)[RouteKey]]>).map(([, page]) => ({ url: page.canonical, lastModified: new Date() }));
}
