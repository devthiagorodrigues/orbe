# 08. Design

> **Autoridade estrutural:** `06-arquitetura.md`  
> **Autoridade visual:** `07-direcao-visual.md`  
> **Conteúdo:** `05-conteudo.md`  
> **Estratégia:** `04-estrategia.md`  
> **Objetivo:** transformar decisões anteriores em especificação de interface implementável.

## 1. Design principles

### 1.1 Content first

O conteúdo define o espaço. Componentes não devem ditar o layout.

### 1.2 Editorial, not experimental

A composição pode ser assimétrica e expressiva, mas navegação e leitura continuam previsíveis.

### 1.3 Silence is a feature

Espaço negativo faz parte da interface.

### 1.4 Images carry meaning

Fotografia não é background decorativo.

### 1.5 One system, multiple rhythms

As seções podem variar de composição sem perder coerência.

### 1.6 Premium through precision

Sofisticação deve vir de:

- alinhamento;
- escala;
- tipografia;
- ritmo;
- imagens;
- estados bem resolvidos.

Não de efeitos.

## 2. Layout system

### Base

- 100% viewport width;
- conteúdo alinhado em grid;
- áreas full-bleed permitidas para fotografia;
- texto nunca ocupa largura total sem necessidade.

### Macro-rhythm

Alternar:

1. Hero imersivo;
2. Portfólio visual longo;
3. Bloco editorial com respiro;
4. Lista tipográfica;
5. Progressão de processo;
6. Contato silencioso.

## 3. Grid

### Desktop ≥ 1024px

- 12 colunas;
- gutter: 24px;
- margem lateral fluida: 48–96px;
- max-width de conteúdo estrutural: 1600px.

### Wide ≥ 1440px

- 12 colunas;
- gutter: 28–32px;
- margem lateral: 72–112px.

### Tablet 768–1023px

- 8 colunas;
- gutter: 20px;
- margem: 32–40px.

### Mobile < 768px

- 4 colunas;
- gutter: 16px;
- margem: 20–24px.

## 4. Containers

### `container-page`

Uso: estrutura padrão de seção.

Desktop:
- max-width: 1600px;
- centralizado;
- padding inline fluido.

### `container-copy`

Uso: texto corrido.

Largura:
- 560–720px desktop;
- 100% mobile.

### `container-wide`

Uso: projetos e imagens.

Pode atingir:
- largura total da viewport;
- ou grid de 10–12 colunas.

### Regra

Não colocar todos os blocos no mesmo container estreito.

## 5. Breakpoints

| Nome | Faixa | Uso |
|---|---:|---|
| mobile | 0–767px | composição linear |
| tablet | 768–1023px | 8 colunas |
| desktop | 1024–1439px | layout principal |
| wide | 1440px+ | maior respiro e escala |

Os breakpoints são de comportamento, não de dispositivo específico.

## 6. Spacing

Escala base:

| Token | Valor |
|---|---:|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 24px |
| 6 | 32px |
| 7 | 48px |
| 8 | 64px |
| 9 | 96px |
| 10 | 128px |
| 11 | 160px |
| 12 | 200px |

### Seções desktop

Padding vertical recomendado:

- 128–200px.

### Seções mobile

- 80–120px.

### Projeto para projeto

- 120–200px desktop;
- 80–120px mobile.

## 7. Typography scale

### Desktop

| Token | Fonte | Tamanho | Linha | Uso |
|---|---|---:|---:|---|
| display-xl | Cabinet Medium | 88–112px | 0.94–1.0 | Hero |
| display-lg | Cabinet Medium | 64–80px | 0.98–1.02 | H2 principal |
| display-serif | Instrument Serif | 56–72px | 1.0 | frase editorial |
| h3 | Cabinet Medium | 32–40px | 1.08 | projetos/serviços |
| lead | Cabinet Regular | 22–26px | 1.35 | introduções |
| body-lg | Cabinet Regular | 18–20px | 1.5 | textos principais |
| body | Cabinet Regular | 16–18px | 1.55 | interface/texto |
| small | Cabinet Regular | 13–14px | 1.45 | metadata |
| label | Cabinet Medium | 11–12px | 1.2 | uppercase/eyebrow |

### Mobile

| Token | Tamanho |
|---|---:|
| display-xl | 48–60px |
| display-lg | 40–48px |
| display-serif | 40–52px |
| h3 | 28–32px |
| lead | 20–22px |
| body-lg | 17–18px |
| body | 16px |
| small | 13px |
| label | 11px |

### Tracking

- display: `-0.02em` a `-0.035em`;
- body: `0`;
- labels: `0.12em` a `0.18em`;
- wordmark: usar SVG, nunca reproduzir por CSS.

## 8. Color tokens

| Token | Valor |
|---|---|
| `color-bg-primary` | `#F2EFE9` |
| `color-bg-dark` | `#1D1D1B` |
| `color-text-primary` | `#1D1D1B` |
| `color-text-inverse` | `#F2EFE9` |
| `color-brand-umber` | `#403832` |
| `color-neutral-stone` | `#BEB6AC` |
| `color-neutral-mineral` | `#85847F` |
| `color-accent-moss` | `#687060` |
| `color-accent-oxide` | `#985F48` |
| `color-border` | rgba/derivado de Ink com baixa opacidade |
| `color-error` | usar tom funcional acessível, não Oxide automaticamente |
| `color-success` | usar tom funcional acessível |

### Regra

Cores de estado não precisam pertencer literalmente à paleta da marca se isso comprometer significado ou contraste.

## 9. Radius

Tokens:

- `radius-0: 0px`
- `radius-xs: 2px`
- `radius-sm: 4px`

Não criar tokens maiores no MVP.

## 10. Borders

### Padrão

- 1px;
- baixa opacidade;
- usado para estrutura.

### Aplicações

- divisores;
- inputs;
- itens de processo;
- menu.

### Não usar

- borda em volta de todos os conteúdos;
- caixas de projeto;
- cards.

## 11. Shadows

### Padrão

`none`

### Exceção

Header sobre fotografia pode receber solução de contraste local mínima, preferencialmente via:

- gradiente de contraste muito sutil na imagem;
- mudança de versão do logo;
- transição para fundo sólido.

Não aplicar shadow de card.

## 12. Buttons

A Orbe não precisa de uma família extensa de botões.

### Primary action — text arrow

Visual:

`Conheça nossos projetos →`

Características:

- Cabinet Medium;
- underline opcional no hover;
- sem pill;
- sem fundo pesado;
- área de clique ≥ 44px de altura.

### Form submit

Pode usar:

- fundo Ink;
- texto Ivory;
- formato retangular;
- radius 0–2px.

Estados:

- default;
- hover;
- focus-visible;
- disabled;
- loading.

### Hover

- alteração discreta de posição da seta;
- 4–6px no máximo;
- 180–220ms.

## 13. Links

### Inline

- cor herdada;
- underline visível ou aparece no hover;
- foco visível.

### Navegação

- sem underline default;
- feedback por opacity, linha ou posição;
- nunca depender apenas de cor.

## 14. Inputs

### Estilo

Preferência por campo aberto com:

- label superior;
- fundo transparente;
- linha inferior 1px;
- altura mínima 52px.

### Textarea

- altura inicial 140–180px;
- resize vertical permitido.

### Select

- aparência customizada apenas se mantiver acessibilidade;
- native select é aceitável.

## 15. Forms

### Layout desktop

Nome + E-mail em duas colunas.

Tipo de projeto + Cidade em duas colunas.

Mensagem em largura total.

Submit ao final.

### Tablet/mobile

Uma coluna.

### Estados

- erro inline;
- `aria-describedby`;
- foco no primeiro erro após submit inválido;
- mensagem geral de sucesso;
- não limpar conteúdo em erro de rede.

### Validação

Campos obrigatórios:

- Nome
- E-mail
- Tipo de projeto
- Mensagem

Cidade pode ser opcional se necessário reduzir fricção.

## 16. Cards

### Regra

Não utilizar card tradicional.

Projetos, serviços e processo devem existir como:

- artigos;
- listas;
- composições;
- linhas;
- tipografia.

### Exceção

Nenhuma prevista no MVP.

## 17. Navigation

### Desktop

Altura inicial: 76–88px.

Logo:
- horizontal ou wordmark;
- versão correta conforme fundo.

Links:
- 14–15px;
- Cabinet Medium;
- espaçamento amplo.

### Estado sobre Hero

- branco/Ivory sobre imagem escura;
- ou Ink sobre região clara;
- selecionar imagem que permita contraste.

### Estado pós-scroll

- fundo Ivory;
- logo Ink/Umber;
- border-bottom sutil.

### Mobile

Trigger:

`Menu`

Menu aberto:

- fundo Ink;
- texto Ivory;
- links grandes;
- fechamento claro;
- sem animação complexa.

## 18. Header

### Posição

`sticky` ou `fixed`, desde que:

- não cubra anchors;
- não cause layout shift;
- não prejudique leitura do Hero.

### Comportamento recomendado

Fixed com transição de superfície após sair da área inicial do Hero.

### Não fazer

- header escondendo ao scroll e reaparecendo agressivamente;
- mega-menu;
- CTA em pill.

## 19. Footer

Footer é estrutura global, não seção de conteúdo.

Conteúdo mínimo:

- símbolo/wordmark;
- `Orbe Arquitetura`;
- navegação curta;
- cidade/região conceitual se necessário;
- disclosure do case;
- crédito Thiago Labs quando apropriado no ambiente de portfólio.

### Fundo

Preferência:

Ink.

### Disclosure

`Projeto conceitual desenvolvido pela Thiago Labs.`

## 20. Feedback states

### Form success

- mensagem textual;
- focus direcionado para feedback;
- nenhuma animação celebratória.

### Form error

- mensagem próxima ao campo;
- cor + texto + ícone opcional;
- não depender só de vermelho.

### Loading

- label `Enviando…`;
- botão disabled;
- indicador simples.

### Image loading

- background neutro;
- sem skeleton SaaS animado;
- fade curto após decode.

## 21. Icons

### Tamanhos

- 16px;
- 20px;
- 24px quando necessário.

### Stroke

1.25–1.5px.

### Conjunto mínimo

- arrow-right;
- menu;
- close;
- chevron-down;
- status icon opcional.

## 22. Images/media

### Hero

- aspect ratio flexível;
- preferir 4:5 / 3:2 / crop editorial conforme viewport;
- usar `object-fit: cover`;
- preservar ponto focal.

### Projetos

Permitir:

- 16:10;
- 4:5;
- 3:2;
- 1:1 apenas quando fizer sentido.

Evitar padronizar todas as imagens no mesmo ratio.

### Otimização

- AVIF/WebP;
- sizes responsivo;
- preload apenas da imagem hero;
- lazy loading abaixo da dobra;
- dimensões declaradas;
- quality ajustada por contexto.

### Alt text

Descrever conteúdo visual de modo objetivo.

Não usar:
`imagem de projeto`

Preferir:
`Sala integrada com grandes planos de vidro e estrutura em concreto aparente.`

Somente descrever o que realmente aparece.

## 23. Motion

### Global

Motion baixo.

### Hero

- headline: fade + translate Y 12–20px;
- duração: 500–650ms;
- imagem: scale inicial 1.015 para 1.0, opcional.

### Projetos

- reveal por clip/mask;
- hover scale 1.02–1.04;
- texto sem animação excessiva.

### Processo

- indicador/numeração pode avançar conforme seção entra na viewport;
- sem travar scroll.

### Header

- background e cor: 220–300ms.

### Mobile

- remover parallax;
- reduzir delay;
- nenhuma sequência longa.

### Reduced motion

Todos os conteúdos aparecem sem dependência de animação.

## 24. Accessibility

### Contraste

- Ink sobre Ivory como padrão;
- testar Moss/Oxide antes de usar em texto pequeno.

### Foco

- `focus-visible` perceptível;
- não remover outline sem substituição.

### Teclado

- menu;
- links;
- formulário;
- FAQ, se houver;
- todos navegáveis.

### Headings

Um único H1.

H2 por seção.

H3 para projeto/serviço quando necessário.

### Form

- labels reais;
- mensagens de erro associadas;
- autocomplete adequado;
- tipos corretos de input.

### Motion

Respeitar `prefers-reduced-motion`.

### Touch

Targets ≥ 44x44px.

### Imagens

Alt adequado; imagens puramente decorativas com alt vazio.

## 25. Responsive behavior

### Hero

**Desktop:**  
texto ocupa 5–6 colunas, imagem domina plano.

**Tablet:**  
texto 6–8 colunas, imagem ainda forte.

**Mobile:**  
headline acima da imagem ou sobre imagem com contraste garantido; evitar texto muito longo sobre foto.

### Projetos

**Desktop:**  
variações editoriais assimétricas.

**Tablet:**  
reduzir offsets.

**Mobile:**  
imagem → metadata → título → copy; uma leitura por vez.

### Escritório

**Desktop:**  
texto 5 colunas + imagem 6/7.

**Mobile:**  
headline → texto → frase editorial → imagem.

### Serviços

**Desktop:**  
lista larga, número + nome + descrição.

**Mobile:**  
empilhar; descrição sempre visível ou disclosure acessível.

### Processo

**Desktop:**  
números grandes / sticky intro opcional.

**Mobile:**  
timeline simples e linear.

### Contato

**Desktop:**  
headline em 4–5 colunas + form 6–7.

**Mobile:**  
uma coluna.

## 26. Design por página

### Home `/`

É a única página da experiência Orbe GO.

#### Entrada

- hero visualmente dominante;
- header leve;
- sem preloader;
- sem splash screen.

#### Meio

- portfólio com maior duração de scroll;
- transições suaves entre claro/escuro se necessário;
- mudança de ritmo após portfólio.

#### Final

- processo;
- contato;
- footer escuro.

### Page-level behavior

- scroll vertical nativo;
- anchors;
- sem horizontal scroll obrigatório;
- sem rota interna de projeto.

## 27. Design por seção

### Section 01 — Hero / Manifesto

```yaml
section: Hero / Manifesto
purpose: Posicionar a Orbe e levar aos projetos.
visual_hierarchy: H1 > imagem > supporting copy > CTA.
layout: 12-col editorial, imagem dominante e texto alinhado a um eixo lateral.
alignment: Esquerda; evitar centralização.
content_width: H1 entre 5 e 7 colunas.
background: Fotografia; fallback Ivory.
media: Uma imagem hero.
components: Header, H1, lead, text-arrow CTA.
primary_action: "Conheça nossos projetos →"
interaction: Entrada suave; CTA ancora em Projetos.
desktop: 90–100svh, grande escala tipográfica.
tablet: Reduzir headline e offset.
mobile: 85–95svh; texto legível, sem excesso de sobreposição.
accessibility: Garantir contraste e ordem DOM correta.
```

### Section 02 — Projetos

```yaml
section: Projetos
purpose: Demonstrar a linguagem arquitetônica.
visual_hierarchy: Imagem > nome do projeto > metadata > texto.
layout: Sequência de 4 artigos com variações 12-col.
alignment: Alternado, sempre ancorado no grid.
content_width: Imagens 7–12 colunas; texto 3–5.
background: Ivory como base; Ink pode aparecer como ruptura pontual.
media: 1–3 imagens por projeto.
components: ProjectArticle, Metadata, EditorialImage, InlineCTA.
primary_action: Explorar visualmente; CTA secundário para Processo.
interaction: Reveal de imagem e hover sutil.
desktop: Assimetria e contraste de escala.
tablet: Menos offsets.
mobile: Cada projeto vira sequência vertical clara.
accessibility: H3 por projeto; alt text específico.
```

### Section 03 — Escritório / Abordagem

```yaml
section: Escritório / Abordagem
purpose: Explicar o pensamento da Orbe.
visual_hierarchy: Headline > corpo > frase editorial > imagem.
layout: 5/7 ou 4/8.
alignment: Esquerda.
content_width: Corpo máximo 620px.
background: Ivory ou Stone muito claro.
media: Uma imagem de detalhe.
components: Eyebrow, Heading, Body, EditorialQuote, Image.
primary_action: "Conheça nossos serviços →"
interaction: Reveal discreto; nenhuma interação obrigatória.
desktop: Muito espaço negativo.
tablet: 8-col.
mobile: Fluxo linear.
accessibility: Frase editorial não substitui conteúdo informativo.
```

### Section 04 — Serviços

```yaml
section: Serviços
purpose: Explicar ofertas.
visual_hierarchy: Heading > serviço > descrição.
layout: Lista horizontal larga dividida por linhas.
alignment: Esquerda.
content_width: 100% container-page.
background: Ivory.
media: Nenhuma obrigatória.
components: ServiceList, ServiceItem, TextCTA.
primary_action: "Fale sobre seu projeto →"
interaction: Hover de linha/número, sem esconder conteúdo essencial.
desktop: Nome 4 colunas + descrição 6 colunas.
tablet: Nome 3 + descrição 5.
mobile: Empilhado.
accessibility: Não usar hover como única forma de revelar descrição.
```

### Section 05 — Processo

```yaml
section: Processo
purpose: Reduzir incerteza.
visual_hierarchy: Heading > número da etapa > título > explicação.
layout: Intro sticky opcional + etapas em coluna.
alignment: Esquerda.
content_width: Etapas 7–8 colunas.
background: Ink com texto Ivory ou Ivory com Ink, conforme ritmo final.
media: Nenhuma obrigatória; detalhe técnico opcional.
components: ProcessStep, Divider, OptionalFAQ, TextCTA.
primary_action: "Inicie uma conversa →"
interaction: Progressão visual conforme scroll; sem scroll lock.
desktop: Números grandes e bastante respiro.
tablet: Sticky pode ser removido.
mobile: Timeline linear.
accessibility: Ordem DOM segue 01–05; motion opcional.
```

### Section 06 — Contato

```yaml
section: Contato
purpose: Converter em mensagem qualificada.
visual_hierarchy: Headline > explicação > formulário > submit.
layout: 5/7.
alignment: Esquerda.
content_width: Form até 760px.
background: Ivory.
media: Nenhuma.
components: Heading, Body, ContactForm, Input, Select, Textarea, Button, Feedback.
primary_action: "Enviar mensagem"
interaction: Validação e estados.
desktop: Headline lateral; form ao lado.
tablet: Duas áreas ainda possíveis.
mobile: Uma coluna.
accessibility: Labels, erros, foco, teclado, autocomplete.
```

## 28. Component inventory

### Global

- `Header`
- `DesktopNav`
- `MobileNav`
- `Logo`
- `Footer`

### Typography

- `Eyebrow`
- `DisplayHeading`
- `SectionHeading`
- `EditorialText`
- `BodyText`
- `Metadata`

### Actions

- `TextArrowLink`
- `SubmitButton`

### Portfolio

- `ProjectArticle`
- `ProjectMetadata`
- `EditorialImage`
- `ImagePair`

### Content

- `ServiceList`
- `ServiceItem`
- `ProcessList`
- `ProcessStep`
- `OptionalFAQ`

### Form

- `ContactForm`
- `TextInput`
- `EmailInput`
- `SelectInput`
- `Textarea`
- `FieldError`
- `FormStatus`

### Utility

- `SectionDivider`
- `Disclosure`
- `ReducedMotionFallback`

## 29. Anti-patterns

Não implementar:

- cards com sombra;
- glassmorphism;
- gradientes;
- pills;
- border-radius alto;
- ícones de casa/arquitetura;
- carrossel automático;
- preloader;
- intro cinematográfica obrigatória;
- smooth scroll que substitui scroll nativo;
- scroll horizontal obrigatório;
- cursor customizado que prejudique UX;
- texto sobreposto a imagem sem contraste;
- parallax forte;
- tipografia serif em todos os títulos;
- mesma composição em todas as seções;
- seção “Nossos números”;
- seção de depoimentos fictícios;
- páginas individuais de projeto;
- CMS;
- blog;
- filtros;
- busca.

---

# Auditoria Final 04–08

## Estratégia

- [x] objetivo consistente;
- [x] público consistente;
- [x] oferta consistente;
- [x] CTA consistente.

## Conteúdo

- [x] mensagens seguem estratégia;
- [x] não existem fatos inventados;
- [x] objeções são respondidas;
- [x] ausência de prova social foi respeitada.

## Arquitetura

- [x] seções executam a estratégia;
- [x] não há estrutura supérflua;
- [x] conversão está distribuída de forma coerente;
- [x] existem exatamente seis seções de conteúdo.

## Direção Visual

- [x] representa posicionamento;
- [x] respeita marca;
- [x] não copia referências;
- [x] evita estética de arquitetura genérica.

## Design

- [x] implementa arquitetura;
- [x] implementa direção visual;
- [x] suporta conteúdo;
- [x] possui regras responsivas;
- [x] possui regras de acessibilidade;
- [x] possui inventário de componentes.

## Escopo

- [x] nenhuma funcionalidade externa foi adicionada;
- [x] CMS continua fora;
- [x] páginas individuais foram removidas;
- [x] nenhuma seção extra foi criada;
- [x] GO permanece dentro do limite informado de 6 seções.

**Status:** `READY_FOR_DEVELOPMENT`
