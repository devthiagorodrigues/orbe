"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const pageRegions = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer")
    );
    const previousAriaHidden = pageRegions.map((region) =>
      region.getAttribute("aria-hidden")
    );

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    for (const region of pageRegions) {
      region.inert = true;
      region.setAttribute("aria-hidden", "true");
    }

    return () => {
      document.body.style.overflow = previous;
      pageRegions.forEach((region, index) => {
        region.inert = false;
        const ariaHidden = previousAriaHidden[index];

        if (ariaHidden === null) {
          region.removeAttribute("aria-hidden");
        } else {
          region.setAttribute("aria-hidden", ariaHidden);
        }
      });
      menuButton?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const menu = mobileMenuRef.current;
      if (!menu) return;

      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a
        className="site-header__brand"
        href="#inicio"
        aria-label="Orbe Arquitetura, início"
        tabIndex={open ? -1 : undefined}
      >
        <Image
          className="site-header__logo site-header__logo--light"
          src="/brand/orbe-logo-horizontal-ivory.png"
          alt=""
          width="720"
          height="216"
        />
        <Image
          className="site-header__logo site-header__logo--dark"
          src="/brand/orbe-logo-horizontal-ink.png"
          alt=""
          width="720"
          height="213"
        />
      </a>

      <nav className="site-header__nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <button
        ref={menuButtonRef}
        className="site-header__menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        tabIndex={open ? -1 : undefined}
        onClick={openMenu}
      >
        Menu
      </button>

      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <div className="mobile-menu__top">
          <Image src="/brand/orbe-logo-horizontal-ivory.png" alt="" width="720" height="216" />
          <button ref={closeButtonRef} type="button" onClick={closeMenu}>Fechar</button>
        </div>
        <nav aria-label="Navegação mobile" className="mobile-menu__nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
