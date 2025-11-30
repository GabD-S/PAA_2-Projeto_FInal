# SQLite RAG

O **SQLite RAG** é um sistema de busca híbrida (Retrieval-Augmented Generation) leve e eficiente, construído sobre o SQLite. Ele combina o poder da pesquisa vetorial (usando embeddings) com a precisão da pesquisa textual tradicional (FTS5), tudo rodando localmente sem necessidade de servidores externos.

## Como Funciona

O sistema utiliza uma abordagem híbrida para recuperar informações:
1.  **Embeddings**: O texto é convertido em vetores numéricos usando o modelo **Embedding Gemma** (ou outros modelos GGUF). Isso permite encontrar trechos com significado semântico similar, mesmo que não usem as mesmas palavras.
2.  **Full-Text Search (FTS5)**: Utiliza o índice de texto completo do SQLite para encontrar correspondências exatas de palavras-chave.
3.  **Reciprocal Rank Fusion (RRF)**: Os resultados das duas buscas são combinados e reordenados para oferecer a melhor resposta possível.

## Estrutura do Código

-   **`src/sqlite_rag/chunker.py`**: Responsável por dividir os documentos em pedaços menores (chunks) para processamento.
-   **`src/sqlite_rag/engine.py`**: O núcleo do sistema, gerencia a lógica de busca híbrida e interação com o banco de dados.
-   **`src/sqlite_rag/extractor.py`**: Extrai texto de diversos formatos de arquivo (PDF, DOCX, etc.).
-   **`src/sqlite_rag/database.py`**: Gerencia a conexão e as operações no banco de dados SQLite.
-   **`src/sqlite_rag/cli.py`**: Interface de linha de comando para interagir com o sistema.

## Como Rodar

### 1. Instalação

Instale as dependências do sistema e o pacote Python:

```bash
sudo apt install build-essential python3-dev python3-venv libsqlite3-dev
python3 -m venv .venv
source .venv/bin/activate
pip install --break-system-packages -e .
```

### 2. Baixar o Modelo

Baixe o modelo de embeddings recomendado:

```bash
sqlite-rag download-model unsloth/embeddinggemma-300m-GGUF embeddinggemma-300M-Q8_0.gguf
```

### 3. Ingestão de Documentos

Coloque seus arquivos (PDF, TXT, etc.) em uma pasta (ex: `docs/`) e execute:

```bash
python -m sqlite_rag.cli add docs/ --recursive
```

### 4. Realizar Busca

Para buscar informações na base indexada:

```bash
python -m sqlite_rag.cli search "sua pergunta" --limit 5
```

## Exemplo de Uso

**Pergunta:**
`"receita de bolo"`

**Comando:**
```bash
python -m sqlite_rag.cli search "receita de bolo" --limit 5
```

**Saída do Código:**

```text
Database: /home/gabriel_pc/Área de trabalho/UNB/Jan_materias/PAA/sqlite-rag/sqliterag.sqlite
━━━ Search Results (5 matches) ━━━

┌─ Result #1 ──────────────────────────────────────────────────────────────────
│ 📕 ...UNB/Jan_materias/PAA/sqlite-rag/docs/volta-mundo-120-receitas-vol2.pdf│
├─────────────────────────────────────────────────────────────────────────────┤
│ Jambalaya de frutos do m a                                                  │
│ r................................................... [...] Torta de maçã    │
│ [Applepie)....................................................... Torta de  │
│ limão (Lemon pie).....................................................      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ Result #2 ──────────────────────────────────────────────────────────────────
│ 📕 ...UNB/Jan_materias/PAA/sqlite-rag/docs/volta-mundo-120-receitas-vol2.pdf│
├─────────────────────────────────────────────────────────────────────────────┤
│ Arroz com ervilhas (Risi i bisi).......................................     │
│ [...] Bacalhau cremoso (Baccalà mantegato)........................ [...]    │
│ Torta de trigo com frutas cristalizadas (Pastieradigrano)                   │
│ Zabaione.......................................                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ Result #3 ──────────────────────────────────────────────────────────────────
│ 📕 ...UNB/Jan_materias/PAA/sqlite-rag/docs/volta-mundo-120-receitas-vol2.pdf│
├─────────────────────────────────────────────────────────────────────────────┤
│ Ingredientes - recheio [...] Modo de fazer - recheio [...] Unte com a       │
│ manteiga as formas de empadinhas.                                           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ Result #4 ──────────────────────────────────────────────────────────────────
│ 📕 ...UNB/Jan_materias/PAA/sqlite-rag/docs/volta-mundo-120-receitas-vol2.pdf│
├─────────────────────────────────────────────────────────────────────────────┤
│ Ingredientes e utensílio - bolo [...] Modo de fazer - bolo [...] C ubra,    │
│ então, o bolo com a cobertura de chocolate.                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ Result #5 ──────────────────────────────────────────────────────────────────
│ 📕 ...UNB/Jan_materias/PAA/sqlite-rag/docs/volta-mundo-120-receitas-vol2.pdf│
├─────────────────────────────────────────────────────────────────────────────┤
│ Faça uma cova no centro da farinha e coloque as gemas e a manteiga. Amasse  │
│ com as pontas dos dedos c vá juntando leite, até formar uma massa lisa e    │
│ com boa consistência para sei aberta com rolo. [...] Esquente a manteiga    │
│ com o óleo numa panela r i ande.                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```
