# Orbe Arquitetura — Development Starter

Starter de desenvolvimento da experiência digital da **Orbe Arquitetura**, projeto conceitual desenvolvido pela Thiago Labs.

## Estado do projeto

A estrutura já contém:

- Next.js 16.3.4 + App Router;
- React 19.2.8;
- TypeScript strict;
- CSS global, sem Tailwind;
- 6 seções do GO;
- conteúdo estratégico/copy já inseridos;
- 4 projetos conceituais;
- 13 imagens geradas e convertidas para WebP;
- Hero em vídeo via Cloudinary;
- fallback/poster do Hero;
- logos e favicon;
- formulário acessível;
- Route Handler de contato;
- modo de desenvolvimento sem envio real;
- opção de integração via Resend REST API;
- metadata;
- Open Graph;
- robots/sitemap condicionais;
- `noindex` por padrão;
- Vercel Analytics;
- tratamento de `prefers-reduced-motion`;
- documentação 01–08;
- Brand System;
- `AGENTS.md` para Codex;
- script de validação de escopo.

## Estrutura

```text
orbe-site-starter/
├── app/
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── global/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   └── Studio.tsx
│   └── ui/
│       ├── ContactForm.tsx
│       ├── HeroVideo.tsx
│       └── TextLink.tsx
├── content/
│   ├── site.config.json
│   └── site.ts
├── docs/
│   ├── 00-current-scope.md
│   ├── brand/
│   ├── plan/
│   └── source/
├── lib/
│   ├── contact.ts
│   └── site-config.ts
├── public/
│   ├── brand/
│   ├── fonts/
│   ├── images/orbe/
│   ├── og/
│   ├── asset-manifest.json
│   └── favicon.ico
├── scripts/
│   └── validate-project.mjs
├── styles/
│   ├── base.css
│   ├── site.css
│   └── tokens.css
├── AGENTS.md
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Arquitetura GO

Exatamente seis seções de conteúdo:

1. Hero / Manifesto
2. Projetos
3. Escritório / Abordagem
4. Serviços
5. Processo
6. Contato

Header e Footer são globais.

## Rodar

```bash
cp .env.example .env.local
npm install
npm run validate:project
npm run dev
```

Depois:

```bash
npm run check
npm run build
```

## Formulário

No `.env.local`:

```text
CONTACT_MODE=log
```

é o modo seguro de desenvolvimento.

Quando o destino real for definido:

```text
CONTACT_MODE=resend
RESEND_API_KEY=...
CONTACT_TO_EMAIL=...
CONTACT_FROM_EMAIL=...
```

Nenhum destinatário foi inventado neste starter.

## Hero

O vídeo oficial já está configurado no Cloudinary.

O componente:
- usa poster local;
- carrega o vídeo apenas após hidratação;
- não reproduz com `prefers-reduced-motion`;
- não reproduz quando `Save-Data` está ativo;
- usa `muted`, `loop`, `playsInline`;
- não possui controles.

## Fontes

Os arquivos de Cabinet Grotesk e Instrument Serif não são distribuídos neste projeto.

Veja:

`public/fonts/README.md`

A identidade tipográfica está registrada e os fallbacks permitem iniciar desenvolvimento imediatamente.

## Indexação

A demo conceitual inicia com:

```text
NEXT_PUBLIC_SITE_INDEXABLE=false
```

Não altere para `true` até existir uma decisão explícita sobre publicação/indexação.

## Codex

Leia primeiro:

`AGENTS.md`

Depois:

`docs/00-current-scope.md`

O arquivo de escopo atual corrige referências antigas a uma arquitetura multipágina.

## Próxima etapa de desenvolvimento recomendada

Trabalhar em entregas verticais:

1. Base + Header + Hero
2. Projetos
3. Escritório
4. Serviços
5. Processo
6. Contato
7. QA responsivo
8. Acessibilidade
9. Performance
10. SEO / deploy
