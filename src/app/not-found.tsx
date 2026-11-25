import Link from "next/link";
import { LegalRow } from "./LegalRow";
import "./page.css";

/** 404 в стиле лендинга: одна кнопка на главную (на сайте одна страница) */
export default function NotFound() {
  return (
    <>
      <main className="end" style={{ minHeight: "calc(100vh - 80px)", display: "grid", placeItems: "center" }}>
        <div className="wrap">
          <span className="floating-trust">✦ AI PRO SCHOOL</span>
          <h2>Такой страницы <span className="gradient-text">нет</span></h2>
          <p>Возможно, ссылка устарела. Вся информация о практикуме по AI-видео — на главной.</p>
          <Link className="btn btn-primary" href="/">На главную <span className="btn-arrow">↗</span></Link>
        </div>
      </main>
      <footer className="footer">
        <LegalRow />
      </footer>
    </>
  );
}
