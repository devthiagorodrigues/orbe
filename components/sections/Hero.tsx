import { hero } from "@/content/site";
import { siteConfig } from "@/lib/site-config";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { TextLink } from "@/components/ui/TextLink";

export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <HeroVideo src={siteConfig.heroVideoUrl} poster={siteConfig.heroPoster} />
      <div className="container hero__content">
        <div className="hero__copy">
          <p className="eyebrow">Arquitetura · Interiores · São Paulo</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero__description">{hero.description}</p>
          <TextLink href={hero.cta.href}>{hero.cta.label}</TextLink>
        </div>
        <a className="hero__cue" href="#projetos" aria-label="Ir para Projetos">
          <span>Projetos</span>
        </a>
      </div>
    </section>
  );
}
