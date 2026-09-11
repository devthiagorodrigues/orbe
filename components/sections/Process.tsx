import { processSteps } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

export function Process() {
  return (
    <section className="process section" id="processo" aria-labelledby="process-title">
      <div className="container process__grid">
        <div className="process__intro">
          <h2 id="process-title">Do entendimento à matéria.</h2>
          <p>
            Cinco etapas organizam decisões sem simplificar artificialmente a
            complexidade de um projeto.
          </p>
          <TextLink href="#contato">Inicie uma conversa</TextLink>
        </div>

        <ol className="process__steps">
          {processSteps.map((step) => (
            <li className="process-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.name}</h3>
                <p>{step.description}</p>
                <p className="process-step__outcome">{step.outcome}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
