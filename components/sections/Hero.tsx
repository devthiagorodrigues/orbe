import { hero } from "@/content/site";
import { siteConfig } from "@/lib/site-config";
import { HeroVideo } from "@/components/ui/HeroVideo";

export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <HeroVideo src={siteConfig.heroVideoUrl} poster={siteConfig.heroPoster} />
      <div className="container hero__content">
        <div className="hero__copy">
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero__description">{hero.description}</p>
          <a className="hero__cta" href={hero.cta.href}>{hero.cta.label}</a>
        </div>
      </div>
    </section>
  );
}
