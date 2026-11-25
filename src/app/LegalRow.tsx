import { getLegalInfo } from "@/data/public";

/** Реквизиты ТОО и ссылки на документы - обязательны на каждой странице (scripts/check-legal.mjs) */
export function LegalRow() {
  const legal = getLegalInfo();
  return (
    <div className="wrap footer-legal">
      <span>© {legal.copyrightYear} {legal.legalName} · БИН {legal.bin}</span>
      {legal.docs.map((d) => (
        <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer">{d.title}</a>
      ))}
    </div>
  );
}
