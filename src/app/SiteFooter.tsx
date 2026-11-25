import Link from "next/link";
import { ArrowRight, Instagram, MessageCircle, Youtube } from "lucide-react";
import { getFooterData } from "@/data/public";
import { SIGNUP_URL } from "./signup";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
  </svg>
);
const socialIcons = { instagram: Instagram, tiktok: TikTokIcon, youtube: Youtube } as const;

/** Разделы страницы для колонок подвала; адреса с «/», чтобы работали и со страницы 404 */
const columns = [
  {
    title: "Практикум",
    links: [
      { label: "Примеры роликов", href: "/#examples" },
      { label: "Результаты учеников", href: "/#results" },
      { label: "Отзывы", href: "/#stories" },
      { label: "Программа", href: "/#program" },
      { label: "Стоимость", href: "/#price" },
    ],
  },
  {
    title: "Ещё",
    links: [
      { label: "Эксперт практикума", href: "/#mentor" },
      { label: "Вопросы и ответы", href: "/#faq" },
      { label: "Наверх ↑", href: "/#top" },
    ],
  },
];

/**
 * Подвал в стиле прежнего сайта: тёмная скруглённая карточка, логотип с описанием, круглые кнопки WhatsApp и соцсетей,
 * колонки ссылок, телефон, реквизиты ТОО со ссылками на документы (обязательны на каждой странице - scripts/check-legal.mjs)
 * и гигантская градиентная надпись «AI Pro School» внизу.
 */
export function SiteFooter() {
  const f = getFooterData();
  const pills = [
    ...(f.contacts.whatsapp ? [{ id: "whatsapp", label: "WhatsApp", href: f.contacts.whatsapp, Icon: MessageCircle, brand: true }] : []),
    ...f.contacts.socials.map((s) => ({ id: s.id, label: s.label, href: s.href, Icon: socialIcons[s.id], brand: false })),
  ];
  const legal = f.legal;

  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-footer-card">
        <div className="site-footer-top">
          <div className="site-footer-about">
            <Link className="brand" href="/#top" aria-label="AI Pro School — наверх">
              <span className="brand-icon">A</span>
              <span className="brand-name">AI Pro <span className="gradient-text">School</span></span>
            </Link>
            <p>Результаты обучения индивидуальны. Показанные охваты относятся к отдельным ученическим работам и не являются гарантией. Регистрация и обработка данных осуществляются на действующем сайте AI Pro School.</p>
            {pills.length > 0 && (
              <div className="site-footer-pills">
                {pills.map(({ id, label, href, Icon, brand }) => (
                  <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={brand ? "is-brand" : undefined}>
                    <Icon aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="site-footer-cols">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title} className="site-footer-col">
                <h3>{col.title}</h3>
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href} className="site-footer-link">
                    <ArrowRight aria-hidden />
                    <span>{l.label}</span>
                  </Link>
                ))}
              </nav>
            ))}
            <div className="site-footer-col">
              <h3>Связаться</h3>
              <a className="site-footer-link" data-signup href={SIGNUP_URL}>
                <ArrowRight aria-hidden />
                <span>Записаться · 9 900 ₸</span>
              </a>
              {f.contacts.whatsapp && (
                <a className="site-footer-link" href={f.contacts.whatsapp} target="_blank" rel="noopener noreferrer">
                  <ArrowRight aria-hidden />
                  <span>Написать в WhatsApp</span>
                </a>
              )}
              {f.contacts.phone && (
                <a className="site-footer-phone" href={f.contacts.phone.href}>
                  {f.contacts.phone.label.replace(/\s/g, " ")}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="site-footer-legal">
          <span>© {legal.copyrightYear} {legal.legalName} · <span className="nowrap">БИН {legal.bin}</span></span>
          {legal.docs.map((d) => (
            <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer">{d.title}</a>
          ))}
        </div>

        <div className="site-footer-wordmark" aria-hidden>AI Pro School</div>
      </div>
    </footer>
  );
}
