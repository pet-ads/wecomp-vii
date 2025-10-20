# WECOMP VI

Página destinada à Semana da Computação WECOMP.

## Estrutura de Diretórios

### `scripts/`

Contém scripts auxiliares para execução local do projeto.

- `run-dev.sh`: Script para iniciar o projeto em ambiente de desenvolvimento.

### `src/`

Pasta principal do código-fonte da aplicação.

- `App.tsx`: Componente principal que encapsula o restante da aplicação.
- `main.tsx`: Ponto de entrada da aplicação.
- `vite-env.d.ts` e `vite-config.ts`: Configurações de tipos específicas do Vite.
- `package.json` e `package-lock.json`: Configuração de dependências do projeto.

### `assets/`

Contém arquivos estáticos da aplicação.

- `images/`: Imagens utilizadas no projeto, organizadas por propósito.
- `icons/`: Icones utilizados no projeto, organizadas por propósito.
- `content/`: Arquivos de dados utilizados no projeto, organizados por propósito.

### `components/`

Componentes reutilizáveis divididos em duas categorias:

#### `commons/`

Componentes comuns projeto organizados em subdiretórios:

##### `structure/`

Componentes fixos da aplicação, comumente não são utilizados em outros projetos dado seus aspecto singular com o projeto

##### `toolkit/`

Componentes reutilizaveis da aplicação, podem ser reutilizados por outros componentes na aplicação.

#### `sections/`

Componentes específicos de cada seção da página

### `global/`

Contém estilos globais aplicados à aplicação:

- `GlobalStyles.ts`: Define o tema base e os estilos globais.

### `pages/`

Contém as páginas da aplicação:

- `Home/`: Página inicial, com seu estilo e lógica.

### `styles/`

Estilos compartilhados entre componentes:

- Estilos genéricos para outros componentes.

### `animations/`

Define animações reutilizáveis com Framer Motion.

### `hooks/`

Contém hooks personalizados utilizados pelos componentes.

### `dto/`

Centraliza a exportação dos componentes chave.

### `utils/`

Funções auxiliares da aplicação.

- `responsive/`: Define pontos de quebra para responsividade.

### `tests/`

Contém os testes End-to-End (E2E) da aplicação, escritos com Playwright.

## Tecnologias Utilizadas

- React + TypeScript
- Vite
- Framer Motion
- Styled Components
- Facepaint
- Playwright

---

## Como Rodar o Projeto

### 1. Ambiente de Desenvolvimento

Para iniciar o projeto em modo de desenvolvimento:

- Clone o repositório com o comando: `git clone https://github.com/pet-ads/wecomp-new.git`
- Instale o gerenciador de dependências **Yarn** com o comando: `npm install -g yarn`
- Navegue até a pasta do projeto no explorador de arquivos e abra-a utilizando o **Git Bash**.
- No terminal do Git Bash, execute o script: `sh scripts/run-dev.sh`
- Se preferir rodar o projeto diretamente com **npm** (ou **yarn**), utilize:
  `npm run dev`

Ao final, será fornecido um link para acesso à versão de desenvolvimento (geralmente `http://localhost:5173`).

> **Observação:** Antes de enviar qualquer commit para o repositório, execute o comando `npm run build` para gerar uma versão de produção. Caso não haja erros, prossiga normalmente com o envio do commit.

### 2. Rodando os Testes End-to-End (E2E)

Utilizamos o **Playwright** para garantir a qualidade da aplicação.

#### 2.1. Execução no Terminal

Para executar todos os testes E2E em modo *headless* (sem interface gráfica):

```bash
npx playwright test
```

#### 2.2. Execução com Interface Gráfica (Playwright UI)

O Playwright oferece uma interface gráfica poderosa para depurar, inspecionar elementos e rodar testes de forma interativa. É a forma recomendada para escrever e manter os testes.

Para abrir o Playwright UI:

**Bash**

```
npx playwright test --ui
```

Isso abrirá uma janela que permite:

* Ver a lista de testes.
* Rodar testes individualmente.
* Inspecionar o passo a passo de cada teste.
* Usar a ferramenta "Pick Locator" para gerar seletores robustos.

---

## Como Contribuir

Faça um fork deste repositório.

Crie uma nova branch: `git checkout -b minha-branch`.

Faça suas alterações e adicione commits: `git commit -m "Minha contribuição"`.

Envie suas alterações: `git push origin minha-branch`.

Abra um Pull Request.
