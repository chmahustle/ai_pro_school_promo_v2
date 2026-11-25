"use client";

import { useEffect } from "react";
import { SIGNUP_URL, SIGNUP_UTM_CONTENT } from "./signup";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const RAILS = ["examplesRail", "resultsRail", "reviewsRail"];

/**
 * Поведение страницы - тот же скрипт, что в ai_pro_school_ready.html: UTM в ссылках записи, мобильное меню,
 * стрелки каруселей (скрываются, если всё помещается), лайтбокс для картинок. Разметку рендерит сервер, здесь только обработчики.
 */
export function PageEnhancer() {
  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;

    // Ссылки записи: UTM из адреса страницы + utm_content по умолчанию
    document.querySelectorAll<HTMLAnchorElement>("[data-signup]").forEach((link) => {
      try {
        const u = new URL(SIGNUP_URL);
        const incoming = new URLSearchParams(location.search);
        UTM_KEYS.forEach((k) => {
          const v = incoming.get(k);
          if (v !== null) u.searchParams.set(k, v);
        });
        if (!u.searchParams.has("utm_content")) u.searchParams.set("utm_content", SIGNUP_UTM_CONTENT);
        link.href = u.toString();
      } catch {
        link.href = SIGNUP_URL;
      }
    });

    // Мобильное меню
    const menuButton = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuButton && mobileMenu) {
      const setOpen = (open: boolean) => {
        mobileMenu.classList.toggle("open", open);
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.textContent = open ? "×" : "☰";
      };
      menuButton.addEventListener("click", () => setOpen(!mobileMenu.classList.contains("open")), { signal });
      mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false), { signal }));
    }

    // Меню на ПК: белая плашка едет за курсором, без наведения - стоит на разделе, который сейчас на экране
    const navList = document.querySelector<HTMLElement>(".nav-items");
    const indicator = navList?.querySelector<HTMLElement>(".nav-indicator");
    let observer: IntersectionObserver | undefined;
    if (navList && indicator) {
      const links = [...navList.querySelectorAll<HTMLAnchorElement>("a[href^='#']")];
      let active: HTMLAnchorElement | null = null;
      const moveTo = (link: HTMLAnchorElement | null) => {
        if (!link) {
          indicator.style.opacity = "0";
          return;
        }
        indicator.style.width = `${link.offsetWidth}px`;
        indicator.style.transform = `translateX(${link.offsetLeft}px)`;
        indicator.style.opacity = "1";
      };
      links.forEach((link) => link.addEventListener("mouseenter", () => moveTo(link), { signal }));
      navList.addEventListener("mouseleave", () => moveTo(active), { signal });
      window.addEventListener("resize", () => moveTo(active), { passive: true, signal });

      // Раздел «на экране» - тот, что пересекает линию чуть ниже шапки
      const sections = links.map((l) => document.querySelector<HTMLElement>(l.hash)).filter((el): el is HTMLElement => !!el);
      const visible = new Set<Element>();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
          const current = sections.find((s) => visible.has(s));
          const next = current ? (links.find((l) => l.hash === `#${current.id}`) ?? null) : null;
          if (next === active) return;
          active?.classList.remove("is-active");
          next?.classList.add("is-active");
          active = next;
          if (!navList.matches(":hover")) moveTo(active);
        },
        { rootMargin: "-120px 0px -55% 0px" },
      );
      sections.forEach((s) => observer!.observe(s));
    }

    // Стрелки каруселей: шаг - ширина одной карточки плюс зазор
    document.querySelectorAll<HTMLButtonElement>("[data-next],[data-prev]").forEach((button) =>
      button.addEventListener(
        "click",
        () => {
          const id = button.getAttribute("data-next") || button.getAttribute("data-prev");
          const rail = id ? document.getElementById(id) : null;
          const card = rail?.firstElementChild;
          if (!rail || !card) return;
          const amount = card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).gap || "0");
          rail.scrollBy({ left: button.hasAttribute("data-next") ? amount : -amount, behavior: "smooth" });
        },
        { signal },
      ),
    );
    const updateArrowVisibility = () => {
      RAILS.forEach((id) => {
        const rail = document.getElementById(id);
        if (!rail) return;
        const hasOverflow = rail.scrollWidth > rail.clientWidth + 5;
        document.querySelectorAll<HTMLElement>(`[data-prev="${id}"],[data-next="${id}"]`).forEach((btn) => {
          btn.style.display = hasOverflow ? "" : "none";
        });
      });
    };
    window.addEventListener("resize", updateArrowVisibility, { passive: true, signal });
    updateArrowVisibility();

    // Лайтбокс
    const lb = document.getElementById("lightbox");
    const lbImage = document.getElementById("lightboxImage") as HTMLImageElement | null;
    const lbCaption = document.getElementById("lightboxCaption");
    const close = document.getElementById("lightboxClose");
    if (lb && lbImage && lbCaption && close) {
      let previous: HTMLElement | null = null;
      const hide = () => {
        lb.classList.remove("active");
        lb.setAttribute("aria-hidden", "true");
        document.body.classList.remove("locked");
        lbImage.removeAttribute("src");
        previous?.focus();
      };
      document.querySelectorAll<HTMLElement>("[data-lightbox]").forEach((button) =>
        button.addEventListener(
          "click",
          () => {
            previous = button;
            lbImage.src = button.dataset.lightbox ?? "";
            lbImage.alt = button.querySelector("img")?.alt || "Превью";
            lbCaption.textContent = button.dataset.caption || "";
            lb.classList.add("active");
            lb.setAttribute("aria-hidden", "false");
            document.body.classList.add("locked");
            close.focus();
          },
          { signal },
        ),
      );
      close.addEventListener("click", hide, { signal });
      lb.addEventListener("click", (e) => e.target === lb && hide(), { signal });
      document.addEventListener("keydown", (e) => e.key === "Escape" && lb.classList.contains("active") && hide(), { signal });
    }

    return () => {
      ac.abort();
      observer?.disconnect();
    };
  }, []);

  return null;
}
