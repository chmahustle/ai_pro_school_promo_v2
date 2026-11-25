/* eslint-disable @next/next/no-img-element -- картинки уже сжаты в webp под нужный размер, вёрстка как в макете (ai_pro_school_ready.html) */
import type { Metadata } from "next";
import { PageEnhancer } from "./PageEnhancer";
import { SiteFooter } from "./SiteFooter";
import { SIGNUP_URL } from "./signup";
import "./page.css";

/** Единственная страница сайта: лендинг практикума по AI-видео. Блоки, тексты и стили - из ai_pro_school_ready.html. */
export const metadata: Metadata = {
  title: { absolute: "Практикум по AI-видео — AI Pro School" },
  description: "AI Pro School: практикум по созданию AI-видео с телефона. 2 эфира, 3 дня обратной связи, доступ к записям 14 дней. Участие — 9 900 ₸.",
  alternates: { canonical: "/" },
};

const IMG = "/practicum";

const examples = [
  { src: `${IMG}/example-1.webp`, alt: "Анимация девушки на диване", note: "Анимация", caption: "Пример AI-анимации · изображение из предоставленного превью" },
  { src: `${IMG}/example-2.webp`, alt: "Героиня в лифте", note: "Персонажи", caption: "Пример AI-видео · изображение из предоставленного превью" },
  { src: `${IMG}/example-3.webp`, alt: "Анимированная героиня с макияжем", note: "Beauty / Reels", caption: "Пример AI-анимации · изображение из предоставленного превью" },
  { src: `${IMG}/example-4.webp`, alt: "Анимация матери с малышом", note: "Сторителлинг", caption: "Пример AI-анимации · изображение из предоставленного превью" },
];

const results = [
  { src: `${IMG}/result-1.webp`, alt: "Ролик «Келинка София» — 1,9 млн просмотров", views: "1,9 млн", viewsLong: "1,9 миллиона" },
  { src: `${IMG}/result-2.webp`, alt: "Ролик с анимированной девушкой — 2 млн просмотров", views: "2 млн", viewsLong: "2 миллиона" },
  { src: `${IMG}/result-3.webp`, alt: "Анимация мальчика — 3,1 млн просмотров", views: "3,1 млн", viewsLong: "3,1 миллиона" },
  { src: `${IMG}/result-4.webp`, alt: "Анимация с весами — 3,1 млн просмотров", views: "3,1 млн", viewsLong: "3,1 миллиона" },
  { src: `${IMG}/result-5.webp`, alt: "Анимация комнаты — 6,2 млн просмотров", views: "6,2 млн", viewsLong: "6,2 миллиона" },
];

const reviews = [
  { src: `${IMG}/review-1.webp`, alt: "Статистика Reels: охваты и отзыв о подписчиках", caption: "Скриншот статистики Reels и сообщения о новых подписчиках", label: "Увеличить скриншот статистики Reels" },
  { src: `${IMG}/review-2.webp`, alt: "Отзыв ученицы о создании мультфильмов и росте просмотров", caption: "Сообщение ученицы о создании мультфильмов и статистика Reels", label: "Увеличить отзыв ученицы о создании мультфильмов" },
  { src: `${IMG}/review-3.webp`, alt: "Отзыв и статистика видеоролика с 50 618 просмотрами", caption: "Отзыв участника и пример статистики просмотров", label: "Увеличить скриншот результата участника" },
  { src: `${IMG}/review-4.webp`, alt: "Текстовый отзыв ученицы о роликах и практикуме", caption: "Сообщение участницы обучающего чата о результатах", label: "Увеличить отзыв ученицы" },
];

const lessons = [
  {
    n: "ЭФИР 01",
    title: "Идея, сценарий и кадры",
    items: ["Придумываем концепцию в ChatGPT", "Учимся писать промпты для генерации", "Создаём изображения в Nano Banana", "Готовим кадры для анимации"],
    result: "сценарий и изображения для первого AI-ролика.",
  },
  {
    n: "ЭФИР 02",
    title: "Анимация и готовое видео",
    items: ["Оживляем изображения с помощью Grok", "Собираем фрагменты в CapCut", "Добавляем музыку и финальные детали", "Разбираем возможные пути поиска заказов"],
    result: "первый готовый ролик и понимание дальнейших шагов.",
  },
];

const faq = [
  { q: "Подойдёт ли мне практикум без опыта?", a: "Да. Мы начинаем с базовых этапов создания AI-ролика и показываем работу с инструментами пошагово." },
  { q: "Можно ли учиться с телефона?", a: "Да, для первых шагов достаточно смартфона. Набор функций зависит от сервиса, устройства и региона." },
  { q: "Нужны ли платные подписки?", a: "На практикуме рассматриваются доступные возможности нейросетей, включая бесплатные лимиты. У сервисов могут быть платные функции и ограничения." },
  { q: "Что делать, если я пропущу эфир?", a: "Записи двух занятий доступны в течение 14 дней." },
  { q: "Смогу ли я получать доход после обучения?", a: "Вы получите базовый навык и узнаете о вариантах поиска заказов, но конкретный доход или число клиентов не гарантируются." },
];

function Arrows({ rail, prev, next }: { rail: string; prev: string; next: string }) {
  return (
    <div className="arrows">
      <button className="round-arrow" type="button" data-prev={rail} aria-label={prev}>‹</button>
      <button className="round-arrow" type="button" data-next={rail} aria-label={next}>›</button>
    </div>
  );
}

function SectionHeader({ label, children, description }: { label?: string; children: React.ReactNode; description: string }) {
  return (
    <div className="section-header">
      <span className="gradient-rule" />
      <div>
        {label && <p className="section-label">{label}</p>}
        <h2 className="section-headline">{children}</h2>
        <p className="section-description">{description}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-row">
          <a className="brand" href="#top" aria-label="AI Pro School — наверх">
            <span className="brand-icon">A</span>
            <span className="brand-name">AI Pro School</span>
            <span className="brand-divider" />
            <span className="brand-small">Практикум по созданию<br />AI-видео с телефона</span>
          </a>
          <nav className="nav-items" aria-label="Основное меню">
            <span className="nav-indicator" aria-hidden />
            <a href="#examples">Примеры</a>
            <a href="#results">Результаты</a>
            <a href="#stories">Отзывы</a>
            <a href="#program">Программа</a>
            <a href="#price">Стоимость</a>
          </nav>
          <a className="btn btn-blue" data-signup href={SIGNUP_URL}>Записаться <span className="btn-arrow">↗</span></a>
          <button className="menu" type="button" id="menuToggle" aria-label="Открыть меню" aria-controls="mobileMenu" aria-expanded="false">☰</button>
        </div>
        <nav className="mobile-menu" id="mobileMenu" aria-label="Меню для мобильных устройств">
          <a href="#examples">Примеры роликов</a>
          <a href="#results">Результаты учеников</a>
          <a href="#stories">Отзывы</a>
          <a href="#program">Программа</a>
          <a href="#price">Стоимость</a>
          <a className="btn btn-primary" data-signup href={SIGNUP_URL}>Записаться · 9 900 ₸ ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="bg-grid" aria-hidden />
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" />Практический курс · с нуля · онлайн</div>
              <h1>
                Освойте <span className="gradient-text">AI-видео</span> с телефона и узнайте, как получать доход <span className="money gradient-text">до 300 000 ₸</span> в месяц
              </h1>
              <p className="hero-lead">
                За <strong>2 практических эфира</strong> создадите свой первый AI-ролик, освоите понятные инструменты и узнаете, где искать потенциальных заказчиков. <strong>Без опыта и сложного монтажа.</strong>
              </p>
              <div className="hero-chips">
                <span className="chip"><span>✓</span>Обучение с нуля</span>
                <span className="chip"><span>✓</span>Достаточно телефона</span>
                <span className="chip"><span>✓</span>Готовый ролик на практике</span>
              </div>
              <div className="hero-cta">
                <a className="btn btn-primary" data-signup href={SIGNUP_URL}>Хочу на практикум <span className="btn-arrow">↗</span></a>
                <div className="hero-price"><small>Стоимость участия</small>9 900 ₸</div>
              </div>
              <p className="hero-disclaimer">Доход до 300 000 ₸ — возможный ориентир, а не обещание или типичный результат. Фактический доход зависит от навыков, заказов и объёма работы.</p>
            </div>
            <div className="hero-art" aria-label="Примеры AI-видео">
              <div className="halo" />
              <div className="hero-media hero-card-2"><img src={`${IMG}/example-2.webp`} alt="Пример AI-видео: персонаж в лифте" fetchPriority="high" /></div>
              <div className="hero-media hero-card-1"><img src={`${IMG}/result-3.webp`} alt="AI-анимация: улыбающийся персонаж" fetchPriority="high" /></div>
              <div className="hero-media hero-card-3"><img src={`${IMG}/example-3.webp`} alt="Пример AI-видео: анимированная героиня" fetchPriority="high" /></div>
              <div className="art-bubble top"><span className="em">✦</span>От идеи до видео</div>
              <div className="art-bubble bottom"><span className="em">▶</span>Смотрите результаты учеников</div>
            </div>
          </div>
        </section>

        <div className="wrap stat-bento">
          {[
            ["▶", "2 эфира", "по 90 минут"],
            ["✎", "3 дня", "обратной связи"],
            ["◷", "14 дней", "доступ к записям"],
            ["₸", "9 900 ₸", "полная стоимость"],
          ].map(([icon, value, label]) => (
            <div key={value} className="stat-tile">
              <span className="stat-icon" aria-hidden>{icon}</span>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <section className="intro-section" id="examples">
          <div className="wrap">
            <div className="panel">
              <p className="section-label">01 / Начните с вдохновения</p>
              <SectionHeader description="Посмотрите примеры AI-видео, которые можно создавать с помощью доступных нейросетей. На практикуме вы разберёте процесс по шагам.">
                Какие ролики вы научитесь создавать <span className="gradient-text">со своего телефона</span>
              </SectionHeader>
              <div className="carousel-frame">
                <div className="carousel-rail example-rail" id="examplesRail">
                  {examples.map((e, i) => (
                    <button key={e.src} className="media-tile" type="button" data-lightbox={e.src} data-caption={e.caption} aria-label={`Увеличить пример AI-видео №${i + 1}`}>
                      <img src={e.src} alt={e.alt} loading="lazy" />
                      <span className="tile-smallnote">{e.note}</span>
                      <span className="media-play">↗</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="carousel-controls">
                <span className="carousel-hint">Листайте примеры вбок · по нажатию откроется изображение</span>
                <Arrows rail="examplesRail" prev="Предыдущие примеры" next="Следующие примеры" />
              </div>
            </div>
          </div>
        </section>

        <section className="proof-section" id="results">
          <div className="wrap">
            <div className="panel">
              <p className="section-label">02 / Работы наших учеников</p>
              <SectionHeader description="Ролики учеников AI Pro School набирают просмотры в социальных сетях. Вот примеры, которыми поделились участники.">
                Результаты и охваты <span className="gradient-text">учеников</span>
              </SectionHeader>
              <div className="carousel-rail" id="resultsRail">
                {results.map((r) => (
                  <button key={r.src} className="media-tile" type="button" data-lightbox={r.src} data-caption={`Пример результата ученика: ${r.views} просмотров`} aria-label={`Открыть пример результата: ${r.viewsLong} просмотров`}>
                    <img src={r.src} alt={r.alt} loading="lazy" />
                    <span className="tile-badge">◉ {r.views}</span>
                  </button>
                ))}
              </div>
              <div className="carousel-controls">
                <span className="carousel-hint">Реальные изображения из предоставленных материалов</span>
                <Arrows rail="resultsRail" prev="Предыдущие ролики" next="Следующие ролики" />
              </div>
              <div className="section-after">
                <span className="muted-statement">Число просмотров относится к отдельным примерам и не гарантирует аналогичных охватов после обучения.</span>
                <a className="btn btn-outline" data-signup href={SIGNUP_URL}>Хочу научиться так же <span className="btn-arrow">↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="stories">
          <div className="wrap">
            <div className="panel">
              <p className="section-label">03 / Социальное доказательство</p>
              <SectionHeader description="Статистика из аккаунтов и сообщения участников практикума. Смотрите оригинальные скриншоты.">
                Как залетают рилсы <span className="gradient-text">наших учеников</span>
              </SectionHeader>
              <div className="carousel-rail review-rail" id="reviewsRail">
                {reviews.map((r) => (
                  <button key={r.src} className="review-card" type="button" data-lightbox={r.src} data-caption={r.caption} aria-label={r.label}>
                    <img src={r.src} loading="lazy" alt={r.alt} />
                  </button>
                ))}
              </div>
              <div className="carousel-controls">
                <span className="carousel-hint">Нажмите на скриншот, чтобы увеличить</span>
                <Arrows rail="reviewsRail" prev="Предыдущие отзывы" next="Следующие отзывы" />
              </div>
              <div className="center-cta">
                <a className="btn btn-primary" data-signup href={SIGNUP_URL}>Хочу также <span className="btn-arrow">↗</span></a>
                <span className="muted-statement">Отзывы и результаты индивидуальны. Обучение не гарантирует конкретных просмотров или заказов.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark-band" id="income">
          <div className="wrap">
            <div className="section-header">
              <span className="gradient-rule" />
              <div>
                <p className="section-label" style={{ color: "#d1befa" }}>04 / Применение навыка</p>
                <h2 className="section-headline">
                  AI-видео — не только творчество.<br />
                  <span className="gradient-text">Это услуга, которую можно предлагать клиентам</span>
                </h2>
                <p className="section-description">Брендам, экспертам и предпринимателям постоянно нужен видеоконтент. На практикуме вы разберёте основы создания AI-роликов и варианты применения этого навыка.</p>
              </div>
            </div>
            <div className="opportunities">
              <div className="opportunity-panel">
                <h3>Что узнаете на практикуме</h3>
                <div className="opportunity-list">
                  {[
                    "Как создавать примеры работ для собственного портфолио",
                    "Какие форматы AI-видео можно предложить бизнесу",
                    "Где искать первых потенциальных заказчиков",
                    "Как развивать навык AI-креатора после практикума",
                  ].map((t) => (
                    <div key={t} className="opportunity-item"><i>✦</i><span>{t}</span></div>
                  ))}
                </div>
              </div>
              <div className="opportunity-card">
                <span>Где востребован AI-контент</span>
                <h3>Один навык.<br />Разные задачи.</h3>
                {[
                  ["Интернет-магазины", "Видео товаров"],
                  ["Эксперты и блогеры", "Reels и Shorts"],
                  ["Предприниматели", "Креативы для рекламы"],
                  ["Частные клиенты", "Анимация и поздравления"],
                ].map(([who, what]) => (
                  <div key={who} className="service"><span>{who}</span><strong>{what}</strong></div>
                ))}
                <p className="dark-note">Возможность получать доход не означает гарантии заказов. Результаты зависят от практики, спроса и работы с клиентами.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="easy">
          <div className="wrap">
            <SectionHeader label="05 / Всё по шагам" description="Вместо десятков случайных уроков — понятный процесс, который вы сможете повторять самостоятельно.">
              Первый AI-ролик с нуля. <span className="gradient-text">Без хаоса и сложной теории</span>
            </SectionHeader>
            <div className="simple-list">
              {[
                ["✎", "Придумайте идею", "Составьте сценарий и промпты с помощью ChatGPT."],
                ["✦", "Создайте кадры", "Генерируйте изображения и персонажей в Nano Banana."],
                ["▶", "Соберите ролик", "Оживите сцены в Grok и соедините их в CapCut."],
              ].map(([icon, title, text]) => (
                <div key={title} className="simple-card"><div className="icon-grad">{icon}</div><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="program" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <SectionHeader label="06 / Программа" description="Каждое занятие заканчивается практическим результатом.">
              2 практических эфира — <span className="gradient-text">от идеи до готового видео</span>
            </SectionHeader>
            <div className="program-grid">
              {lessons.map((l) => (
                <div key={l.n} className="lesson">
                  <div className="lesson-header"><b>{l.n}</b><span>90 минут</span></div>
                  <div className="lesson-body">
                    <h3>{l.title}</h3>
                    <ul>{l.items.map((it) => <li key={it}>{it}</li>)}</ul>
                    <div className="lesson-result"><strong>Результат:</strong> {l.result}</div>
                  </div>
                </div>
              ))}
              <div className="mentor" id="mentor">
                <div className="mentor-art"><b>AI</b><small>PRO SCHOOL</small></div>
                <div>
                  <p className="section-label">Эксперт практикума</p>
                  <h3>Надира Батырбаева</h3>
                  <p>Вместо одной теории — практика от первого запроса в нейросеть до собранного ролика. Вы сможете задать вопросы в течение 3 дней обратной связи, а записи уроков будут доступны 14 дней.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section price-section" id="price">
          <div className="bg-grid" aria-hidden />
          <div className="wrap price-grid">
            <div className="price-copy">
              <p className="section-label">07 / Участие</p>
              <h2 className="section-headline">Освойте AI-видео.<br /><span className="gradient-text">Начните с первого ролика.</span></h2>
              <p>Практикум для тех, кто хочет попробовать новые инструменты, создать собственный контент и узнать о возможностях применения навыка.</p>
              <div className="checks">
                {["2 эфира по 90 минут с практикой", "ChatGPT, Nano Banana, Grok и CapCut", "3 дня обратной связи", "Записи на 14 дней", "Идеи для портфолио и поиска заказчиков"].map((t) => (
                  <div key={t}><span>✓</span>{t}</div>
                ))}
              </div>
            </div>
            <div className="price-box">
              <span className="tag">ОНЛАЙН · ДЛЯ НОВИЧКОВ</span>
              <h3>Практикум по AI-видео</h3>
              <div className="price-number">9 900 ₸</div>
              <p>Получите структуру обучения, практику и обратную связь. Для старта достаточно смартфона; у отдельных AI-сервисов могут быть лимиты бесплатного использования.</p>
              <a className="btn btn-primary" data-signup href={SIGNUP_URL}>Записаться на практикум <span className="btn-arrow">↗</span></a>
              <div className="small">Кнопка ведёт на действующую страницу записи AI Pro School</div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap faq-layout">
            <div>
              <p className="section-label">08 / Отвечаем на вопросы</p>
              <h2 className="section-headline">Всё, что вы хотели <span className="gradient-text">уточнить</span></h2>
              <p className="section-description">Никаких сложных требований на старте — разбираем процесс шаг за шагом.</p>
            </div>
            <div>
              {faq.map((f) => (
                <details key={f.q} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="end" id="enroll">
          <div className="bg-grid" aria-hidden />
          <div className="wrap">
            <span className="floating-trust">✦ AI PRO SCHOOL · ПРАКТИКУМ</span>
            <h2>Ваш первый AI-ролик может стать началом <span className="gradient-text">нового навыка</span></h2>
            <p>Два практических эфира, работа с нейросетями с нуля и поддержка. Попробуйте создавать AI-видео самостоятельно.</p>
            <div className="end-price">Участие — 9 900 ₸</div>
            <a className="btn btn-primary" data-signup href={SIGNUP_URL}>Хочу на практикум <span className="btn-arrow">↗</span></a>
          </div>
        </section>
      </main>

      <SiteFooter />

      <div className="sticky-mobile">
        <div><small>Стоимость практикума</small><strong>9 900 ₸</strong></div>
        <a className="btn btn-primary" data-signup href={SIGNUP_URL}>Записаться ↗</a>
      </div>

      <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Увеличенный просмотр изображения" aria-hidden="true">
        <button className="lightbox-close" id="lightboxClose" aria-label="Закрыть изображение">×</button>
        <img id="lightboxImage" className="lightbox-image" alt="" />
        <div id="lightboxCaption" className="lightbox-caption" />
      </div>

      <PageEnhancer />
    </>
  );
}
