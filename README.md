# 🚀 OpenBoard - Trabalho Front-end UniSatc

Plataforma moderna de divulgação e busca de oportunidades em startups de tecnologia. Desenvolvida como projeto para a disciplina de **Desenvolvimento Front-end** na **UniSatc**.

---

## 📌 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar Localmente](#-como-executar-localmente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Autoria e Créditos](#-autoria-e-créditos)

---

## 💡 Sobre o Projeto

O **OpenBoard** é uma aplicação web focada em conectar talentos de tecnologia a oportunidades reais em startups e empresas de destaque no ecossistema (como Vercel, Nubank, Betha Sistemas, Brex, entre outras).

A interface prioriza uma experiência limpa, intuitiva e sem atritos: sem necessidade de cadastro prévio para visualização ou candidatura às vagas.

---

## ✨ Funcionalidades

- **Mural de Vagas Interativo**:
  - Exibição de oportunidades em cards informativos com cargo, empresa, faixa salarial, modalidade (remoto) e tempo de publicação.
  - Ação de candidatura rápida integrada.
- **Filtros Dinâmicos em Tempo Real**:
  - Filtro por **Tipo de Contrato**: *Efetivo*, *Estágio* e *Temporário*.
  - Filtro por **Área de Atuação**: *Engenharia*, *Design* e *Gestão*.
  - Contagem dinâmica de vagas disponíveis com base nos filtros ativos.
  - Estado vazio (*empty state*) amigável com botão de limpeza de filtros em um clique.
- **Inscrição na Newsletter**:
  - Formulário para recebimento de novidades semanais com validação de e-mail e confirmação instantânea em tela.
- **Prova Social / Depoimentos**:
  - Seção com depoimentos de profissionais e recrutadores que utilizam o ecossistema.
- **Navegação e Layout Responsivo**:
  - Cabeçalho fixo (*sticky header*) e rodapé com navegação por âncoras.
  - Design totalmente responsivo para dispositivos móveis, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas e bibliotecas:

- **[React 19](https://react.dev/)**: Biblioteca para construção de interfaces reativas baseadas em componentes funcionais.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática, garantindo manutenibilidade, autocomplete e segurança contra erros em tempo de desenvolvimento.
- **[Vite](https://vite.dev/)**: Ferramenta de build de alta performance e servidor de desenvolvimento ultrarrápido com HMR (*Hot Module Replacement*).
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework utilitário de CSS integrado nativamente via `@tailwindcss/vite` para estilização moderna e consistente.
- **[React Compiler](https://react.dev/learn/react-compiler)**: Otimização de renderização e memoização automática de componentes.
- **[React Router](https://reactrouter.com/)**: Gerenciamento de rotas e estruturação de layout compartilhado.
- **[ESLint](https://eslint.org/)**: Padronização e análise estática de código com regras recomendadas para React e TypeScript.

---

## 📂 Estrutura do Projeto

A organização dos arquivos e pastas segue o padrão de componentes modulares:

```text
trabalho-frontend-unisatc/
└── app/
    ├── public/                # Arquivos estáticos e ícones
    ├── src/
    │   ├── components/        # Componentes de seção da página
    │   │   ├── Depoimentos.tsx # Seção de depoimentos de usuários
    │   │   ├── Footer.tsx     # Rodapé com links e direitos autorais
    │   │   ├── Header.tsx     # Cabeçalho com logo e ações rápidas
    │   │   ├── Hero.tsx       # Seção principal de apresentação e CTA
    │   │   ├── Layout.tsx     # Shell com Header, Outlet e Footer
    │   │   ├── News.tsx       # Seção de captura de leads / newsletter
    │   │   └── Vagas.tsx      # Listagem, filtros e cards de oportunidades
    │   ├── pages/             # Telas da aplicação
    │   │   └── Home.tsx       # Página inicial composta pelas seções
    │   ├── ui/                # Componentes atômicos reutilizáveis
    │   │   └── Button.tsx     # Botão genérico com variantes (primary, secondary, outline)
    │   ├── App.tsx            # Definição das rotas da aplicação
    │   ├── index.css          # Configurações globais e importação do Tailwind CSS
    │   └── main.tsx           # Ponto de entrada (Entry point) com BrowserRouter
    ├── index.html             # Template HTML principal
    ├── package.json           # Dependências e scripts do projeto
    ├── tsconfig.json          # Configurações do compilador TypeScript
    └── vite.config.ts         # Configuração dos plugins do Vite (React, Babel e Tailwind)
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **[Node.js](https://nodejs.org/)** (versão 18 ou superior recomendada)
- Gerenciador de pacotes **npm** (incluso com o Node.js) ou **pnpm** / **yarn**

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/trabalho-frontend-unisatc.git
   ```

2. **Acesse a pasta da aplicação:**
   ```bash
   cd trabalho-frontend-unisatc/app
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   Acesse `http://localhost:5173` para visualizar a aplicação em execução.

---

## 📜 Scripts Disponíveis

Dentro do diretório `app/`, você pode executar os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite localmente com recarga automática (*HMR*). |
| `npm run build` | Valida as tipagens (`tsc -b`) e compila a aplicação otimizada para produção no diretório `dist`. |
| `npm run preview` | Executa um servidor web local para visualizar o build de produção gerado. |
| `npm run lint` | Executa o ESLint para verificar padrões e qualidade de código em arquivos `.ts` e `.tsx`. |

---

## 🎓 Autoria e Créditos

Projeto desenvolvido por **Vinícius A. Goulart** para fins acadêmicos na **UniSatc** (Criciúma - SC).
