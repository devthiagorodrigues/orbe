import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <a className={`text-link ${className}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className="text-link__arrow">→</span>
    </a>
  );
}
