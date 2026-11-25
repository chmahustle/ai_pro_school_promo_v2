import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/site";

/** На сайте одна страница - лендинг практикума */
export default function sitemap(): MetadataRoute.Sitemap {
  // На тестовом домене карта сайта пустая
  if (!IS_INDEXABLE) return [];
  return [{ url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
