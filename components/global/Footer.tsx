import Image from "next/image";
import { navigation } from "@/content/site";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const [disclosureLead, disclosureTail] = siteConfig.conceptualDisclosure.split("Thiago Labs");

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__lead">
          <p className="eyebrow">Orbe Arquitetura</p>
          <h2>Todo projeto começa por uma conversa.</h2>
          <a className="text-link" href="#contato">
            Inicie uma conversa <span className="text-link__arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="site-footer__side">
          <div className="site-footer__brand">
            <Image
              src="/brand/orbe-logo-horizontal-ivory.png"
              alt="Orbe Arquitetura"
              width="720"
              height="216"
            />
          </div>

          <nav className="site-footer__nav" aria-label="Navegação do rodapé">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>São Paulo · Brasil</span>
          <span>
            {disclosureLead}
            <a href={siteConfig.studioUrl} target="_blank" rel="noreferrer">
              Thiago Labs <span aria-hidden="true">↗</span>
            </a>{disclosureTail}
          </span>
        </div>
      </div>
    </footer>
  );
}
