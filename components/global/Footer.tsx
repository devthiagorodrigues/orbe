import Image from "next/image";
import { navigation } from "@/content/site";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
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

        <p className="site-footer__credit">
          Desenvolvido pela{" "}
          <a href={siteConfig.studioUrl} target="_blank" rel="noreferrer">
            Thiago Labs
          </a>
        </p>
      </div>
    </footer>
  );
}
