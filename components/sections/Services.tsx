import { services } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

export function Services() {
  return (
    <section className="services section" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <div className="services__heading">
          <div className="services__title">
            <h2 id="services-title">Da arquitetura ao interior, um mesmo pensamento.</h2>
            <p>
              Cada frente muda em escopo, mas parte da mesma lógica: entender uso,
              contexto e identidade antes de definir forma.
            </p>
          </div>
        </div>

        <div className="services__list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-item__number">{service.number}</span>
              <h3>{service.name}</h3>
              <div className="service-item__copy">
                <p>{service.description}</p>
                <p className="service-item__fit">{service.fit}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="services__cta">
          <p>Não é preciso chegar com todas as respostas. O primeiro passo é entender o contexto.</p>
          <TextLink href="#contato">Fale sobre seu projeto</TextLink>
        </div>
      </div>
    </section>
  );
}
