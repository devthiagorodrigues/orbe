# 06. Arquitetura

> **Dependências:** `04-estrategia.md` + `05-conteudo.md`  
> **Produto:** GO  
> **Regra de escopo:** uma landing page com **6 seções de conteúdo no máximo**  
> **Decisão de arquitetura:** nenhuma página individual de projeto no MVP.

## 1. Princípios de arquitetura

### 1.1 Uma página, uma narrativa

A experiência será linear e editorial. O visitante percorre:

`Posicionamento → Portfólio → Abordagem → Serviços → Processo → Contato`

### 1.2 Portfólio é o núcleo

Projetos devem receber o maior espaço vertical e visual.

### 1.3 Navegação curta

A navegação principal aponta para âncoras da própria página.

### 1.4 Seções devem concentrar funções

O limite de seis seções não será contornado com pseudo-seções repetidas.

Artigos de projeto, grupos internos e blocos de conteúdo podem existir dentro da seção Projetos sem se tornarem páginas ou seções independentes de navegação.

### 1.5 Header e footer são estruturas globais

Não contam como seções de conteúdo.

### 1.6 Sem arquitetura prematura

Não criar CMS, rotas de projeto, filtros, busca ou blog “pensando no futuro”.

## 2. Sitemap

```text
/
├── #inicio
├── #projetos
├── #escritorio
├── #servicos
├── #processo
└── #contato
```

### Estruturas globais

```text
Header
Footer
```

### Não existem no MVP

```text
/projetos
/projetos/[slug]
/escritorio
/servicos
/processo
/contato
/blog
```

## 3. Navegação

### Desktop

Logo à esquerda.

Links:

- Projetos
- Escritório
- Serviços
- Processo
- Contato

CTA visualmente destacado apenas por tipografia/seta, não por botão SaaS.

### Mobile

- símbolo ou wordmark compacto;
- botão “Menu”;
- painel de navegação em tela cheia ou quase cheia;
- cinco links;
- “Fechar” acessível;
- foco aprisionado corretamente durante menu aberto.

### Comportamento

- no topo do Hero: header transparente ou integrado à imagem, desde que contraste seja garantido;
- após scroll: header pode assumir fundo Ivory;
- âncoras devem considerar offset do header;
- respeitar `prefers-reduced-motion` no scroll.

## 4. Jornada principal

### 4.1 Entrada

O visitante entende “arquitetura + interiores” e percebe o posicionamento.

### 4.2 Exploração

Vai aos projetos.

### 4.3 Identificação

Compara visualmente quatro linguagens de projeto.

### 4.4 Compreensão

Lê abordagem e serviços.

### 4.5 Segurança

Entende processo.

### 4.6 Conversão

Preenche formulário.

## 5. Jornadas secundárias

### Jornada A — visitante vindo por indicação

`Hero → Escritório → Processo → Contato`

### Jornada B — visitante buscando interiores

`Hero → Projetos → Serviços → Contato`

### Jornada C — visitante comercial

`Hero → Projetos / Studio Alba → Serviços → Contato`

### Jornada D — visitante apenas exploratório

`Hero → Projetos → fim da experiência`

A página deve continuar entregando valor mesmo sem conversão imediata.

## 6. Estrutura por página

```yaml
page: Home
route: /
goal: Apresentar o portfólio e transformar identificação em contato qualificado.
primary_user: Pessoa física de médio/alto padrão buscando arquitetura residencial ou interiores.
primary_cta: "Conheça nossos projetos →"
sections:
  - name: Hero / Manifesto
    purpose: Comunicar posicionamento e levar ao portfólio.
    content: Headline, apoio, CTA e imagem principal.
    proof: Nenhuma.
    interaction: Entrada sutil; CTA ancora em Projetos.
    cta: "Conheça nossos projetos →"

  - name: Projetos
    purpose: Demonstrar linguagem e gerar identificação.
    content: Quatro projetos conceituais em sequência editorial.
    proof: Portfólio conceitual.
    interaction: Hover/zoom discreto, reveals e mudanças de ritmo de composição.
    cta: "Conheça nosso processo →"

  - name: Escritório / Abordagem
    purpose: Explicar como a Orbe pensa arquitetura.
    content: Headline, texto institucional e frase editorial.
    proof: Coerência metodológica.
    interaction: Tipografia e imagem de detalhe com movimento mínimo.
    cta: "Conheça nossos serviços →"

  - name: Serviços
    purpose: Apresentar ofertas e priorização.
    content: Cinco serviços em lista editorial.
    proof: Clareza de escopo.
    interaction: Hover textual ou destaque visual mínimo.
    cta: "Fale sobre seu projeto →"

  - name: Processo
    purpose: Reduzir incerteza.
    content: Cinco etapas e FAQ opcional incorporado.
    proof: Processo estruturado.
    interaction: Progressão no scroll e numeração.
    cta: "Inicie uma conversa →"

  - name: Contato
    purpose: Converter interesse em mensagem.
    content: Headline, texto, formulário, feedback.
    proof: Não aplicável.
    interaction: Validação de formulário e estados.
    cta: "Enviar mensagem"
```

## 7. Estrutura por seção

### 7.1 Hero / Manifesto

**Conteúdo obrigatório**

- logo/header;
- headline;
- supporting copy;
- CTA;
- imagem hero.

**Não incluir**

- selos;
- números;
- badges;
- múltiplos CTAs;
- carrossel;
- texto institucional longo.

**Altura**

Entre 85vh e 100svh, com adaptação em mobile.

---

### 7.2 Projetos

A seção deve ser longa o suficiente para funcionar como portfólio, mas permanece uma única seção semântica.

#### Estrutura interna

```text
Section heading
Intro
Project Article 01 — Casa Horizonte
Project Article 02 — Apartamento Lume
Project Article 03 — Casa Serra
Project Article 04 — Studio Alba
Transition CTA
```

Cada `Project Article` contém:

- nome;
- categoria;
- cidade;
- copy curta;
- 1 imagem principal;
- 1 ou 2 imagens secundárias quando houver disponibilidade.

Não conter:

- botão “Ver projeto” para rota inexistente;
- métricas inventadas;
- cliente;
- ano;
- área;
- status de obra;
- galeria modal complexa.

#### Estratégia de ritmo

Alternar composição:

- imagem full-bleed;
- imagem 8 colunas + texto 4;
- texto deslocado + imagem 9 colunas;
- duas imagens com escalas diferentes.

A alternância não cria novos componentes de produto, apenas variações de layout do mesmo item.

---

### 7.3 Escritório / Abordagem

Combina conteúdo que anteriormente poderia virar:

- Sobre;
- Escritório;
- Diferenciais;
- Manifesto.

Isso evita inflar escopo.

Estrutura:

```text
Eyebrow
Headline
2 blocos de texto
Frase editorial
Imagem/detalhe
```

Não criar:

- história cronológica fictícia;
- equipe fictícia;
- fundador fictício;
- números.

---

### 7.4 Serviços

Estrutura:

```text
Heading
Intro curta
Lista 01–05
CTA contextual
```

Cada serviço:

- número;
- nome;
- descrição curta.

Não usar cards.

Não criar páginas internas.

---

### 7.5 Processo

Estrutura:

```text
Heading
Intro
01 Imersão
02 Conceito
03 Projeto
04 Detalhamento
05 Acompanhamento
FAQ compacto opcional
CTA
```

O FAQ, se incluído, é parte da mesma seção.

Máximo recomendado: 3 ou 4 perguntas.

---

### 7.6 Contato

Estrutura:

```text
Headline
Supporting copy
Form
Status messages
Disclosure / region note
```

Campos:

- Nome
- E-mail
- Tipo de projeto
- Cidade
- Mensagem

Evitar:

- telefone fictício;
- WhatsApp fictício;
- endereço fictício;
- mapa;
- calendário;
- formulário longo.

## 8. CTAs

### CTA principal global

`Conheça nossos projetos →`

Aparece no Hero.

### CTA de meio de jornada

`Conheça nosso processo →`

Após portfólio, somente se necessário.

### CTA de conversão

`Inicie uma conversa →`

Aparece em Serviços ou Processo.

### CTA de envio

`Enviar mensagem`

Aparece somente no formulário.

### Regra

Nenhuma seção deve ter dois CTAs concorrentes.

## 9. Conteúdos dinâmicos

### MVP

Não há CMS.

Os projetos podem ser tratados no desenvolvimento como conteúdo estruturado local:

```text
Project
- name
- category
- location
- shortDescription
- media[]
- alt[]
- layoutVariant
```

Isso não transforma a experiência em sistema de gestão.

### Futuro

Se o portfólio real crescer, a estrutura poderá migrar para CMS e páginas individuais em um produto/escopo futuro.

Não implementar agora.

## 10. CMS

**Decisão:** não usar CMS.

### Motivo

- somente quatro projetos;
- projeto conceitual;
- sem usuário editor;
- GO deve permanecer simples;
- manutenção pode ser feita no código.

### Critério para reconsiderar futuramente

- publicação frequente;
- vários responsáveis por conteúdo;
- crescimento significativo do portfólio;
- necessidade de categorias e filtros.

## 11. Requisitos funcionais

### Obrigatórios

- navegação por âncoras;
- menu mobile;
- formulário;
- validação de campos;
- estados de envio;
- Analytics quando houver ambiente definitivo;
- Search Console quando houver propriedade indexável;
- imagens responsivas;
- lazy loading abaixo do Hero;
- suporte a reduced motion;
- SEO técnico básico;
- metadata de projeto conceitual.

### Não obrigatórios

- WhatsApp;
- ligação;
- mapa;
- agendamento;
- newsletter;
- filtros;
- busca;
- CMS;
- blog;
- CRM;
- área de downloads.

## 12. Integrações

### Formulário

Endpoint a definir.

Requisitos:

- não expor segredo no client;
- validação server-side;
- proteção básica contra abuso;
- resposta de sucesso/erro;
- não solicitar dados desnecessários.

### Analytics

A definir no deploy.

### Search Console

Somente para página indexável da Thiago Labs ou versão pública cuja indexação seja deliberada.

## 13. SEO estrutural

### Demo Orbe

Recomendação:

`noindex, nofollow`

Razão:

- projeto conceitual;
- risco de confusão com empresa real de nome semelhante;
- não existe negócio real para ranquear.

### Case Thiago Labs

Indexável.

Deve existir uma página de case com:

- contexto;
- desafio;
- estratégia;
- identidade;
- design;
- resultado do projeto conceitual;
- disclosure explícito.

### Heading structure da demo

```text
H1 — Espaços que refletem a forma como você vive.
H2 — Projetos
H2 — Arquitetura começa por quem habita.
H2 — Da arquitetura ao interior, um mesmo pensamento.
H2 — Do entendimento à matéria.
H2 — Todo projeto começa por uma conversa.
```

Nomes de projetos podem ser `H3`.

## 14. Responsividade estrutural

### Desktop

- composição assimétrica;
- maior variação de escala;
- 12 colunas;
- projeto pode ocupar múltiplos eixos.

### Tablet

- 8 colunas;
- reduzir sobreposições;
- manter ritmo sem exigir precisão de desktop.

### Mobile

- 4 colunas;
- ordem linear clara;
- uma imagem dominante por vez;
- reduzir motion;
- manter espaço negativo;
- evitar elementos fora da viewport;
- menu simples.

### Regra

Mobile não será “desktop empilhado” sem revisão.

## 15. Limites de escopo

### Incluído

- 1 landing page;
- 6 seções;
- header;
- footer;
- 4 projetos dentro da seção Projetos;
- formulário;
- microinterações discretas;
- SEO técnico básico;
- responsividade;
- acessibilidade;
- Analytics/Search Console conforme ambiente.

### Não incluído

- páginas individuais de projeto;
- página Projetos separada;
- página Escritório;
- página Serviços;
- página Processo;
- página Contato;
- CMS;
- blog;
- filtros;
- busca;
- mapa;
- agenda;
- integrações complexas;
- multi-idioma.

---

# Auditoria 04 ↔ 05 ↔ 06

- [x] arquitetura implementa a estratégia;
- [x] todo bloco possui função;
- [x] não há seção decorativa;
- [x] ordem corresponde à jornada de consideração;
- [x] CTA principal leva ao portfólio;
- [x] CTA de contato aparece apenas depois de contexto suficiente;
- [x] não há página desnecessária;
- [x] produto GO é respeitado;
- [x] limite de 6 seções é respeitado;
- [x] conteúdo disponível suporta a arquitetura;
- [x] páginas individuais antigas foram removidas do escopo;
- [x] não foi criado CMS.

**Status da Arquitetura:** `APPROVED_FOR_VISUAL_DIRECTION`
