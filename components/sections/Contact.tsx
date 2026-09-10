import { contact } from "@/content/site";
import { ContactForm } from "@/components/ui/ContactForm";

export function Contact() {
  return (
    <section className="contact section" id="contato" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">{contact.title}</h2>
          <p>{contact.description}</p>
          <p className="contact__note">
            A primeira mensagem serve para entender o contexto. Escopo, prazo e investimento vêm depois.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
