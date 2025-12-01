# TurboAI - Frontend

Interface web para o sistema TurboAI de busca e análise de informações.

## 📋 Visão Geral

Este projeto implementa o frontend da aplicação TurboAI, permitindo que os usuários façam perguntas e recebam respostas processadas pelo backend.

## 🛠️ Tecnologias Utilizadas

- **React 18.2** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento de páginas
- **Axios** - Cliente HTTP para requisições

## 📦 Setup Inicial

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/anaareiis/PAA_2-Projeto_Final.git
cd turboai-frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173/`

## 🎯 Fases de Desenvolvimento

### Fase 1: Setup Inicial ✅
- [x] Estrutura básica do frontend
- [x] Configuração do TypeScript e Tailwind CSS
- [x] Estrutura de componentes

### Fase 2: Layout e Input 🔄
- [ ] Tela principal com caixa de texto para perguntas
- [ ] Área de exibição de respostas
- [ ] Design responsivo

### Fase 3: Integração 🔲
- [ ] Chamadas assíncronas com o backend
- [ ] Estados de carregamento
- [ ] Tratamento de erros

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── ResultCard.tsx
│   └── Modal.tsx
├── pages/              # Páginas da aplicação
│   ├── Home.tsx
│   └── Response.tsx
├── styles/             # Estilos globais
│   └── index.css
├── api/                # Configuração da API
│   └── client.ts
├── routes/             # Configuração de rotas
│   └── AppRoutes.tsx
├── App.tsx
└── main.tsx
```

## 🚀 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🔄 Fluxo de Trabalho (Git Flow)

### Branches

- **main**: Apenas código estável e pronto para entrega
- **develop**: Branch de integração para todos os PRs
- **feature/**: Branches para novas funcionalidades (ex: `feature/interface-web`)

### Commits (Conventional Commits)

- `feat:` - Novas funcionalidades
- `fix:` - Correção de bugs
- `docs:` - Alterações na documentação
- `refactor:` - Melhorias de código

**Exemplo:**
```bash
git commit -m "feat: adiciona caixa de busca na tela principal"
```

## 👥 Contribuidores

- Ana Reis (@anaareiis)

## 📝 Licença

Este projeto é parte do Projeto Final de PAA.
