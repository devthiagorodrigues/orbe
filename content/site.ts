export const navigation = [
  { href: "#projetos", label: "Projetos" },
  { href: "#escritorio", label: "Escritório" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" }
] as const;

export const hero = {
  title: "Espaços que refletem a forma como você vive.",
  description:
    "Arquitetura e interiores concebidos entre estética, funcionalidade e identidade.",
  cta: { href: "#projetos", label: "Conheça nossos projetos" }
} as const;

export const projects = [
  {
    slug: "casa-horizonte",
    name: "Casa Horizonte",
    category: "Residencial",
    location: "São Paulo",
    description:
      "Uma casa desenhada a partir dos percursos do dia a dia, com luz e paisagem sempre próximas do interior.",
    note: "Percurso, luz e permanência.",
    variant: "wide",
    images: [
      {
        src: "/images/orbe/casa-horizonte/exterior.webp",
        width: 896,
        height: 1200,
        orientation: "portrait",
        caption: "Percurso externo",
        alt: "Percurso coberto da Casa Horizonte entre fachada de madeira, concreto e jardim."
      },
      {
        src: "/images/orbe/casa-horizonte/interior.webp",
        width: 896,
        height: 1200,
        orientation: "portrait",
        caption: "Interior e jardim",
        alt: "Sala da Casa Horizonte integrada ao jardim por grandes planos de vidro."
      },
      {
        src: "/images/orbe/casa-horizonte/detail.webp",
        width: 896,
        height: 1200,
        orientation: "portrait",
        caption: "Encontro de materiais",
        alt: "Detalhe do encontro entre esquadria, madeira, concreto e piso claro na Casa Horizonte."
      }
    ]
  },
  {
    slug: "apartamento-lume",
    name: "Apartamento Lume",
    category: "Interiores",
    location: "São Paulo",
    description:
      "Interiores guiados pela luz, pelos materiais e por uma rotina que pede continuidade entre os ambientes.",
    note: "Luz baixa, textura e continuidade.",
    variant: "offset",
    images: [
      {
        src: "/images/orbe/apartamento-lume/living.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Sala de estar",
        alt: "Sala clara do Apartamento Lume com sofá neutro, madeira natural e luz filtrada."
      },
      {
        src: "/images/orbe/apartamento-lume/kitchen.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Cozinha e jantar",
        alt: "Cozinha e jantar do Apartamento Lume com marcenaria clara e superfícies de pedra."
      },
      {
        src: "/images/orbe/apartamento-lume/intimate.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Área íntima",
        alt: "Quarto do Apartamento Lume em tons claros, madeira natural e tecidos neutros."
      }
    ]
  },
  {
    slug: "casa-serra",
    name: "Casa Serra",
    category: "Residencial",
    location: "Campos do Jordão",
    description:
      "Uma arquitetura de abrigo e paisagem, em que matéria e abertura se equilibram ao longo do terreno.",
    note: "Abrigo, pedra e abertura.",
    variant: "landscape",
    images: [
      {
        src: "/images/orbe/casa-serra/exterior.webp",
        width: 1376,
        height: 768,
        orientation: "panorama",
        caption: "Casa e terreno",
        alt: "Casa Serra integrada ao terreno entre pedra natural, madeira e vegetação de montanha."
      },
      {
        src: "/images/orbe/casa-serra/interior.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Sala e paisagem",
        alt: "Sala da Casa Serra com lareira de pedra e grandes aberturas para a paisagem."
      },
      {
        src: "/images/orbe/casa-serra/detail.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Limiar material",
        alt: "Detalhe de pedra, madeira e esquadria escura em um limiar da Casa Serra."
      }
    ]
  },
  {
    slug: "studio-alba",
    name: "Studio Alba",
    category: "Comercial",
    location: "São Paulo",
    description:
      "Um espaço comercial em que operação, circulação e identidade seguem a mesma direção de projeto.",
    note: "Fluxo, presença e uso.",
    variant: "editorial",
    images: [
      {
        src: "/images/orbe/studio-alba/main.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Área principal",
        alt: "Interior principal do Studio Alba com madeira, vidro e circulação integrada."
      },
      {
        src: "/images/orbe/studio-alba/reception.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Entrada e presença",
        alt: "Detalhe arquitetônico do Studio Alba com abertura escura e superfícies claras."
      },
      {
        src: "/images/orbe/studio-alba/workspace.webp",
        width: 1200,
        height: 896,
        orientation: "landscape",
        caption: "Trabalho e reunião",
        alt: "Área de reunião do Studio Alba com mesa de madeira e divisórias de vidro."
      }
    ]
  }
] as const;

export const studio = {
  title: "Arquitetura começa por quem habita.",
  paragraphs: [
    "Antes de definir forma, materiais ou estética, buscamos entender rotina, necessidades, referências e modos de uso.",
    "A partir dessa leitura, o projeto organiza espaço, luz, matéria e circulação em uma direção clara. A intenção não é impor uma linguagem pronta, mas construir uma arquitetura que tenha identidade sem deixar de pertencer a quem a vive."
  ],
  editorialLine: "A autoria está nas decisões. Não na repetição de uma fórmula.",
  principles: [
    {
      name: "Uso antes da forma",
      description: "O desenho parte da rotina, da circulação e das necessidades concretas do espaço."
    },
    {
      name: "Matéria com intenção",
      description: "Materiais, luz e proporção entram como decisões de projeto, não como acabamento isolado."
    },
    {
      name: "Identidade sem fórmula",
      description: "Cada proposta busca coerência própria, sem repetir uma assinatura estética pronta."
    }
  ],
  imageCaption: "Detalhe de encontro entre madeira, concreto, esquadria e piso claro."
} as const;

export const services = [
  {
    number: "01",
    name: "Arquitetura residencial",
    description:
      "Projetos de residências e apartamentos que articulam organização espacial, circulação, luz, materiais e modo de viver.",
    fit: "Para construir ou redesenhar a experiência completa de morar."
  },
  {
    number: "02",
    name: "Interiores",
    description:
      "Layout, materiais, iluminação, marcenaria, mobiliário e acabamentos tratados como partes do mesmo espaço.",
    fit: "Para dar coerência ao uso, à atmosfera e aos detalhes internos."
  },
  {
    number: "03",
    name: "Arquitetura comercial",
    description:
      "Espaços para clínicas, restaurantes, escritórios e negócios que precisam aproximar operação, presença e identidade.",
    fit: "Para negócios em que o espaço também comunica posicionamento."
  },
  {
    number: "04",
    name: "Reformas",
    description:
      "Reorganização de espaços existentes a partir de novas necessidades e formas de uso.",
    fit: "Para transformar uma estrutura existente sem perder direção de projeto."
  },
  {
    number: "05",
    name: "Consultoria",
    description:
      "Orientação pontual para decisões de layout, materiais, composição e direcionamento arquitetônico.",
    fit: "Para destravar escolhas específicas antes de avançar."
  }
] as const;

export const processSteps = [
  {
    number: "01",
    name: "Imersão",
    description:
      "Entendimento de rotina, necessidades, referências, prioridades e objetivos.",
    outcome: "Briefing claro antes do desenho."
  },
  {
    number: "02",
    name: "Conceito",
    description:
      "O briefing ganha direção arquitetônica. Espaço, linguagem, atmosfera e materiais começam a tomar forma.",
    outcome: "Direção espacial e visual."
  },
  {
    number: "03",
    name: "Projeto",
    description:
      "Desenvolvimento dos ambientes, fluxos, materiais, iluminação e soluções que organizam o conjunto.",
    outcome: "Soluções organizadas por ambiente."
  },
  {
    number: "04",
    name: "Detalhamento",
    description:
      "As decisões aprovadas são traduzidas em especificações e informações necessárias para execução.",
    outcome: "Informação para orientar a execução."
  },
  {
    number: "05",
    name: "Acompanhamento",
    description:
      "Quando previsto no escopo, a Orbe acompanha etapas da passagem do projeto para a obra.",
    outcome: "Apoio na passagem do projeto à matéria."
  }
] as const;

export const contact = {
  title: "Todo projeto começa por uma conversa.",
  description:
    "Conte um pouco sobre o espaço, o momento do projeto e o que você precisa. Não é necessário ter tudo definido."
} as const;
