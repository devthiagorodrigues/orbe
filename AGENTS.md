# AGENTS.md — Orbe Arquitetura

## 1. Role

You are developing the Orbe Arquitetura website for Thiago Labs.

Treat this as a production-quality conceptual portfolio project.

## 2. Source hierarchy

Use this authority order:

1. `docs/00-current-scope.md`
2. `docs/plan/04-estrategia.md`
3. `docs/plan/05-conteudo.md`
4. `docs/plan/06-arquitetura.md`
5. `docs/plan/07-direcao-visual.md`
6. `docs/plan/08-design.md`
7. `docs/brand/brand-system.md`
8. `docs/source/01-entrada-orbe-preenchido.md`
9. `docs/source/02-briefing-orbe-preenchido.md`
10. `docs/source/03-ready-to-start-orbe-preenchido.md`

The 01–03 files contain historical references to a multipage scope. Those references are superseded by `docs/00-current-scope.md`.

Do not silently reintroduce the old multipage architecture.

## 3. Hard scope rules

Product: **GO**

The site has exactly **6 content sections**:

1. Hero / Manifesto
2. Projetos
3. Escritório / Abordagem
4. Serviços
5. Processo
6. Contato

Header and Footer are global structures and do not count as content sections.

Do not add:
- project routes;
- CMS;
- blog;
- filters;
- search;
- maps;
- fake WhatsApp;
- fake phone/address;
- testimonials;
- numbers;
- awards;
- professional registrations;
- extra pages.

If a request would expand this scope, flag it before implementation.

## 4. Technology

Use:
- Next.js 16.3.4
- App Router
- React 19.2.8
- TypeScript strict
- npm
- global CSS
- no Tailwind
- no component library unless explicitly approved
- Vercel deployment model
- Vercel Analytics when enabled

Keep the dependency graph small.

## 5. Brand

Concept: **Matéria + Vazio**

Tone:
- precise;
- quiet;
- editorial;
- tactile;
- sophisticated without ostentation;
- contemporary;
- human.

Typography:
- Cabinet Grotesk — primary
- Instrument Serif — editorial
- do not substitute these as a design decision
- actual font files are intentionally not committed here

Palette:
- Ivory `#F2EFE9`
- Ink `#1D1D1B`
- Umber `#403832`
- Stone `#BEB6AC`
- Mineral Grey `#85847F`
- Moss `#687060`
- Oxide `#985F48`

Avoid:
- SaaS cards;
- glassmorphism;
- gratuitous gradients;
- large radii;
- shadows everywhere;
- gold luxury styling;
- generic beige architecture templates.

## 6. Hero

Use the Cloudinary video configured in `lib/site-config.ts`.

Rules:
- autoplay;
- muted;
- loop;
- playsInline;
- no controls;
- no audio UI;
- use Casa Horizonte hero still as poster/fallback;
- respect reduced motion;
- the video is decorative, not content.

Do not replace the approved video without explicit instruction.

## 7. Images

All generated project assets are already optimized into `public/images/orbe`.

Do not:
- invent new project images;
- change filenames without updating `content/site.ts`;
- present conceptual imagery as built work.

Use `next/image` below the Hero and provide accurate `sizes`.

## 8. Copy

Do not invent facts.

Never add:
- fake clients;
- testimonials;
- statistics;
- years of operation;
- CAU registration;
- awards;
- guarantees;
- fixed prices.

The primary CTA is:
**Conheça nossos projetos →**

Conversion CTA:
**Inicie uma conversa →**

## 9. Accessibility

Required:
- one H1;
- correct heading hierarchy;
- skip link;
- visible `focus-visible`;
- keyboard-safe mobile navigation;
- labels for all form fields;
- error association via aria;
- touch targets >= 44px;
- `prefers-reduced-motion`;
- descriptive alt text only for meaningful media.

Do not sacrifice usability for editorial styling.

## 10. Performance

Prioritize:
- no hydration unless interaction requires it;
- Server Components by default;
- hero poster immediately available;
- video never blocks textual content;
- responsive images;
- lazy loading below fold;
- explicit image dimensions;
- minimal JS;
- transform/opacity for motion;
- no scroll-hijacking.

## 11. SEO / conceptual disclosure

The standalone Orbe demo must default to `noindex`.

Only make it indexable after an explicit decision.

The public portfolio context must disclose:
**Projeto conceitual desenvolvido pela Thiago Labs.**

## 12. Development workflow

Before each vertical slice:
1. read the corresponding section in 05–08;
2. implement content and semantics;
3. implement responsive layout;
4. add only necessary motion;
5. validate accessibility;
6. validate performance;
7. run `npm run validate:project`;
8. run typecheck/lint/build when dependencies are installed.

Do not redesign earlier decisions silently.
