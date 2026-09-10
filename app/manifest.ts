import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orbe Arquitetura",
    short_name: "Orbe",
    description:
      "Arquitetura e interiores pensados entre estética, uso e identidade.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2EFE9",
    theme_color: "#F2EFE9",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
