import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Практикум по AI-видео — AI Pro School";

export default function Image() {
  return renderOg({
    title: "Практикум по AI-видео с телефона",
    subtitle: "2 эфира, 3 дня обратной связи, доступ к записям 14 дней. участие — 9 900 тенге",
    eyebrow: "Практический курс · с нуля · онлайн",
  });
}
