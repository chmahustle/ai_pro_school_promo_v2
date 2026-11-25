import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/layout/Analytics";
import { IS_INDEXABLE, SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Практикум по AI-видео — AI Pro School", template: `%s — ${site.name}` },
  applicationName: site.name,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  // OG-картинка - из src/app/opengraph-image.tsx (file-based)
  openGraph: { type: "website", siteName: site.name, locale: site.locale },
  twitter: { card: "summary_large_image" },
  robots: { index: IS_INDEXABLE, follow: IS_INDEXABLE },
};

export const viewport: Viewport = {
  themeColor: "#f6f6f9",
  width: "device-width",
  initialScale: 1,
};

/**
 * Сайт - одна страница (лендинг практикума, src/app/page.tsx) со своими стилями из макета ai_pro_school_ready.html.
 * Общие стили Tailwind сюда не подключаются: их базовые сбросы меняли бы отступы макета.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
