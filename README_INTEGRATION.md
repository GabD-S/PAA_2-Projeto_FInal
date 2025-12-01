# Integração SQLite RAG com Frontend React

Este documento descreve as adaptações realizadas para integrar o backend `sqlite-rag` com a interface frontend em React.

## Visão Geral

O projeto foi adaptado para funcionar como uma aplicação Full Stack:
- **Backend**: Uma API RESTful construída com FastAPI que expõe as funcionalidades do `sqlite-rag`.
- **Frontend**: Uma aplicação React (localizada na pasta `Front`) que consome esta API.

## Mudanças Realizadas

1. **Criação do Servidor API (`server.py`)**:
   - Foi criado um servidor FastAPI na raiz do projeto `sqlite-rag`.
   - Implementado o endpoint `POST /api/query` para receber perguntas do frontend.
   - Configurado CORS para permitir requisições do frontend (localhost).
   - A resposta é formatada em Markdown para ser renderizada corretamente pelo componente de resposta do frontend.

2. **Dependências**:
   - Adicionadas bibliotecas necessárias para o servidor web: `fastapi`, `uvicorn`, `pydantic`.

## Como Rodar o Projeto

### Pré-requisitos

- Python 3.12+
- Node.js e npm (para o frontend)
- Um banco de dados `sqlite-rag` populado (arquivo `sqliterag.sqlite`).

### 1. Configuração e Execução do Backend

1. Navegue até a pasta `sqlite-rag`.
2. Instale as dependências (se ainda não estiverem instaladas):
   ```bash
   # Instala o pacote sqlite-rag e suas dependências
   pip install -e .
   
   # Instala dependências do servidor
   pip install fastapi uvicorn pydantic
   ```
3. Certifique-se de ter dados no banco. Se não tiver, adicione alguns documentos de exemplo:
   ```bash
   # Exemplo: Adicionar arquivos de texto da pasta de testes
   sqlite-rag add tests/assets/samples/
   ```
4. Inicie o servidor:
   ```bash
   python server.py
   ```
   O servidor iniciará em `http://localhost:8000`.

### 2. Configuração e Execução do Frontend

1. Navegue até a pasta `Front`.
2. Instale as dependências do Node.js:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse a aplicação no navegador (geralmente em `http://localhost:5173`).

## Estrutura da API

### `POST /api/query`

Recebe uma pergunta e retorna os trechos mais relevantes dos documentos indexados.

**Request Body:**
```json
{
  "query": "Qual é a melhor maneira de melhorar o áudio da TV?"
}
```

**Response:**
```json
{
  "answer": "### Resultados Encontrados:\n\n**1. 7_tv_speakers_to_improve_your_home_audio_experience.txt** (Relevância: 0.03)\n> Conteúdo do trecho..."
}
```
