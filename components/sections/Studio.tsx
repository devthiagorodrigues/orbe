import Image from "next/image";
import { studio } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

export function Studio() {
  return (
    <section className="studio section" id="escritorio" aria-labelledby="studio-title">
      <div className="container studio__grid">
        <div className="studio__heading">
          <h2 id="studio-title">{studio.title}</h2>
        </div>

        <div className="studio__body">
          {studio.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="studio__editorial">{studio.editorialLine}</p>
          <TextLink href="#servicos">Conheça nossos serviços</TextLink>
        </div>

        <div className="studio__principles" aria-label="Princípios da abordagem">
          {studio.principles.map((principle) => (
            <article className="studio-principle" key={principle.name}>
              <h3>{principle.name}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>

        <figure className="studio__material">
          <Image
            src="/images/orbe/casa-horizonte/detail.webp"
            width={896}
            height={1200}
            alt="Detalhe de madeira, concreto, esquadria e piso claro em encontro arquitetônico."
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 34vw"
          />
          <figcaption>{studio.imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
