const defaultHeroVideo =
  "https://res.cloudinary.com/pwsxcwoz/video/upload/v1789067607/Architectural_scene_video_loop_1080p_20260910161248.mp4";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Orbe Arquitetura",
  description:
    "Arquitetura e interiores pensados entre estética, uso e identidade.",
  url: rawUrl.replace(/\/$/, ""),
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true",
  heroVideoUrl:
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || defaultHeroVideo,
  heroPoster: "/images/orbe/casa-horizonte/hero.webp",
  ogImage: "/og/orbe-og.jpg",
  conceptualDisclosure: "Projeto conceitual desenvolvido pela Thiago Labs.",
  studioUrl: "https://thiagolabs.com.br"
} as const;
