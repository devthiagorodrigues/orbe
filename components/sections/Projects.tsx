import Image from "next/image";
import { projects } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

export function Projects() {
  return (
    <section className="projects section" id="projetos" aria-labelledby="projects-title">
      <div className="container projects__intro">
        <p className="eyebrow">Portfólio</p>
        <h2 id="projects-title">Projetos</h2>
        <p>
          Cada espaço nasce de um encontro próprio entre uso, matéria, luz e contexto.
        </p>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <article
            className={`project project--${project.variant}`}
            key={project.slug}
            aria-labelledby={`${project.slug}-title`}
          >
            <div className="container project__meta">
              <div>
                <p className="project__index">{String(index + 1).padStart(2, "0")}</p>
                <h3 id={`${project.slug}-title`}>{project.name}</h3>
              </div>
              <p className="project__type">
                {project.category} · {project.location}
              </p>
              <p className="project__description">{project.description}</p>
            </div>

            <div className="container project__gallery">
              <p className="project__note">{project.note}</p>
              {project.images.map((image, imageIndex) => (
                <figure
                  className={`project__image project__image--${imageIndex + 1} project__image--${image.orientation}`}
                  key={image.src}
                >
                  <span className="project__frame">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading={project.slug === "studio-alba" ? "eager" : "lazy"}
                      sizes={
                        imageIndex === 0
                          ? "(max-width: 767px) 100vw, (max-width: 1023px) 76vw, 68vw"
                          : "(max-width: 767px) 100vw, (max-width: 1023px) 52vw, 38vw"
                      }
                    />
                  </span>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="container projects__outro">
        <TextLink href="#processo">Conheça nosso processo</TextLink>
        <p className="projects__disclosure">Projetos apresentados neste estudo são conceituais.</p>
      </div>
    </section>
  );
}
