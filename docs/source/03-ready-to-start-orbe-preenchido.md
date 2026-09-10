# THIAGO LABS
# 03. Ready to Start

> **Fase:** DISCOVER  
> **Objetivo:** validar se o projeto possui todas as condições comerciais, informacionais, criativas e técnicas necessárias para entrar em produção sem dependências críticas pendentes.

---

# 1. Regra principal

O projeto **não entra em PLAN** apenas porque o briefing foi respondido.

Ele só avança quando estiver suficientemente completo para que a Thiago Labs consiga executar:

- Estratégia;
- Conteúdo;
- Arquitetura;
- Direção Visual;
- Design;
- Desenvolvimento;

sem depender de informações essenciais que deveriam ter sido fornecidas antes do início.

O resultado desta etapa é binário:

- `NOT_READY`
- `READY_TO_START`

Quando existirem pendências do cliente, utilizar também:

- `AWAITING_CLIENT`

Quando existir dúvida de escopo:

- `SCOPE_REVIEW`

Quando existir risco ou requisito técnico ainda não validado:

- `TECHNICAL_REVIEW`

---

# 2. Identificação

**Cliente:**  
Orbe Arquitetura — projeto conceitual desenvolvido pela Thiago Labs

**Projeto:**  
Orbe Arquitetura — Case 02 / Website institucional + portfólio editorial

**Produto contratado:**

- [x] GO
- [ ] GO Express
- [ ] EXPERIENCE
- [ ] SCALE
- [ ] Outro: _______________________________

> **Observação:** GO está registrado como produto de referência do case. A adequação final do produto precisa ser revista porque o escopo levantado é multipágina.

**Responsável interno:**  
Thiago — Thiago Labs

**Data da validação:**  
10 / 09 / 2026

---

# 3. Validação comercial

## 3.1 Contratação

- [x] Produto contratado está confirmado
- [x] Escopo vendido está documentado
- [x] Adicionais estão documentados
- [x] Exclusões e limites estão claros
- [x] Exceções comerciais estão registradas
- [x] Quantidade de revisões está definida
- [ ] Prazo comercial está definido
- [x] Marco inicial do prazo está definido como Ready to Start, quando aplicável

> **Nota:** como se trata de um projeto conceitual interno, “contratado” e “vendido” são usados apenas como equivalentes operacionais do fluxo da Thiago Labs. Não houve cliente ou venda real.

## 3.2 Contrato e pagamento

- [x] Contrato concluído
- [x] Pagamento inicial confirmado
- [x] Condições especiais de pagamento estão documentadas
- [x] Não existem divergências entre proposta, contrato e escopo interno

> **Aplicação ao case:** contrato e pagamento são `N/A`. A validação acima significa que a inexistência desses itens foi documentada e não representa dependência do projeto.

### Pendências comerciais

- Prazo comercial não se aplica ao case conceitual; definir apenas cronograma interno de produção após a revisão de escopo.
- Não existem pendências de pagamento ou contrato.

---

# 4. Validação do briefing

O briefing deve permitir responder com segurança:

- [x] O que a empresa faz
- [x] O que a empresa vende
- [x] Qual oferta é prioritária
- [x] Quem é o público principal
- [x] Quem toma a decisão de compra
- [x] Qual problema o público precisa resolver
- [x] Quais são as principais necessidades
- [x] Quais são as principais objeções
- [x] Por que escolher esta empresa
- [x] Quais diferenciais são comprováveis
- [x] Quais provas existem
- [x] Qual é o objetivo principal do site
- [x] Qual é a conversão principal
- [x] Qual é o CTA principal
- [x] Qual percepção a marca deve transmitir
- [x] Qual percepção a marca deve evitar
- [x] Quais conteúdos existem
- [x] Quais conteúdos ainda estão faltando
- [x] Quais requisitos funcionais existem
- [x] Quais restrições precisam ser respeitadas

### O briefing possui respostas contraditórias?

- [ ] Não
- [x] Sim

Se sim:

Existe uma contradição entre o **produto GO** selecionado e a necessidade de um site claramente **multipágina**. O briefing define Home, Projetos, Projeto individual, Escritório, Serviços, Processo e Contato, enquanto a própria regra de liberação do GO neste documento exige que “não exista necessidade real de arquitetura multipágina”.

Essa divergência precisa ser resolvida antes da liberação.

### Existem respostas críticas vagas ou incompletas?

- [x] Não
- [ ] Sim

Se sim:

N/A. As pendências restantes são de produção e detalhamento, não de entendimento estratégico do negócio.

---

# 5. Validação de conteúdo

## 5.1 Informações comerciais

- [x] Nome correto da empresa
- [x] Produtos / serviços validados
- [x] Diferenciais validados
- [x] Processo de compra / contratação compreendido
- [x] Regiões atendidas validadas
- [x] Horários validados, quando aplicável
- [x] Preços validados, quando aplicável
- [x] Condições comerciais relevantes validadas

> Horários e preços foram definidos como não aplicáveis ou sob orçamento, sem inventar dados.

## 5.2 Contatos

- [x] WhatsApp correto
- [x] Telefone correto
- [ ] E-mail correto
- [x] Endereço correto
- [x] Links de redes sociais corretos

> WhatsApp, telefone, endereço e redes sociais foram explicitamente definidos como `N/A`/não necessários para esta versão conceitual.  
> O e-mail funcional do formulário ainda precisa ser definido para implementação.

## 5.3 Provas

- [x] Depoimentos recebidos ou definidos como indisponíveis
- [x] Avaliações identificadas
- [x] Cases identificados
- [x] Números / estatísticas validados
- [x] Certificações / registros identificados
- [x] Autorizações de uso consideradas quando necessárias

> Não existem depoimentos, avaliações, números, certificações ou registros reais. Isso foi tratado como restrição explícita, não como conteúdo a ser inventado.

### Conteúdo essencial ainda pendente

- Copy final de cada página.
- Narrativas completas dos projetos conceituais.
- Imagens definitivas dos projetos.
- Plantas/detalhes técnicos conceituais, se entrarem nas páginas.
- E-mail/endpoint final do formulário.

Essas pendências **não bloqueiam estratégia e arquitetura**, mas precisam ser resolvidas antes das respectivas fases de UI final e publicação.

---

# 6. Validação de marca e materiais

## 6.1 Identidade visual

- [x] Logo recebido
- [x] Logo possui qualidade adequada
- [x] Manual de marca recebido, se existir
- [x] Paleta existente identificada
- [x] Tipografia existente identificada
- [x] Restrições de marca registradas

Caso o cliente não possua identidade visual completa:

- [x] Está claro o limite do trabalho da Thiago Labs dentro do produto contratado
- [x] A ausência de identidade não impede a criação da direção visual

> A Orbe já possui Brand System v1.0, símbolo, wordmark, assinaturas, favicon, paleta, tipografias e direção visual.

## 6.2 Imagens e mídia

- [ ] Fotos próprias recebidas
- [x] OU uso de banco de imagens está autorizado
- [x] Vídeos necessários recebidos, quando aplicável
- [ ] Qualidade dos materiais foi avaliada
- [x] Direitos / autorizações relevantes foram considerados

> Vídeo não é necessário para o escopo atual, portanto a ausência não bloqueia o projeto.

### Pendências de materiais

- Produzir/selecionar as imagens definitivas de Casa Horizonte, Apartamento Lume, Casa Serra e Studio Alba.
- Garantir coerência visual entre imagens de um mesmo projeto.
- Registrar origem/licença quando forem usados bancos de imagem.
- Se forem usados renders ou imagens geradas, manter a natureza conceitual clara no case.

Essas pendências são **não bloqueantes para estratégia**, mas tornam-se bloqueantes antes do fechamento visual das páginas de projeto.

---

# 7. Validação funcional

Todos os requisitos funcionais estão identificados?

- [ ] WhatsApp
- [ ] Ligação
- [x] Formulários
- [ ] Mapas
- [ ] Agendamento
- [x] Analytics
- [x] Search Console
- [ ] Pixels
- [ ] CMS
- [ ] Blog
- [ ] Busca
- [ ] Filtros
- [ ] Integrações externas
- [x] Outras funcionalidades

**Outras funcionalidades identificadas:**

- galeria/narrativa editorial de projetos;
- páginas individuais de projeto;
- transições e microinterações discretas;
- conteúdo estruturado/reutilizável de projetos;
- navegação responsiva;
- respeito a `prefers-reduced-motion`.

### Há funcionalidade solicitada fora do produto contratado?

- [ ] Não
- [x] Sim

Se sim:

Não há uma “funcionalidade isolada” claramente incompatível, mas a **arquitetura multipágina e o nível editorial do portfólio** entram em conflito com o critério de GO definido neste próprio documento.

A questão é de **escopo/produto**, não de tecnologia.

### Há funcionalidade ainda sem definição técnica?

- [x] Não
- [ ] Sim

Se sim:

N/A. O formulário precisará apenas de definição de destino/e-mail antes da implementação final, sem alterar a arquitetura técnica do produto.

---

# 8. Validação técnica

## 8.1 Domínio

- [ ] Domínio identificado
- [ ] Registrador identificado
- [x] Responsável pelo acesso identificado
- [x] Situação atual do DNS compreendida

> Não existe domínio próprio definido para a Orbe. Como é um case conceitual, isso não bloqueia a produção. A publicação poderá ocorrer em ambiente controlado pela Thiago Labs.

## 8.2 Hospedagem

- [x] Solução de hospedagem definida
- [x] LIVE / CARE identificado, quando contratado
- [x] Hospedagem atual analisada, quando relevante

**Definição:**  
Vercel como direção de hospedagem, seguindo o padrão técnico da Thiago Labs. LIVE/CARE não foram contratados e não se aplicam ao case.

## 8.3 E-mail e DNS

- [x] Foi verificado se existem e-mails usando o domínio
- [x] Provedor de e-mail identificado
- [x] Alterações futuras de DNS não serão realizadas sem considerar o e-mail
- [x] Outros serviços dependentes do DNS foram identificados

> Não existe domínio/e-mail corporativo da Orbe nesta etapa. Logo, não há serviço existente a preservar.

## 8.4 Integrações

- [x] Integrações necessárias estão identificadas
- [x] Credenciais / acessos necessários estão disponíveis ou possuem plano de obtenção
- [x] Dependências de terceiros foram registradas

> Não existem integrações externas obrigatórias. Analytics/Search Console poderão ser configurados no ambiente de publicação quando houver URL definitiva.

### Riscos técnicos identificados

1. Excesso de motion ou carregamento de imagens grandes prejudicar performance.
2. Uso de imagens de arquitetura em alta resolução sem estratégia de otimização.
3. Crescimento do portfólio tornar manutenção manual inconveniente no futuro.
4. Implementar complexidade desnecessária para simular uma experiência “premium”.
5. Publicação de imagens conceituais sem identificação adequada.
6. Escopo multipágina incompatível com o critério formal de GO presente neste documento.

---

# 9. Validação de aprovação

- [x] Existe um responsável principal pelo projeto no cliente
- [x] Existe uma pessoa com palavra final sobre aprovação
- [x] Quantidade de aprovadores é conhecida
- [x] O canal oficial de comunicação está definido
- [x] O cliente conhece a regra de feedback consolidado
- [x] Datas críticas externas foram registradas

> Aprovação é interna: Thiago. Não há cliente externo real nem data crítica contratual.

---

# 10. Validação por produto

## GO

Para liberar um GO:

- [x] Oferta principal está clara
- [x] Conversão principal está clara
- [x] Existe conteúdo suficiente para montar uma landing page completa
- [x] Funcionalidades estão dentro do escopo GO
- [ ] Não existe necessidade real de arquitetura multipágina
- [x] Não existe necessidade de CMS complexo
- [x] Não existe necessidade de experiência interativa incompatível com GO

### Conclusão GO

**Falha em um critério de liberação:** há necessidade real de arquitetura multipágina conforme o briefing aprovado.

O projeto atualmente prevê:

1. Home
2. Projetos
3. Projeto individual
4. Escritório
5. Serviços
6. Processo
7. Contato

Portanto, **não é correto marcar o GO como Ready to Start enquanto essa divergência permanecer**.

A Thiago Labs precisa escolher uma das duas alternativas antes de prosseguir:

**Alternativa A — manter o produto GO e reduzir/reorganizar o projeto para uma arquitetura compatível com o critério formal do GO.**

**Alternativa B — manter a arquitetura multipágina aprovada e reclassificar o produto/ajustar oficialmente a definição do GO nos documentos internos.**

Minha recomendação para a Orbe é **não reduzir o projeto apenas para satisfazer o checklist**. O portfólio e as páginas individuais são parte central da estratégia aprovada. Portanto, o mais coerente é revisar a definição/encaixe do produto antes de iniciar PLAN.

## GO Express

> Não aplicável.

- [ ] Todo conteúdo obrigatório já foi recebido
- [ ] Logo / identidade disponível
- [ ] Imagens disponíveis ou banco autorizado
- [ ] Contatos confirmados
- [ ] Não existem decisões críticas pendentes
- [ ] Escopo está congelado
- [ ] O cliente conhece a regra de aprovação rápida
- [ ] O projeto cabe integralmente no limite do GO Express

## EXPERIENCE

> Não aplicável.

- [ ] Objetivo da experiência está claro
- [ ] Percepção desejada está clara
- [ ] Restrições criativas estão claras
- [ ] Conteúdo principal está disponível
- [ ] Nível de liberdade criativa está entendido
- [ ] Requisitos de motion / interação estão dentro do escopo
- [ ] Não existe dependência crítica que impeça conceito e direção de arte

## SCALE

> Não aplicável.

- [ ] Grandes áreas de conteúdo estão identificadas
- [ ] Necessidades multipágina estão claras
- [ ] Tipos de conteúdo dinâmico foram identificados
- [ ] Necessidade de CMS foi analisada
- [ ] Necessidade de busca / filtros foi analisada
- [ ] Integrações relevantes foram identificadas
- [ ] Volume inicial de conteúdo é conhecido
- [ ] Não existem dúvidas críticas sobre o sitemap necessário

---

# 11. Matriz de pendências

| Pendência | Tipo | Responsável | Bloqueia início? | Prazo | Status |
|---|---|---|---|---|---|
| Resolver incompatibilidade entre GO e arquitetura multipágina | SCOPE | Thiago / Thiago Labs | **Sim** | Antes do PLAN | `OPEN` |
| Definir cronograma interno de produção | INTERNAL | Thiago | Não | Após revisão de escopo | `OPEN` |
| Produzir/selecionar imagens definitivas dos projetos | CONTENT | Thiago / Produção | Não para estratégia; sim antes da UI final | Durante conteúdo/direção visual | `OPEN` |
| Fechar copy final das páginas | CONTENT | Thiago | Não para início do PLAN | Durante conteúdo | `OPEN` |
| Definir e-mail/destino do formulário | TECHNICAL | Thiago | Não para PLAN; sim para publicação | Antes da integração final | `OPEN` |
| Definir URL/domínio de publicação do case | TECHNICAL | Thiago | Não | Antes do deploy público | `OPEN` |
| Validar licenciamento final das fontes no ambiente publicado | LEGAL / BRAND | Thiago | Não para PLAN; sim antes da publicação | Antes do deploy público | `OPEN` |

Tipos sugeridos:

- `CLIENT`
- `COMMERCIAL`
- `CONTENT`
- `BRAND`
- `TECHNICAL`
- `SCOPE`
- `LEGAL`
- `INTERNAL`

---

# 12. Regra de bloqueio

Uma pendência bloqueia o início quando sua ausência impede uma decisão necessária de:

- estratégia;
- conteúdo;
- arquitetura;
- direção visual;
- design;
- desenvolvimento;

ou quando cria risco real de:

- retrabalho;
- mudança de escopo;
- quebra de prazo;
- publicação incorreta;
- perda de serviço existente;
- impossibilidade de aprovação.

Pendências não críticas podem seguir registradas sem impedir o início, desde que exista uma decisão clara sobre como serão tratadas.

### Aplicação à Orbe

A ausência das imagens finais, domínio e e-mail de formulário **não impede o PLAN**.

A divergência entre o produto GO e a arquitetura multipágina **bloqueia**, porque interfere diretamente em escopo, arquitetura, orçamento conceitual, esforço de produção e coerência dos próprios processos internos.

---

# 13. Resultado

## Status

- [ ] `NOT_READY`
- [ ] `AWAITING_CLIENT`
- [x] `SCOPE_REVIEW`
- [ ] `TECHNICAL_REVIEW`
- [ ] `READY_TO_START`

## Justificativa

O projeto possui estratégia, público, posicionamento, identidade, objetivos, serviços, conteúdo-base, direção criativa e requisitos técnicos suficientes para iniciar planejamento.

Entretanto, existe uma divergência formal de escopo que não deve ser ignorada: o projeto está classificado como **GO**, mas a arquitetura aprovada é multipágina, enquanto o critério de liberação do GO neste documento exige explicitamente que não exista necessidade real de arquitetura multipágina.

Como essa decisão afeta diretamente a arquitetura do produto e o processo de produção, o status correto neste momento é:

`SCOPE_REVIEW`

Não recomendo marcar `READY_TO_START` apenas para fazer o fluxo avançar.

## Pendências não bloqueantes

- Produção/seleção das imagens arquitetônicas.
- Copy final de cada página.
- Definição da URL pública.
- Definição do e-mail do formulário.
- Configuração de Analytics/Search Console.
- Validação final de licenciamento das fontes.
- Cronograma interno de produção.

---

# 14. Registro de liberação

**Liberado por:**  
Pendente — aguarda resolução de `SCOPE_REVIEW`

**Data:**  
____ / ____ / ______

**Produto:**  
GO — sujeito a revisão de enquadramento antes da liberação

**Prazo oficial de produção:**  
A definir após revisão de escopo

**Data oficial de início:**  
____ / ____ / ______

**Data estimada de entrega:**  
____ / ____ / ______

---

# 15. Critério de encerramento

Esta etapa está concluída quando:

1. o escopo contratado está claro;
2. briefing e materiais possuem informação suficiente;
3. não existem dúvidas críticas de negócio;
4. não existem pendências bloqueantes;
5. riscos técnicos foram identificados;
6. dependências externas possuem solução ou responsável;
7. o produto contratado continua adequado à necessidade levantada;
8. a pessoa responsável pelo projeto pode iniciar o PLAN sem precisar interromper o trabalho para buscar informações essenciais.

**Saída oficial atual:** `SCOPE_REVIEW`

**Saída esperada após resolução:** `READY_TO_START`

**Próxima etapa após liberação:** `04. Estratégia`

---

# DECISÃO NECESSÁRIA ANTES DO PLAN

A única pendência realmente bloqueante neste momento é a seguinte:

> **A Orbe precisa de uma arquitetura multipágina para cumprir a estratégia aprovada, mas o checklist atual do GO afirma que um GO só pode ser liberado quando não existe necessidade real de arquitetura multipágina.**

Para preservar a qualidade do projeto, a recomendação é:

**manter a arquitetura multipágina da Orbe e revisar formalmente o enquadramento do produto/processo**, em vez de reduzir o projeto artificialmente a uma landing page.

Até essa decisão ser registrada, o projeto deve permanecer em `SCOPE_REVIEW`.
