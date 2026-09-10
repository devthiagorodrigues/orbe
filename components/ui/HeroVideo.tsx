"use client";

import { useSyncExternalStore } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
};

function canPlayHeroVideo() {
  if (typeof window === "undefined") return false;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  const saveData = Boolean(nav.connection?.saveData);

  return !reducedMotion && !saveData;
}

function subscribeToMotionPreference(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

export function HeroVideo({ src, poster }: HeroVideoProps) {
  const shouldPlay = useSyncExternalStore(
    subscribeToMotionPreference,
    canPlayHeroVideo,
    () => false
  );

  return (
    <div className="hero-media" aria-hidden="true">
      <img
        className="hero-media__poster"
        src={poster}
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      {shouldPlay ? (
        <video
          className="hero-media__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          disablePictureInPicture
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
      <div className="hero-media__veil" />
    </div>
  );
}
